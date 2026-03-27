'use client';

import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';
import SectionImage from '@/components/SectionImage';

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-7">
            <div className="flex items-center mb-12">
              <Briefcase className="w-8 h-8 mr-4 text-olive" />
              <h1 className="font-serif text-5xl">Experience</h1>
            </div>
            
            <div className="relative border-l border-ink/20 space-y-16 pl-8 ml-2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative"
              >
                <div className="absolute w-4 h-4 bg-olive rounded-full -left-[40.5px] top-1" />
                <span className="text-sm font-semibold text-olive tracking-widest uppercase">Aug 2020 - Nov 2025</span>
                <h3 className="font-serif text-2xl mt-2">PhD Researcher (Economics)</h3>
                <p className="text-ink/60 mb-4">Luleå University of Technology, Sweden</p>
                <ul className="space-y-3 text-ink/80">
                  <li className="flex items-start"><span className="mr-2">•</span> Design and execute quantitative research</li>
                  <li className="flex items-start"><span className="mr-2">•</span> Translate complex results into actionable insights for development partners; present at international conferences.</li>
                  <li className="flex items-start"><span className="mr-2">•</span> Built clean, documented datasets and KPI trackers to support decision-making and performance follow-up.</li>
                  <li className="flex items-start"><span className="mr-2">•</span> Produced concise management updates for non-technical stakeholders.</li>
                  <li className="flex items-start"><span className="mr-2">•</span> Coordinated across stakeholders with different priorities; managed timelines and dependencies.</li>
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="absolute w-4 h-4 bg-ink/20 rounded-full -left-[40.5px] top-1" />
                <span className="text-sm font-semibold text-ink/50 tracking-widest uppercase">Oct 2015 – Jul 2017</span>
                <h3 className="font-serif text-2xl mt-2">Corporate Client Manager</h3>
                <p className="text-ink/60 mb-4">Standard Chartered Bank (Head Office), Accra, Ghana</p>
                <ul className="space-y-3 text-ink/80">
                  <li className="flex items-start"><span className="mr-2">•</span> Managed and grew a portfolio of corporate and public-sector clients, leading onboarding, KYC, and relationship development.</li>
                  <li className="flex items-start"><span className="mr-2">•</span> Built trusted client relationships and front-office communications to resolve issues and enable timely deal execution.</li>
                  <li className="flex items-start"><span className="mr-2">•</span> Supported commercial performance through client portfolio management, structured reporting, and cross-functional coordination.</li>
                </ul>
              </motion.div>
            </div>
          </div>
          <div className="md:col-span-5 hidden md:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="sticky top-32 aspect-[3/4] rounded-3xl overflow-hidden bg-white"
            >
              <SectionImage 
                section="experience"
                alt="Salome in corporate setting"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
