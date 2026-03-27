'use client';

import { motion } from 'motion/react';
import { Globe, Heart, BookOpen } from 'lucide-react';
import SectionImage from '@/components/SectionImage';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-paper"
          >
            <SectionImage 
              section="about"
              alt="Salome in a cafe"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl mb-6">About Me</h1>
            <div className="flex flex-col space-y-4 text-sm text-ink/60 uppercase tracking-wider mb-8">
              <div className="flex items-center"><Globe className="w-4 h-4 mr-3" /> Ghanaian living in Sweden</div>
              <div className="flex items-center"><Heart className="w-4 h-4 mr-3" /> Mental Health Advocate</div>
              <div className="flex items-center"><BookOpen className="w-4 h-4 mr-3" /> Christian Writer</div>
            </div>
            <p className="text-xl leading-relaxed text-ink/80 mb-12">
              I am a strategy-minded economist combining corporate banking experience with advanced quantitative research. Good in market/competitor analysis, internal performance insights, and building clear models and presentations that support strategic decisions. Comfortable navigating cross-functional stakeholders (pricing, finance, product, commercial) and translating data-driven insights into actionable initiatives in international environments.
            </p>
            
            <h3 className="font-serif text-2xl mb-6">Core Competencies</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Strategy support & Growth initiatives",
                "Market & competitor analysis",
                "Financial/strategic modeling (Excel)",
                "Cross-functional collaboration",
                "Structured problem-solving",
                "Tools: Stata (advanced), Excel, PowerPoint"
              ].map((skill, i) => (
                <div key={i} className="flex items-start p-4 bg-paper rounded-2xl">
                  <div className="w-2 h-2 mt-2 rounded-full bg-terracotta mr-4 shrink-0" />
                  <span className="text-ink/80">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
