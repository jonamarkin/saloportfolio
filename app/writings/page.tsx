'use client';

import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Heart, Globe } from 'lucide-react';
import SectionImage from '@/components/SectionImage';

export default function WritingsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 relative h-[50vh] min-h-[400px] rounded-3xl overflow-hidden bg-paper"
        >
          <SectionImage 
            section="writings" 
            alt="Writings" 
            fill 
            className="object-cover" 
          />
          <div className="absolute inset-0 bg-ink/50 flex items-center justify-center text-center px-6">
            <div>
              <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">Writings & Advocacy</h1>
              <p className="text-white/90 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                Beyond economics, I am passionate about mental health advocacy and share my thoughts through blogs and Christian writings.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Mental Health Advocacy", desc: "Thoughts and resources on maintaining mental well-being in academia and beyond.", icon: Heart, color: "text-terracotta" },
            { title: "Christian Writings", desc: "Reflections on faith, purpose, and navigating life's journey.", icon: BookOpen, color: "text-olive" },
            { title: "Economics Blog", desc: "Translating complex economic policies and research into accessible insights.", icon: Globe, color: "text-ink" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-ink/5 hover:shadow-md transition-shadow"
            >
              <item.icon className={`w-8 h-8 mb-6 ${item.color}`} />
              <h3 className="font-serif text-2xl mb-3">{item.title}</h3>
              <p className="text-ink/70 mb-6">{item.desc}</p>
              <button className="text-sm font-semibold uppercase tracking-widest flex items-center hover:opacity-70 transition-opacity">
                Read More <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
