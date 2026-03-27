'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-paper">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://media.licdn.com/dms/image/v2/D4D03AQHR6OzP9bOJhQ/profile-displayphoto-crop_800_800/B4DZo64rESH4AM-/0/1761924527467?e=1776297600&v=beta&t=O1EVejPPzhdUJJ24RhQpTa90SuBxXXQO_KEjkjC33Gw"
            alt="Salome Ayitey" 
            fill 
            className="object-cover opacity-40"
            referrerPolicy="no-referrer"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-paper/80 via-paper/40 to-paper" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-olive mb-6 block">
              Economist & PhD Researcher
            </span>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-tight text-ink mb-8 leading-[0.9]">
              Salome<br />Ayitey
            </h1>
            <p className="text-xl md:text-2xl text-ink/70 max-w-2xl mx-auto font-light leading-relaxed mb-12">
              Bridging corporate banking experience with advanced quantitative research to drive strategic, data-informed decisions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/about" className="group flex items-center text-sm font-semibold uppercase tracking-widest text-ink hover:text-terracotta transition-colors">
                Discover My Journey
                <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link href="/contact" className="group flex items-center text-sm font-semibold uppercase tracking-widest text-olive hover:text-ink transition-colors">
                Get In Touch
                <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
