import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RxArrowRight, RxCheckCircled } from 'react-icons/rx';
import { 
  HiOutlineLightningBolt,
  HiOutlineGlobe,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlinePhone,
  HiOutlineCube,
  HiOutlineCode
} from 'react-icons/hi';

import Section from '../components/layout/Section';
import CTASection from '../components/sections/CTASection';

// Core values - what we stand for
const coreValues = [
  {
    icon: HiOutlineShieldCheck,
    title: 'Production-Ready Systems',
    description: 'We deploy AI systems that work from day one—not experiments or prototypes. Everything we build is designed to run your business 24/7.',
  },
  {
    icon: HiOutlineLightningBolt,
    title: 'Speed to Value',
    description: 'We use proven AI tools like VAPI and n8n to deliver results faster. No custom model training means you see ROI in weeks, not months.',
  },
  {
    icon: HiOutlineGlobe,
    title: 'Global Reach, Local Understanding',
    description: 'We serve clients across Africa, the Middle East, Europe, and beyond—understanding the unique challenges of each market.',
  },
  {
    icon: HiOutlineSparkles,
    title: 'Continuous Optimization',
    description: 'Our job doesn\'t end at deployment. We monitor, optimize, and improve your AI systems to ensure they keep delivering results.',
  },
];

// What we actually do
const expertise = [
  {
    category: 'AI Technologies We Deploy',
    items: [
      'VAPI Voice Agents',
      'n8n Workflow Automation',
      'MCP Integration',
      'GoHighLevel CRM',
      'OpenAI & Claude APIs',
      'Custom Web Applications',
    ],
  },
  {
    category: 'Business Problems We Solve',
    items: [
      'Lead qualification & appointment booking',
      'Manual data entry & repetitive tasks',
      'Disconnected systems & tools',
      'Slow customer response times',
      'Inconsistent follow-up processes',
      'Scaling operations without adding staff',
    ],
  },
  {
    category: 'Industries We Serve',
    items: [
      'Real Estate & Property Management',
      'Healthcare & Medical Practices',
      'Home Services & Contractors',
      'Professional Services & Consulting',
      'E-commerce & Retail',
      'SaaS & Technology Companies',
    ],
  },
];

// Track record
const trackRecord = [
  { value: '50+', label: 'Automations Deployed' },
  { value: '10K+', label: 'Hours Saved Monthly' },
  { value: '95%', label: 'Client Retention' },
  { value: '24/7', label: 'AI Availability' },
];

// Tech stack
const techStack = [
  { name: 'VAPI', icon: HiOutlinePhone },
  { name: 'n8n', icon: HiOutlineLightningBolt },
  { name: 'MCP', icon: HiOutlineCube },
  { name: 'React', icon: HiOutlineCode },
];

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden">
        {/* Futuristic Background */}
        <div className="absolute inset-0 bg-futuristic" />
        <div className="absolute inset-0 bg-dots-futuristic opacity-50" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        
        {/* Floating Orbs */}
        <motion.div 
          className="absolute top-20 right-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="container-main relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 glow-border"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(56, 189, 248, 0.05))',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <HiOutlineSparkles className="text-indigo-500" />
                <span className="text-sm font-medium text-indigo-600">
                  About Jargs Cormark
                </span>
              </motion.div>
              
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <span className="text-gray-900">We Deploy AI That </span>
                <span className="gradient-text-animated">Runs Your Business</span>
              </motion.h1>
              
              <motion.p
                className="text-lg text-gray-600 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Jargs Cormark is an AI automation agency. We design and deploy AI systems 
                using proven tools like VAPI, n8n, and MCP—so you can automate operations 
                and scale without adding headcount.
              </motion.p>
              
              <motion.p
                className="text-body"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <strong>We don't build AI models.</strong> We deploy them. This means faster 
                results, lower costs, and systems that work from day one.
              </motion.p>
            </div>

            {/* Track Record */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              {trackRecord.map((stat) => (
                <div 
                  key={stat.label} 
                  className="card-futuristic p-6 text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Banner */}
      <section className="py-8 border-y border-gray-200 bg-gray-50/50">
        <div className="container-main">
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
            <span className="text-sm font-medium text-gray-500">Powered by:</span>
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="tech-badge flex items-center gap-2"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <tech.icon size={16} />
                {tech.name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <Section className="bg-subtle">
        <div className="max-w-3xl mb-12">
          <motion.h2 
            className="text-headline mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Approach
          </motion.h2>
          <motion.p 
            className="text-body-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            We don't sell technology for technology's sake. We solve business problems 
            using AI systems that deliver measurable results.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              className="card-futuristic"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="icon-futuristic mb-4">
                <value.icon size={22} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-gray-600">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Expertise Grid */}
      <Section>
        <div className="max-w-3xl mb-12">
          <motion.h2 
            className="text-headline mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What We Actually Do
          </motion.h2>
          <motion.p 
            className="text-body-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            We deploy AI automation systems using the best tools available—no custom 
            model building, no R&D experiments, just results.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {expertise.map((section, index) => (
            <motion.div
              key={section.category}
              className="card-futuristic"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-sm font-semibold text-indigo-600 mb-4 uppercase tracking-wide">
                {section.category}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <RxCheckCircled className="text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why Organizations Choose Us */}
      <Section className="bg-gray-900 text-white overflow-hidden relative">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-dots-futuristic opacity-30" />
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <div className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <motion.h2 
                className="text-3xl sm:text-4xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Why Businesses Choose Us
              </motion.h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'We Deploy, Not Build',
                    description: 'Using proven tools like VAPI and n8n means faster implementation and lower costs than custom AI development.',
                  },
                  {
                    title: 'Results in Weeks, Not Months',
                    description: 'Most of our automations are live within 2-4 weeks. You start seeing ROI immediately.',
                  },
                  {
                    title: 'End-to-End Ownership',
                    description: 'From strategy to deployment to ongoing support—we handle everything so you can focus on your business.',
                  },
                  {
                    title: 'Honest About What Works',
                    description: 'If AI isn\'t the right solution for your problem, we\'ll tell you. Our goal is to solve problems, not sell technology.',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3 className="font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="card-futuristic p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to automate your business?</h3>
              <p className="text-gray-600 mb-6">
                Book a free strategy call to discover which AI systems can save you 
                20+ hours per week and generate more qualified leads.
              </p>
              <Link to="/book-consultation" className="btn-glow group">
                Book Free Strategy Call
                <RxArrowRight className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* For Partners */}
      <Section>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2 
            className="text-headline mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Partner With Us
          </motion.h2>
          <motion.p 
            className="text-body-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            We work with agencies, consultants, and technology partners who want 
            to offer AI automation services to their clients.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Marketing Agencies',
              description: 'Add AI lead generation and automation services to your offering. We provide white-label solutions.',
            },
            {
              title: 'Business Consultants',
              description: 'Partner with us to deliver AI automation for your clients. We handle the technical implementation.',
            },
            {
              title: 'Technology Integrators',
              description: 'Expand your capabilities with AI voice agents, workflow automation, and MCP integrations.',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="card-futuristic text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link 
            to="/contact" 
            className="text-indigo-600 font-medium hover:underline inline-flex items-center gap-1"
          >
            Get in touch to explore partnership opportunities
            <RxArrowRight />
          </Link>
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        title="Ready to automate your business?"
        subtitle="Book a free strategy call to discover which AI systems can save you 20+ hours per week."
        primaryCta={{ text: 'Book Free Strategy Call', to: '/book-consultation' }}
        secondaryCta={{ text: 'View Our Services', to: '/services' }}
      />
    </>
  );
};

export default About;