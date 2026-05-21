'use client';

import { motion } from 'motion/react';
import { BookOpen, HeartHandshake, Languages, Mic2, Users } from 'lucide-react';
import SectionImage from '@/components/SectionImage';

const projects = [
  {
    title: 'Swedish Learning Group',
    icon: Languages,
    text: 'I organise a weekly Swedish learning session with friends. The group gives us a chance to practise together, build confidence, and support one another as learners. Teaching also helps me revise and stay consistent in my own language journey.',
  },
  {
    title: 'Mental Health Advocacy',
    icon: HeartHandshake,
    text: 'I write and speak about mental health, faith, resilience, and healing. My advocacy is rooted in honesty and openness about personal struggles, hope, and the belief that people should not feel alone in their struggles.',
  },
  {
    title: 'Christian YouTube Pod',
    icon: Mic2,
    text: 'Through my podcasts, I reflect on faith, purpose, growth, and everyday life. I enjoy exploring how faith speaks into real human experiences, including uncertainty, identity, healing, and hope.',
  },
  {
    title: 'Research Communication',
    icon: BookOpen,
    text: 'I care about making research accessible. Whether through writing, presentations, or conversations, I enjoy translating complex ideas into language that is clear, practical, and useful.',
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-12 gap-12 items-center mb-16"
        >
          <div className="lg:col-span-7">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-olive mb-4 block">
              Personal Projects & Community Work
            </span>
            <h1 className="font-serif text-5xl md:text-7xl leading-none mb-6">
              Learning, advocacy, faith, and community.
            </h1>
            <p className="text-xl text-ink/70 leading-relaxed max-w-3xl">
              These projects reflect the parts of my life that sit beside my research: creating useful learning spaces, speaking honestly about mental health, and making knowledge and faith conversations more accessible.
            </p>
          </div>
          <div className="lg:col-span-5 relative aspect-[4/5] rounded-lg overflow-hidden bg-paper">
            <SectionImage
              section="education"
              alt="Salome Ayitey studying and writing"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </motion.header>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.08 }}
              className="rounded-lg border border-ink/10 bg-paper p-7"
            >
              <project.icon className="w-7 h-7 text-terracotta mb-6" />
              <h2 className="font-serif text-3xl mb-4">{project.title}</h2>
              <p className="text-ink/70 leading-relaxed">{project.text}</p>
            </motion.article>
          ))}
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mt-16 bg-ink text-white rounded-lg p-8 md:p-10"
        >
          <Users className="w-7 h-7 text-terracotta mb-5" />
          <h2 className="font-serif text-3xl mb-4">The thread that connects them</h2>
          <p className="text-white/75 leading-relaxed max-w-4xl">
            Whether I am coordinating a learning group, recording a faith reflection, writing about mental health, or presenting research, I am drawn to work that helps people feel informed, encouraged, and less alone.
          </p>
        </motion.section>
      </div>
    </main>
  );
}
