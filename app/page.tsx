'use client';

import { motion } from 'motion/react';
import { ArrowRight, BookOpen, HeartHandshake, LineChart, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const focusAreas = [
    { label: 'Research & analysis', icon: LineChart },
    { label: 'Project coordination', icon: Users },
    { label: 'Communication', icon: BookOpen },
    { label: 'Advocacy & community', icon: HeartHandshake },
  ];

  return (
    <main className="min-h-screen bg-paper">
      <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/salo-professional.jpeg"
            alt="Salome Ayitey in a professional setting" 
            fill 
            className="object-cover object-top opacity-45"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-paper/85 via-paper/55 to-paper" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-olive mb-6 block">
              Economist | Project Coordination | Communication
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ink mb-8 leading-none">
              Salome Ayitey
            </h1>
            <p className="text-xl md:text-2xl text-ink/70 max-w-2xl mx-auto font-light leading-relaxed mb-12">
              Economist, doctoral researcher, writer, communicator, and lifelong learner translating evidence into clear decisions, useful insights, and coordinated action.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/about" className="group flex items-center text-sm font-semibold uppercase tracking-widest text-ink hover:text-terracotta transition-colors">
                About Salome
                <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link href="/cv" className="group flex items-center text-sm font-semibold uppercase tracking-widest text-olive hover:text-ink transition-colors">
                View CV
                <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.08 }}
              className="bg-white border border-ink/10 rounded-lg p-6"
            >
              <area.icon className="w-6 h-6 text-terracotta mb-5" />
              <p className="font-serif text-2xl leading-snug">{area.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
