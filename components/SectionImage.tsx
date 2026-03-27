'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { GoogleGenAI } from '@google/genai';
import { getCachedImage, setCachedImage } from '@/lib/idb';

interface SectionImageProps {
  section: 'about' | 'experience' | 'education' | 'writings';
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
}

export default function SectionImage({ section, alt, className, fill, width, height }: SectionImageProps) {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function generateImage() {
      try {
        // Check IndexedDB cache first
        const cached = await getCachedImage(section);
        if (cached) {
          if (isMounted) {
            setImageSrc(cached);
            setLoading(false);
          }
          return;
        }

        // Fetch the base image from our proxy to avoid CORS
        const proxyRes = await fetch('/api/proxy-image');
        if (!proxyRes.ok) throw new Error('Failed to fetch proxy image');
        const { base64, mimeType } = await proxyRes.json();

        // Initialize Gemini API
        const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
        if (!apiKey) throw new Error('Missing Gemini API Key');
        
        const ai = new GoogleGenAI({ apiKey });

        const basePrompt = "Edit this image of the woman to change her environment and outfit while keeping her face, identity, ethnicity, and skin tone EXACTLY the same. Professional editorial photography, warm organic lighting, highly detailed.";
        
        let prompt = '';
        if (section === 'about') prompt = `${basePrompt} Setting: A bright, warm cafe. She is holding a coffee cup and smiling gently.`;
        else if (section === 'experience') prompt = `${basePrompt} Setting: A modern corporate office. She is standing confidently in professional business attire.`;
        else if (section === 'education') prompt = `${basePrompt} Setting: A modern library. She is sitting at a desk with books and a laptop, studying.`;
        else if (section === 'writings') prompt = `${basePrompt} Setting: A cozy wooden desk. She is writing in a notebook, aesthetic and inspiring atmosphere.`;

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [
              { inlineData: { data: base64, mimeType } },
              { text: prompt },
            ],
          },
        });

        const parts = response.candidates?.[0]?.content?.parts || [];
        for (const part of parts) {
          if (part.inlineData) {
            const dataUrl = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
            // Save to cache
            await setCachedImage(section, dataUrl);
            
            if (isMounted) {
              setImageSrc(dataUrl);
              setLoading(false);
            }
            return;
          }
        }
        
        if (isMounted) setError(true);
      } catch (err) {
        console.error('Image generation error:', err);
        if (isMounted) setError(true);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    generateImage();

    return () => {
      isMounted = false;
    };
  }, [section]);

  if (loading) {
    return (
      <div className={`bg-ink/5 animate-pulse flex items-center justify-center ${className}`}>
        <div className="text-ink/40 text-sm uppercase tracking-widest font-semibold flex flex-col items-center">
          <div className="w-6 h-6 border-2 border-ink/20 border-t-ink/60 rounded-full animate-spin mb-3" />
          Generating Image...
        </div>
      </div>
    );
  }

  if (error || !imageSrc) {
    return (
      <div className={`bg-ink/5 flex items-center justify-center ${className}`}>
        <div className="text-ink/40 text-sm uppercase tracking-widest font-semibold">
          Image Unavailable
        </div>
      </div>
    );
  }

  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill={fill}
      width={width}
      height={height}
      className={className}
      unoptimized // Using base64 data URL
    />
  );
}
