import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RxArrowRight, RxCheckCircled } from 'react-icons/rx';
import { 
  HiOutlineSearchCircle,
  HiOutlineLightBulb,
  HiOutlineTemplate,
  HiOutlineCode,
  HiOutlinePlay,
  HiOutlineSupport
} from 'react-icons/hi';

import Section from '../components/layout/Section';
import SectionHeader from '../components/sections/SectionHeader';
import CTASection from '../components/sections/CTASection';
import PageHero from '../components/sections/PageHero';

const phases = [
  {
    icon: HiOutlineSearchCircle,
    phase: '01',
    title: 'Discovery',
    duration: '1-2 weeks',
    description: 'We deep-dive into your business to understand your challenges, goals, data landscape, and technical environment.',
    deliverables: [
      'Stakeholder interviews',
      'Data audit and assessment',
      'Current state analysis',
      'Opportunity identification',
    ],
    yourRole: 'Provide access to key stakeholders, systems documentation, and data samples.',
  },
  {
    icon: HiOutlineLightBulb,
    phase: '02',
    title: 'Strategy',
    duration: '2-3 weeks',
    description: 'We develop a tailored AI roadmap with prioritized use cases, technical architecture, and ROI projections.',
    deliverables: [
      'AI opportunity assessment',
      'Prioritized use case matrix',
      'Technical architecture design',
      'Implementation roadmap',
      'ROI projections',
    ],
    yourRole: 'Review and approve strategic direction, provide feedback on priorities.',
  },
  {
    icon: HiOutlineTemplate,
    phase: '03',
    title: 'Design',
    duration: '2-4 weeks',
    description: 'We create detailed specifications for the AI solution, including data models, interfaces, and integration points.',
    deliverables: [
      'Solution design document',
      'Data model specifications',
      'API and integration design',
      'UI/UX wireframes (if applicable)',
      'Security and compliance plan',
    ],
    yourRole: 'Review designs, provide domain expertise, sign off on specifications.',
  },
  {
    icon: HiOutlineCode,
    phase: '04',
    title: 'Build',
    duration: '4-12 weeks',
    description: 'We engineer the AI solution using agile methodology, with regular demos and feedback cycles.',
    deliverables: [
      'Working AI models',
      'Integration with your systems',
      'Testing and validation results',
      'Documentation',
      'Training materials',
    ],
    yourRole: 'Participate in sprint reviews, provide feedback, prepare for deployment.',
  },
  {
    icon: HiOutlinePlay,
    phase: '05',
    title: 'Deploy',
    duration: '1-2 weeks',
    description: 'We deploy to production with careful monitoring, rollback procedures, and go-live support.',
    deliverables: [
      'Production deployment',
      'Monitoring and alerting setup',
      'User training sessions',
      'Go-live support',
      'Handoff documentation',
    ],
    yourRole: 'Coordinate internal teams, participate in training, support user adoption.',
  },
  {
    icon: HiOutlineSupport,
    phase: '06',
    title: 'Support & Optimize',
    duration: 'Ongoing',
    description: 'We provide ongoing support, monitoring, and continuous improvement to maximize your AI investment.',
    deliverables: [
      'Performance monitoring',
      'Model retraining as needed',
      'Feature enhancements',
      'Quarterly business reviews',
      'Dedicated support channel',
    ],
    yourRole: 'Provide feedback, report issues, share new requirements.',
  },
];

const faqs = [
  {
    q: 'How long does a typical AI project take?',
    a: 'Pilot projects typically take 8-16 weeks. Enterprise implementations may span 3-6 months depending on complexity and integration requirements.',
  },
  {
    q: 'What if we don\'t have clean data?',
    a: 'Data preparation is often part of our engagement. We can help you assess, clean, and organize your data as a foundation for AI success.',
  },
  {
    q: 'How do you handle sensitive data?',
    a: 'We follow strict security protocols and can work within your security requirements. NDAs are standard, and we\'re experienced with regulated industries.',
  },
  {
    q: 'What\'s the typical investment range?',
    a: 'Engagements typically range from $25K for focused pilots to $250K+ for enterprise implementations. We\'ll provide a detailed quote after discovery.',
  },
  {
    q: 'Do you offer fixed-price or time & materials?',
    a: 'Both. Discovery and strategy are typically fixed-price. Build phases can be either, depending on requirements clarity and your preference.',
  },
];

const ConsultingProcess = () => {
  return (
    <>
      <PageHero
        eyebrow="Our Process"
        title="How we work"
        accent="with clients"
        description="A structured consulting methodology that ensures every project delivers measurable value, from initial discovery through ongoing optimisation."
      />

      {/* Process Overview */}
      <Section>
        <div className="grid md:grid-cols-6 gap-4 mb-16">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.phase}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mx-auto mb-3">
                <phase.icon size={24} />
              </div>
              <div className="text-indigo-600 font-bold text-sm mb-1">{phase.phase}</div>
              <div className="font-semibold text-gray-900 text-sm">{phase.title}</div>
              <div className="text-xs text-gray-500 mt-1">{phase.duration}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Detailed Phases */}
      <Section background="gray">
        <SectionHeader
          badge="Detailed Process"
          title={<>What to Expect at <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">Each Phase</span></>}
          subtitle="Transparency is core to how we work. Here's exactly what happens at each stage of our engagement."
        />

        <div className="space-y-6">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.phase}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 hover:border-indigo-100 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="grid lg:grid-cols-4 gap-8">
                <div className="lg:col-span-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl font-bold text-gray-200">{phase.phase}</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                      <span className="text-sm text-indigo-600 font-medium">{phase.duration}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{phase.description}</p>
                </div>

                <div className="lg:col-span-2">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-6 h-0.5 bg-indigo-600 rounded-full" />
                    Deliverables
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {phase.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <RxCheckCircled className="text-indigo-600 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-6 h-0.5 bg-accent-600 rounded-full" />
                    Your Role
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{phase.yourRole}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeader
          badge="Common Questions"
          title={<>Frequently Asked <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">Questions</span></>}
          subtitle="Answers to the questions we hear most often from prospective clients."
        />

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:border-indigo-100 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        title="Ready to Get Started?"
        subtitle="The first step is a no-obligation conversation to understand your needs and explore how we can help."
        primaryCta={{ text: 'Schedule a Conversation', to: '/book-consultation' }}
        secondaryCta={{ text: 'View Case Studies', to: '/case-studies' }}
      />
    </>
  );
};

export default ConsultingProcess;
