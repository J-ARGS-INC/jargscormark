import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RxArrowRight, RxCheckCircled } from 'react-icons/rx';
import { HiOutlineSparkles } from 'react-icons/hi';

import Section from '../components/layout/Section';
import CTASection from '../components/sections/CTASection';

// Solution categories based on what we actually deliver
const solutionCategories = [
  {
    id: 'lead-generation',
    title: 'AI Lead Generation',
    description: 'Capture more leads and convert them automatically with AI-powered systems.',
    solutions: [
      {
        title: 'AI Voice Agents',
        problem: 'Missing calls, slow response times, leads going cold',
        outcome: 'Voice agents that answer instantly, qualify leads, and book appointments 24/7',
        examples: ['Inbound call handling', 'Lead qualification', 'Appointment booking', 'Follow-up calls'],
        tools: ['VAPI', 'GoHighLevel'],
      },
      {
        title: 'AI Chatbots',
        problem: 'Website visitors leaving without engaging or converting',
        outcome: 'Intelligent chat that captures leads and answers questions instantly',
        examples: ['Website chat', 'Lead capture', 'FAQ handling', 'Quote requests'],
        tools: ['Claude', 'OpenAI', 'Custom'],
      },
      {
        title: 'Automated Follow-Up',
        problem: 'Leads falling through the cracks due to inconsistent follow-up',
        outcome: 'AI-powered sequences that nurture leads until they\'re ready to buy',
        examples: ['Email sequences', 'SMS follow-up', 'Multi-channel nurture'],
        tools: ['n8n', 'GoHighLevel'],
      },
    ],
  },
  {
    id: 'automation',
    title: 'Business Automation',
    description: 'Eliminate manual work and scale operations without adding headcount.',
    solutions: [
      {
        title: 'Workflow Automation',
        problem: 'Staff spending hours on repetitive, manual tasks',
        outcome: 'Automated workflows that run your operations on autopilot',
        examples: ['Data entry', 'Report generation', 'App integrations', 'Notifications'],
        tools: ['n8n', 'Make', 'Zapier'],
      },
      {
        title: 'Document Processing',
        problem: 'Manual data extraction from invoices, forms, and contracts',
        outcome: 'AI that reads documents and extracts data automatically',
        examples: ['Invoice processing', 'Contract review', 'Form handling'],
        tools: ['Claude', 'OpenAI', 'Custom'],
      },
      {
        title: 'System Integration',
        problem: 'Disconnected tools requiring manual data transfer',
        outcome: 'Connected systems that sync data automatically in real-time',
        examples: ['CRM sync', 'Accounting integration', 'Inventory updates'],
        tools: ['n8n', 'MCP', 'APIs'],
      },
    ],
  },
  {
    id: 'intelligence',
    title: 'AI Agent Systems',
    description: 'Deploy AI agents that act on your data and make intelligent decisions.',
    solutions: [
      {
        title: 'MCP Integration',
        problem: 'AI tools disconnected from your actual business data',
        outcome: 'AI agents with secure access to your databases and systems',
        examples: ['Database queries', 'API actions', 'System updates', 'Data retrieval'],
        tools: ['MCP', 'Claude', 'Custom'],
      },
      {
        title: 'Multi-Agent Systems',
        problem: 'Complex tasks requiring multiple steps and decision points',
        outcome: 'Coordinated AI agents that handle complex workflows autonomously',
        examples: ['Research tasks', 'Content creation', 'Analysis pipelines'],
        tools: ['Claude', 'OpenAI', 'n8n'],
      },
      {
        title: 'Custom AI Applications',
        problem: 'Off-the-shelf tools don\'t fit your specific needs',
        outcome: 'Tailored AI applications built for your exact requirements',
        examples: ['Internal tools', 'Customer portals', 'Admin dashboards'],
        tools: ['React', 'Node.js', 'PostgreSQL'],
      },
    ],
  },
];

const Solutions = () => {
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
          className="absolute top-20 left-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="container-main relative z-10">
          <div className="max-w-4xl mx-auto text-center">
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
                AI Automation Solutions
              </span>
            </motion.div>
            
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="text-gray-900">Solutions That </span>
              <span className="gradient-text-animated">Deliver Results</span>
            </motion.h1>
            
            <motion.p
              className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              We organize our solutions around three outcomes: generating more leads, 
              automating your operations, and deploying intelligent AI agents.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Solution Categories */}
      {solutionCategories.map((category, catIndex) => (
        <Section 
          key={category.id} 
          id={category.id}
          className={catIndex % 2 === 1 ? 'bg-subtle' : ''}
        >
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-indigo-600 font-medium text-sm uppercase tracking-wide">
                {`0${catIndex + 1}`}
              </span>
              <h2 className="text-headline mt-2 mb-3">{category.title}</h2>
              <p className="text-body-lg max-w-2xl">{category.description}</p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {category.solutions.map((solution, solIndex) => (
              <motion.div
                key={solution.title}
                className="card-futuristic"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: solIndex * 0.1 }}
              >
                <h3 className="text-title mb-4">{solution.title}</h3>
                
                <div className="mb-4">
                  <p className="text-muted text-xs uppercase tracking-wide mb-1">The Problem</p>
                  <p className="text-sm text-gray-700">{solution.problem}</p>
                </div>
                
                <div className="mb-4">
                  <p className="text-muted text-xs uppercase tracking-wide mb-1">The Outcome</p>
                  <p className="text-sm text-gray-700">{solution.outcome}</p>
                </div>
                
                <div className="mb-4">
                  <p className="text-muted text-xs uppercase tracking-wide mb-2">Examples</p>
                  <div className="flex flex-wrap gap-2">
                    {solution.examples.map((example) => (
                      <span 
                        key={example} 
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-muted text-xs uppercase tracking-wide mb-2">Tools</p>
                  <div className="flex flex-wrap gap-2">
                    {solution.tools.map((tool) => (
                      <span 
                        key={tool} 
                        className="tech-badge text-xs"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>
      ))}

      {/* Engagement Options */}
      <Section className="bg-gray-900 text-white overflow-hidden relative">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-dots-futuristic opacity-30" />
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <div className="relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              How to Get Started
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Choose the engagement model that fits your needs.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Strategy Call',
                description: 'Free 30-minute call to understand your goals and identify the best AI solutions for your business.',
                timeline: 'Free',
                ideal: 'Anyone exploring AI automation',
              },
              {
                title: 'Pilot Project',
                description: 'Start with a focused automation project to prove value before committing to a larger engagement.',
                timeline: '2-4 weeks',
                ideal: 'Companies who need quick wins',
              },
              {
                title: 'Full Implementation',
                description: 'End-to-end deployment of AI systems with ongoing support and optimization.',
                timeline: '1-3 months',
                ideal: 'Companies ready to scale',
              },
            ].map((option, index) => (
              <motion.div
                key={option.title}
                className="card-futuristic"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="text-sm text-gray-500 mb-2">
                  <span className="font-medium">Timeline:</span> {option.timeline}
                </div>
                <div className="text-sm text-gray-500">
                  <span className="font-medium">Ideal for:</span> {option.ideal}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        title="Ready to automate your business?"
        subtitle="Book a free strategy call to discover which solutions fit your needs."
        primaryCta={{ text: 'Book Free Strategy Call', to: '/book-consultation' }}
        secondaryCta={{ text: 'View Services', to: '/services' }}
      />
    </>
  );
};

export default Solutions;
