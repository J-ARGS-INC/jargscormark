import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RxArrowRight, RxCheckCircled } from 'react-icons/rx';

import Section from '../components/layout/Section';
import CTASection from '../components/sections/CTASection';
import HeroSection from '../components/sections/HeroSection';

// What we actually do
const whatWeDo = [
  {
    title: 'Build Custom AI Systems',
    description: 'We design and engineer AI solutions tailored to your specific business processes—not off-the-shelf tools.',
  },
  {
    title: 'Automate Complex Workflows',
    description: 'We identify repetitive, time-consuming tasks and build AI to handle them reliably and at scale.',
  },
  {
    title: 'Extract Value from Data',
    description: 'We help you turn raw data into predictions, recommendations, and actionable insights.',
  },
];

// Problems we solve (practical, specific)
const problemsSolved = [
  {
    problem: 'Manual processes that don\'t scale',
    solution: 'AI automation that handles volume without adding headcount',
  },
  {
    problem: 'Data sitting unused in spreadsheets and databases',
    solution: 'Predictive models that turn data into decisions',
  },
  {
    problem: 'Customer inquiries overwhelming support teams',
    solution: 'Intelligent agents that handle routine questions 24/7',
  },
  {
    problem: 'Slow document processing and review',
    solution: 'AI that extracts, validates, and routes documents automatically',
  },
];

// Who we help
const whoWeHelp = [
  'Operations leaders looking to reduce manual work',
  'Finance teams processing high volumes of documents',
  'Customer service managers seeking to scale support',
  'IT leaders evaluating AI readiness',
  'Executives exploring AI strategy',
];

// Trust signals (factual, not hype)
const trustSignals = [
  { value: '50+', label: 'Projects delivered' },
  { value: '8', label: 'Industries served' },
  { value: '95%', label: 'Client retention' },
  { value: '10+', label: 'Years experience' },
];

const Home = () => {
  return (
    <>
      {/* Hero - Futuristic AI Visual */}
      <HeroSection />

      {/* What We Do - Practical, not abstract */}
      <Section>
        <div className="max-w-3xl mb-8 sm:mb-10 md:mb-12 text-center sm:text-left">
          <h2 className="text-headline mb-3 sm:mb-4">What We Do</h2>
          <p className="text-body-lg">
            We're an engineering-focused consultancy. We don't just advise—we build.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {whatWeDo.map((item, index) => (
            <motion.div
              key={item.title}
              className="card-premium"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-2.5 h-2.5 bg-indigo-600 rounded-full mb-4 sm:mb-5" />
              <h3 className="text-title mb-2 sm:mb-3">{item.title}</h3>
              <p className="text-body">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Problems We Solve - Concrete examples */}
      <Section background="gray">
        <div className="max-w-3xl mb-8 sm:mb-10 md:mb-12 text-center sm:text-left">
          <h2 className="text-headline mb-3 sm:mb-4">Problems We Solve</h2>
          <p className="text-body-lg">
            AI works best when applied to specific, well-defined problems. 
            Here are common challenges we help clients address.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {problemsSolved.map((item, index) => (
            <motion.div
              key={index}
              className="card-premium"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-0.5">
                  <RxCheckCircled className="text-xl text-indigo-600" />
                </div>
                <div>
                  <p className="text-muted mb-1.5">The problem</p>
                  <p className="font-medium text-gray-900 dark:text-white mb-3 text-[15px] leading-snug">
                    {item.problem}
                  </p>
                  <p className="text-muted mb-1.5">What we build</p>
                  <p className="text-body leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Who We Help */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-headline mb-4">Who We Help</h2>
            <p className="text-body-lg mb-8">
              We work with mid-sized companies and enterprises across Africa and globally.
              Our clients typically have a specific operational challenge they want to 
              solve with AI, not just a vague interest in the technology.
            </p>
            <ul className="space-y-4">
              {whoWeHelp.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <RxCheckCircled className="text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <motion.div
            className="card-premium p-6 sm:p-8"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <h3 className="text-title mb-4 sm:mb-6">Is AI right for your problem?</h3>
            <p className="text-body mb-5 sm:mb-6 leading-relaxed">
              Not every problem needs AI. We'll tell you honestly if a simpler 
              solution would work better. Our initial consultation is free and 
              focused on understanding your actual needs.
            </p>
            <motion.div whileTap={{ scale: 0.98 }}>
              <Link to="/book-consultation" className="btn-primary group inline-flex">
                Book a Free Consultation
                <RxArrowRight className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* How AI Is Applied - Practical examples */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-3xl mb-12">
          <h2 className="text-headline mb-4">How We Apply AI</h2>
          <p className="text-body-lg">
            We use AI techniques that are proven and practical—not experimental. 
            Here's how AI typically shows up in our clients' operations.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {[
            {
              title: 'Document Processing',
              example: 'Extracting data from invoices, contracts, and forms automatically',
            },
            {
              title: 'Predictive Analytics',
              example: 'Forecasting demand, churn, or maintenance needs before they happen',
            },
            {
              title: 'Conversational AI',
              example: 'Chatbots that handle customer questions and route complex issues',
            },
            {
              title: 'Process Automation',
              example: 'End-to-end workflows that execute without human intervention',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="card-premium"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-[15px]">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.example}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Link 
            to="/ai-agents" 
            className="text-primary-700 dark:text-primary-400 font-medium hover:underline inline-flex items-center gap-1"
          >
            Learn more about AI Agents
            <RxArrowRight />
          </Link>
        </div>
      </Section>

      {/* Why Trust Us - Factual, not boastful */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-headline mb-4">Why Work With Us</h2>
            <p className="text-body-lg mb-6">
              We've been building AI systems for over a decade. Our team combines 
              deep technical expertise with practical business experience.
            </p>
            <ul className="space-y-4">
              {[
                'We focus on production systems, not proofs of concept that never ship',
                'We understand the constraints of operating in African markets',
                'We are engineers first—we build what we recommend',
                'We provide honest assessments, even when AI is not the answer',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <RxCheckCircled className="text-primary-600 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {trustSignals.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="card-premium text-center"
                initial={{ opacity: 0, y: 25, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="stat-value mb-1.5">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        title="Ready to discuss your project?"
        subtitle="Tell us about your challenge. We'll let you know if AI can help—and how."
        primaryCta={{ text: 'Book Consultation', to: '/book-consultation' }}
        secondaryCta={{ text: 'View Case Studies', to: '/case-studies' }}
      />
    </>
  );
};

export default Home;
