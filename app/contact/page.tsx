'use client';

import { Mail, Linkedin, ExternalLink } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-ink text-white flex flex-col justify-center px-6 pt-32 pb-20">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12">
        <div>
          <h1 className="font-serif text-5xl md:text-7xl mb-6">Let&apos;s Connect</h1>
          <p className="text-white/70 max-w-md mb-8 text-lg">
            Interested in collaboration, research discussions, or just want to say hi? I&apos;m always open to connecting.
          </p>
          <div className="space-y-6">
            <a href="mailto:ayitey.salome@gmail.com" className="flex items-center text-xl hover:text-terracotta transition-colors">
              <Mail className="w-6 h-6 mr-4" /> ayitey.salome@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/salome-ayitey" target="_blank" rel="noopener noreferrer" className="flex items-center text-xl hover:text-olive transition-colors">
              <Linkedin className="w-6 h-6 mr-4" /> linkedin.com/in/salome-ayitey
            </a>
            <a href="https://orcid.org/0000-0001-9424-7757" target="_blank" rel="noopener noreferrer" className="flex items-center text-xl hover:text-white/70 transition-colors">
              <ExternalLink className="w-6 h-6 mr-4" /> ORCID Profile
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-end md:items-end mt-12 md:mt-0">
          <div className="text-left md:text-right">
            <p className="font-serif text-3xl mb-2">Salome Ayitey</p>
            <p className="text-white/50 text-sm uppercase tracking-widest mb-8">PhD Researcher & Economist</p>
            <p className="text-white/30 text-sm">© {new Date().getFullYear()} Salome Ayitey. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
