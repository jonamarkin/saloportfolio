'use client';

import { ExternalLink, Linkedin, Mail, MapPin, Phone, type LucideIcon } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-ink text-white flex flex-col justify-center px-6 pt-32 pb-20">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-end">
        <section className="lg:col-span-7">
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/50 mb-4 block">
            Contact
          </span>
          <h1 className="font-serif text-5xl md:text-7xl leading-none mb-6">Let&apos;s Connect</h1>
          <p className="text-white/70 max-w-2xl mb-10 text-lg leading-relaxed">
            Open to conversations around research, strategy, sustainability, project coordination, communication, social impact, and community-centred work.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <ContactLink href="mailto:ayitey.salome@gmail.com" icon={Mail} label="Personal Email" value="ayitey.salome@gmail.com" />
            <ContactLink href="mailto:Salome.ayitey@ltu.se" icon={Mail} label="University Email" value="Salome.ayitey@ltu.se" />
            <ContactLink href="tel:+46729050115" icon={Phone} label="Phone" value="+46 72 905 0115" />
            <ContactLink href="https://www.linkedin.com/in/salome-ayitey" icon={Linkedin} label="LinkedIn" value="linkedin.com/in/salome-ayitey" />
          </div>
        </section>

        <aside className="lg:col-span-5 bg-white/5 border border-white/10 rounded-lg p-8">
          <MapPin className="w-7 h-7 text-terracotta mb-5" />
          <p className="font-serif text-3xl mb-2">Salome Ayitey</p>
          <p className="text-white/50 text-sm uppercase tracking-widest mb-8">
            Economist | Project Coordination | Communication
          </p>
          <p className="text-white/70 leading-relaxed mb-8">
            Based in Luleå, Sweden, with international experience across Sweden, Ghana, and wider Sub-Saharan African research contexts.
          </p>
          <a
            href="https://www.youtube.com/@god-inspiredwithsalome6971"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-terracotta hover:text-white transition-colors"
          >
            God-Inspired with Salome
            <ExternalLink className="w-4 h-4" />
          </a>
          <p className="text-white/30 text-sm mt-10">© {new Date().getFullYear()} Salome Ayitey. All rights reserved.</p>
        </aside>
      </div>
    </main>
  );
}

type ContactLinkProps = {
  href: string;
  icon: LucideIcon;
  label: string;
  value: string;
};

function ContactLink({ href, icon: Icon, label, value }: ContactLinkProps) {
  const isExternal = href.startsWith('http');

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="rounded-lg border border-white/10 bg-white/5 p-5 hover:border-terracotta/60 hover:bg-white/10 transition-colors"
    >
      <Icon className="w-5 h-5 text-terracotta mb-4" />
      <span className="block text-xs uppercase tracking-widest text-white/40 mb-2">{label}</span>
      <span className="text-white/80 break-words">{value}</span>
    </a>
  );
}
