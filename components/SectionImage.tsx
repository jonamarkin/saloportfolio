'use client';

import Image from 'next/image';

interface SectionImageProps {
  section: 'about' | 'experience' | 'education' | 'writings';
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
}

export default function SectionImage({ section, alt, className, fill, width, height }: SectionImageProps) {
  const imageSrc = `/images/salome-ayitey-${section}.png`;

  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill={fill}
      width={width}
      height={height}
      className={className}
    />
  );
}
