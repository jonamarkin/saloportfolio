'use client';

import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';
import SectionImage from '@/components/SectionImage';

export default function EducationPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5 hidden md:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="sticky top-32 aspect-[3/4] rounded-3xl overflow-hidden bg-paper"
            >
              <SectionImage 
                section="education"
                alt="Salome studying"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
          <div className="md:col-span-7">
            <div className="flex items-center mb-12">
              <GraduationCap className="w-8 h-8 mr-4 text-terracotta" />
              <h1 className="font-serif text-5xl">Education & Training</h1>
            </div>

            <div className="space-y-12">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                  <h3 className="font-serif text-2xl">PhD in Economics</h3>
                  <span className="text-sm font-semibold text-terracotta tracking-widest uppercase mt-1 sm:mt-0">Aug 2020 – Jun 2026</span>
                </div>
                <p className="text-ink/60 mb-2">Luleå University of Technology, Sweden</p>
                <p className="text-ink/80">Research fields: Energy economics, sustainability, development economics, policy evaluation, rural–urban studies.</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                  <h3 className="font-serif text-xl">MSc in Agricultural Economics & Management</h3>
                  <span className="text-sm font-semibold text-ink/50 tracking-widest uppercase mt-1 sm:mt-0">2017 – 2020</span>
                </div>
                <p className="text-ink/60 mb-2">Swedish University of Agricultural Sciences (SLU)</p>
                <p className="text-ink/80">Thesis: The Impact of Rural Electrification on Agricultural Output: A Case of Sub-Saharan Africa.</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                  <h3 className="font-serif text-xl">BSc in Economics & Political Science</h3>
                  <span className="text-sm font-semibold text-ink/50 tracking-widest uppercase mt-1 sm:mt-0">2011 – 2015</span>
                </div>
                <p className="text-ink/60">University of Ghana</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="pt-8 border-t border-ink/10">
                <h4 className="font-serif text-xl mb-6">Additional Training</h4>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-paper p-6 rounded-2xl">
                    <span className="text-xs font-semibold text-ink/50 tracking-widest uppercase block mb-2">Jun 2024</span>
                    <h5 className="font-medium mb-1">Paris School of Economics</h5>
                    <p className="text-sm text-ink/70">Development Economics in The Field; Survey Questionnaire Design; Implementation; Evaluation; Ethics.</p>
                  </div>
                  <div className="bg-paper p-6 rounded-2xl">
                    <span className="text-xs font-semibold text-ink/50 tracking-widest uppercase block mb-2">Jun – Jul 2023</span>
                    <h5 className="font-medium mb-1">Barcelona School of Economics</h5>
                    <p className="text-sm text-ink/70">Panel Data Analysis; Quantitative Methods for Public Policy Evaluation; Empirical Methods for Energy Transition.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
