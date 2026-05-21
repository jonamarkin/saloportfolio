'use client';

import { motion } from 'motion/react';
import { BookOpen, CircleCheck, Compass, Heart, MapPin, Music, Youtube } from 'lucide-react';
import SectionImage from '@/components/SectionImage';

export default function AboutPage() {
  const identity = [
    { label: 'Living in Luleå, Sweden', icon: MapPin },
    { label: 'Economist and PhD researcher', icon: BookOpen },
    { label: 'Christian YouTube creator', icon: Youtube },
    { label: 'Mental health advocate', icon: Heart },
  ];

  const current = [
    'Completing my PhD in Economics, with a focus on energy, development, and household welfare.',
    'Exploring opportunities in research, strategy, sustainability, project coordination, and communication.',
    'Writing about faith, mental health, purpose, and personal growth.',
    'Learning to swim and cycle.',
    'Organising weekly Swedish learning sessions with friends.',
    'Singing, baking, and learning to embrace slow growth.',
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative aspect-[4/5] rounded-lg overflow-hidden bg-paper"
          >
            <SectionImage
              section="about"
              alt="Salome Ayitey in a relaxed home setting"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-olive mb-4 block">
              About
            </span>
            <h1 className="font-serif text-5xl md:text-6xl leading-none mb-8">I am Salome Ayitey.</h1>

            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {identity.map(item => (
                <div key={item.label} className="flex items-center gap-3 rounded-lg border border-ink/10 bg-paper px-4 py-3 text-sm text-ink/70">
                  <item.icon className="w-4 h-4 text-terracotta shrink-0" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <div className="space-y-5 text-lg leading-relaxed text-ink/75">
              <p>
                I am an economist, researcher, writer, communicator, and lifelong learner currently living in Luleå, Sweden, where I am completing my PhD in Economics at Luleå University of Technology. My work focuses on economics, development, energy, and how evidence can be translated into practical insights for people, communities, organisations, and policy.
              </p>
              <p>
                But my story is not only academic. I care deeply about people, purpose, faith, mental health, and making complex ideas easier to understand. Whether I am working with data, writing reflections, facilitating conversations, or teaching a small group of friends Swedish, I enjoy creating spaces where people feel informed, encouraged, and seen.
              </p>
              <p>
                Outside work, I love singing, baking, and trying new recipes. I am also currently learning to swim and cycle slowly, humbly, and with plenty of small victories along the way. My Christian faith shapes the way I see purpose, resilience, healing, and community.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 mt-20">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-5 bg-paper rounded-lg p-8"
          >
            <Compass className="w-7 h-7 text-olive mb-5" />
            <h2 className="font-serif text-3xl mb-5">What I Care About</h2>
            <p className="text-ink/70 leading-relaxed">
              Faith, evidence, people, purpose, growth, mental well-being, and making knowledge accessible. This portfolio brings together my research, professional experience, writing, advocacy, projects, and personal interests.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-7 bg-ink text-white rounded-lg p-8"
          >
            <Music className="w-7 h-7 text-terracotta mb-5" />
            <h2 className="font-serif text-3xl mb-6">Currently, I am...</h2>
            <ul className="space-y-4">
              {current.map(item => (
                <li key={item} className="flex gap-3 text-white/80 leading-relaxed">
                  <CircleCheck className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
