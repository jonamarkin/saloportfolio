'use client';

import { motion } from 'motion/react';
import { BookOpen, Briefcase, CircleCheck, Download, GraduationCap, Languages, LineChart, Mail, MapPin, Phone, Settings2 } from 'lucide-react';

const competenceGroups = [
  {
    title: 'Research & Analysis',
    items: [
      'Primary and secondary research',
      'Quantitative and qualitative data analysis',
      'Market, policy, industry and development research',
      'Trend, risk and opportunity analysis',
      'Research methodology and survey design',
      'Evidence-based recommendations',
    ],
  },
  {
    title: 'Data, Reporting & Tools',
    items: [
      'Advanced Stata',
      'Advanced Microsoft Excel',
      'PowerPoint presentations and reporting',
      'Data cleaning, quality checks and reproducible workflows',
      'KPI tracking and structured reporting',
      'Large dataset management and documentation',
    ],
  },
  {
    title: 'Communication & Stakeholder Management',
    items: [
      'Clear written and verbal communication',
      'Presentation of complex findings to non-technical audiences',
      'Stakeholder coordination and expectation alignment',
      'Cross-functional collaboration',
      'Strategic planning support',
      'Strong organisation and attention to detail',
    ],
  },
];

const experience = [
  {
    role: 'PhD Researcher / Doctoral Candidate in Economics',
    organisation: 'Luleå University of Technology, Sweden',
    date: 'August 2020 - June 2026 expected',
    bullets: [
      'Conducted applied economic research using large household-level datasets, with a focus on energy economics, sustainability, development economics and policy evaluation.',
      'Collected, cleaned, organised and analysed complex quantitative data to identify patterns, relationships, risks and policy-relevant insights.',
      'Used advanced statistical methods and Stata to process and interpret panel data, supporting evidence-based conclusions and recommendations.',
      'Designed research approaches, defined analytical objectives and developed methodologies suitable for complex social and economic questions.',
      'Combined quantitative analysis with qualitative research planning, including survey and focus group design, to better understand household decision-making and real-world constraints.',
      'Prepared structured reports, academic papers, presentations and decision notes communicating key findings, implications and next steps to both technical and non-technical audiences.',
      'Maintained well-documented datasets, assumptions, variables and analytical decisions to ensure transparency, reliability and future reference.',
      'Built KPI-style trackers, reporting routines and data quality checks to improve consistency, reduce rework and strengthen the reliability of outputs.',
      'Collaborated with supervisors, researchers and multidisciplinary stakeholders while managing multiple research tasks, deadlines and deliverables independently.',
      'Contributed to teaching, supervision and academic communication, strengthening the ability to explain complex concepts clearly and practically.',
    ],
  },
  {
    role: 'Corporate Client Manager',
    organisation: 'Standard Chartered Bank, Head Office, Accra, Ghana - Corporate & Institutional Banking',
    date: 'October 2015 - July 2017',
    bullets: [
      'Supported corporate and public-sector clients by coordinating time-sensitive analytical, operational and reporting tasks across internal business units.',
      'Worked cross-functionally with risk, product, operations and relationship teams to gather information, resolve issues and communicate clear updates to decision-makers.',
      'Prepared structured documentation and client-related reports to support internal decision-making, risk review and service delivery.',
      'Developed a strong understanding of business needs, financial services, stakeholder expectations and the importance of accurate, timely information.',
      'Contributed to issue resolution by organising information, clarifying requirements and aligning stakeholders around next steps.',
      'Strengthened professional skills in client communication, attention to detail, risk awareness and working in a fast-paced international banking environment.',
    ],
  },
];

const education = [
  {
    degree: 'PhD in Economics',
    institution: 'Luleå University of Technology, Sweden',
    date: 'August 2020 - June 2026 expected',
    detail: 'Research fields: Energy economics, sustainability, development economics, policy evaluation and rural-urban studies.',
  },
  {
    degree: 'MSc in Agricultural Economics and Management',
    institution: 'Swedish University of Agricultural Sciences, Sweden',
    date: '2017 - 2020',
    detail: 'Thesis: The Impact of Rural Electrification on Agricultural Output: A Case of Sub-Saharan Africa.',
  },
  {
    degree: 'BSc in Economics and Political Science',
    institution: 'University of Ghana',
    date: '2011 - 2015',
    detail: '',
  },
];

const training = [
  'Paris School of Economics - Summer School, June 2024: Development Economics in the Field; Survey Questionnaire Design; Implementation; Evaluation; Ethics.',
  'Global School in Empirical Research Methods, University of St. Gallen, Switzerland, June 2024: Causal Inference.',
  'Barcelona School of Economics - Summer School, June - July 2023: Panel Data Analysis; Quantitative Methods for Public Policy Evaluation; Empirical Methods for Energy Transition.',
  'University of Gothenburg, 2019 - 2020: Psychological Perspectives on Economic Behaviour.',
];

const technicalSkills = [
  'Statistical analysis: Stata, panel data analysis, causal inference, quantitative research methods',
  'Data management: Data cleaning, variable construction, reproducible workflows, documentation, quality checks',
  'Reporting: Microsoft Excel, PowerPoint, structured reports, presentations, KPI trackers',
  'Research methods: Primary and secondary research, survey design, qualitative research planning, policy analysis',
  'Business analysis: Requirements clarification, stakeholder alignment, process documentation, decision-support reporting',
];

export default function CvPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 bg-paper">
      <div className="max-w-7xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-12 gap-10 items-end border-b border-ink/10 pb-12"
        >
          <div className="lg:col-span-8">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-olive mb-4 block">
              Curriculum Vitae
            </span>
            <h1 className="font-serif text-5xl md:text-7xl leading-none mb-6">Salome Ayitey</h1>
            <p className="text-xl text-ink/75 leading-relaxed max-w-3xl">
              Economist and PhD researcher with experience in applied research, corporate banking, communication, strategy, and sustainability-focused work.
            </p>
          </div>
          <div className="lg:col-span-4 bg-white border border-ink/10 rounded-lg p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-ink/50 mb-5">Contact</p>
            <div className="space-y-3 text-sm text-ink/75">
              <p className="flex gap-3"><MapPin className="w-4 h-4 text-terracotta shrink-0" /> Luleå, Sweden</p>
              <a className="flex gap-3 hover:text-terracotta transition-colors" href="mailto:ayitey.salome@gmail.com">
                <Mail className="w-4 h-4 text-terracotta shrink-0" /> ayitey.salome@gmail.com
              </a>
              <a className="flex gap-3 hover:text-terracotta transition-colors" href="mailto:Salome.ayitey@ltu.se">
                <Mail className="w-4 h-4 text-terracotta shrink-0" /> Salome.ayitey@ltu.se
              </a>
              <a className="flex gap-3 hover:text-terracotta transition-colors" href="tel:+46729050115">
                <Phone className="w-4 h-4 text-terracotta shrink-0" /> +46 72 905 0115
              </a>
            </div>
            <button
              disabled
              className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-lg border border-ink/15 px-4 py-3 text-sm font-semibold uppercase tracking-widest text-ink/40"
              title="PDF CV will be added when it is ready."
            >
              <Download className="w-4 h-4" />
              PDF Coming Soon
            </button>
          </div>
        </motion.header>

        <section className="grid lg:grid-cols-12 gap-10 py-12 border-b border-ink/10">
          <div className="lg:col-span-4">
            <LineChart className="w-7 h-7 text-olive mb-5" />
            <h2 className="font-serif text-3xl mb-4">Opening Profile</h2>
          </div>
          <div className="lg:col-span-8 space-y-5 text-lg leading-relaxed text-ink/75">
            <p>
              My research focuses on energy economics, development, and household welfare, with particular interest in how access to energy and household energy choices affect livelihoods, productivity, and health outcomes.
            </p>
            <p>
              My professional experience spans academic research, financial services, stakeholder engagement, project coordination, and strategic communication. I enjoy working with evidence and turning complex information into clear, practical insights for different audiences.
            </p>
            <p>
              I am especially interested in roles and projects that connect research, strategy, sustainability, communication, and social impact. I bring analytical thinking, people-centred communication, cross-cultural experience, and a strong commitment to purposeful work.
            </p>
          </div>
        </section>

        <section className="py-12 border-b border-ink/10">
          <div className="flex items-center gap-4 mb-8">
            <Settings2 className="w-7 h-7 text-terracotta" />
            <h2 className="font-serif text-3xl">Core Competences</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-5">
            {competenceGroups.map(group => (
              <div key={group.title} className="bg-white border border-ink/10 rounded-lg p-6">
                <h3 className="font-serif text-2xl mb-5">{group.title}</h3>
                <ul className="space-y-3 text-sm text-ink/70">
                  {group.items.map(item => (
                    <li key={item} className="flex gap-3">
                      <CircleCheck className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 border-b border-ink/10">
          <div className="flex items-center gap-4 mb-10">
            <Briefcase className="w-7 h-7 text-olive" />
            <h2 className="font-serif text-3xl">Professional Experience</h2>
          </div>
          <div className="space-y-12">
            {experience.map(job => (
              <article key={job.role} className="grid lg:grid-cols-12 gap-6">
                <div className="lg:col-span-4">
                  <p className="text-sm font-semibold uppercase tracking-widest text-terracotta mb-3">{job.date}</p>
                  <h3 className="font-serif text-2xl leading-tight">{job.role}</h3>
                  <p className="text-ink/60 mt-2">{job.organisation}</p>
                </div>
                <ul className="lg:col-span-8 space-y-3 text-ink/75 leading-relaxed">
                  {job.bullets.map(item => (
                    <li key={item} className="flex gap-3">
                      <span className="text-terracotta mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-12 gap-10 py-12 border-b border-ink/10">
          <div className="lg:col-span-4">
            <GraduationCap className="w-7 h-7 text-terracotta mb-5" />
            <h2 className="font-serif text-3xl">Education</h2>
          </div>
          <div className="lg:col-span-8 space-y-8">
            {education.map(item => (
              <article key={item.degree}>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
                  <h3 className="font-serif text-2xl">{item.degree}</h3>
                  <p className="text-sm uppercase tracking-widest text-ink/45">{item.date}</p>
                </div>
                <p className="text-ink/60">{item.institution}</p>
                {item.detail ? <p className="text-ink/75 mt-2">{item.detail}</p> : null}
              </article>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-12 gap-10 py-12 border-b border-ink/10">
          <div className="lg:col-span-4">
            <BookOpen className="w-7 h-7 text-olive mb-5" />
            <h2 className="font-serif text-3xl">Other Training</h2>
          </div>
          <ul className="lg:col-span-8 space-y-4 text-ink/75 leading-relaxed">
            {training.map(item => (
              <li key={item} className="flex gap-3">
                <CircleCheck className="w-5 h-5 text-olive shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="grid lg:grid-cols-12 gap-10 py-12">
          <div className="lg:col-span-4">
            <Languages className="w-7 h-7 text-terracotta mb-5" />
            <h2 className="font-serif text-3xl">Skills & Languages</h2>
          </div>
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-ink/10 rounded-lg p-6">
              <h3 className="font-serif text-2xl mb-5">Technical Skills</h3>
              <ul className="space-y-3 text-sm text-ink/70">
                {technicalSkills.map(item => (
                  <li key={item} className="flex gap-3">
                    <CircleCheck className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-ink text-white rounded-lg p-6">
              <h3 className="font-serif text-2xl mb-5">Languages & Additional Information</h3>
              <ul className="space-y-3 text-sm text-white/75">
                <li>English: Native</li>
                <li>Swedish: Intermediate</li>
                <li>Twi: Fluent</li>
                <li>International experience across Sweden, Ghana and wider Sub-Saharan African research contexts.</li>
                <li>Strong interest in research, strategic analysis, sustainability, inclusive development and evidence-based decision-making.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
