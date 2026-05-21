'use client';

import { motion } from 'motion/react';
import { ArrowUpRight, HeartHandshake, Mic2, Youtube } from 'lucide-react';
import SectionImage from '@/components/SectionImage';

const videos = [
  {
    title: 'Faith, hope, and everyday encouragement',
    href: 'https://youtu.be/OgCqq7sE5_g?si=oTdzByNpOgLlSDpe',
  },
  {
    title: 'Purpose, growth, and reflection',
    href: 'https://youtu.be/UVUTQMrtdYI?si=yc3kaVRStuF9pWiF',
  },
  {
    title: 'Healing, identity, and honest conversation',
    href: 'https://youtu.be/T6-9zDZuqZg?si=-Qj3qfgosTjbsTEo',
  },
];

export default function PodAdvocacyPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 bg-paper">
      <div className="max-w-7xl mx-auto">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative min-h-[520px] rounded-lg overflow-hidden bg-ink mb-16"
        >
          <SectionImage
            section="writings"
            alt="Salome Ayitey writing reflections"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/65 to-ink/20" />
          <div className="relative z-10 min-h-[520px] flex items-center px-6 md:px-12 py-16">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/70 mb-4 block">
                Pod & Advocacy
              </span>
              <h1 className="font-serif text-5xl md:text-7xl leading-none text-white mb-6">
                Faith, mental health, and everyday life.
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Through YouTube conversations and written reflections, I speak about faith, purpose, personal growth, resilience, healing, and the honest parts of being human.
              </p>
              <a
                href="https://www.youtube.com/@god-inspiredwithsalome6971"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-lg bg-white px-5 py-3 text-sm font-semibold uppercase tracking-widest text-ink hover:bg-terracotta hover:text-white transition-colors"
              >
                <Youtube className="w-5 h-5" />
                Visit YouTube
              </a>
            </div>
          </div>
        </motion.section>

        <div className="grid lg:grid-cols-12 gap-8">
          <section className="lg:col-span-5 bg-white border border-ink/10 rounded-lg p-8">
            <HeartHandshake className="w-7 h-7 text-terracotta mb-5" />
            <h2 className="font-serif text-3xl mb-5">Mental Health Advocacy</h2>
            <p className="text-ink/70 leading-relaxed">
              I write and speak about mental health from a place of honesty, hope, and faith. My advocacy is rooted in the belief that people should not feel alone in their struggles, and that healing conversations can be gentle, truthful, and practical.
            </p>
          </section>

          <section className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <Mic2 className="w-7 h-7 text-olive" />
              <h2 className="font-serif text-3xl">Sample Videos</h2>
            </div>
            <div className="grid gap-4">
              {videos.map(video => (
                <a
                  key={video.href}
                  href={video.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-5 rounded-lg border border-ink/10 bg-white p-5 hover:border-terracotta/50 transition-colors"
                >
                  <span className="font-serif text-2xl leading-snug">{video.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-terracotta shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-16 grid md:grid-cols-3 gap-5">
          {[
            'Faith as a lens for purpose, resilience, healing, and community.',
            'Personal growth reflections that make room for uncertainty and small victories.',
            'Clear, compassionate conversations that remind people they are not alone.',
          ].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.08 }}
              className="rounded-lg bg-white border border-ink/10 p-6"
            >
              <p className="text-ink/70 leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </section>
      </div>
    </main>
  );
}
