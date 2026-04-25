import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RxArrowRight, RxCheckCircled } from 'react-icons/rx';
import { 
  HiOutlineChatAlt2, 
  HiOutlineDocumentText, 
  HiOutlineCog,
  HiOutlineLightningBolt,
  HiOutlineUserGroup,
  HiOutlineGlobe
} from 'react-icons/hi';

import Section from '../components/layout/Section';
import SectionHeader from '../components/sections/SectionHeader';
import CTASection from '../components/sections/CTASection';
import PageHero from '../components/sections/PageHero';

const agentTypes = [
  {
    icon: HiOutlineChatAlt2,
    title: 'Conversational Agents',
    description: 'Intelligent chatbots and virtual assistants that handle customer inquiries, provide support, and guide users through complex processes.',
    useCases: [
      'Customer support automation',
      'Sales qualification',
      'Booking and scheduling',
      'FAQ handling',
    ],
  },
  {
    icon: HiOutlineDocumentText,
    title: 'Document Processing Agents',
    description: 'AI systems that extract, analyze, and process information from documents—contracts, invoices, reports, and forms.',
    useCases: [
      'Invoice processing',
      'Contract analysis',
      'Data extraction',
      'Compliance checking',
    ],
  },
  {
    icon: HiOutlineCog,
    title: 'Task Automation Agents',
    description: 'Autonomous agents that execute multi-step workflows, coordinating between systems and making decisions along the way.',
    useCases: [
      'Order processing',
      'Report generation',
      'Data synchronization',
      'Quality assurance',
    ],
  },
  {
    icon: HiOutlineUserGroup,
    title: 'Multi-Agent Systems',
    description: 'Coordinated AI agents that work together to solve complex problems, each specializing in different aspects of a workflow.',
    useCases: [
      'Complex research tasks',
      'End-to-end process automation',
      'Decision support systems',
      'Collaborative problem-solving',
    ],
  },
];

const capabilities = [
  {
    title: 'Natural Language Understanding',
    description: 'Agents that truly understand context, intent, and nuance in human communication.',
  },
  {
    title: 'Autonomous Decision Making',
    description: 'AI that can evaluate options and make intelligent decisions within defined parameters.',
  },
  {
    title: 'Tool & API Integration',
    description: 'Agents that connect to your existing systems, databases, and third-party services.',
  },
  {
    title: 'Memory & Context',
    description: 'Long-term memory that enables agents to learn from interactions and maintain context.',
  },
  {
    title: 'Human-in-the-Loop',
    description: 'Escalation paths and approval workflows for human oversight when needed.',
  },
  {
    title: 'Continuous Learning',
    description: 'Agents that improve over time based on feedback and new data.',
  },
];

const AIAgents = () => {
  return (
    <>
      <PageHero
        eyebrow="AI Agents"
        title="Intelligent agents built"
        accent="for your operations"
        description="AI agents are autonomous systems that understand, decide, and act on your behalf. They handle complex workflows, interact with customers, and process information so your team focuses on high-value work."
      />

      {/* What Are AI Agents */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold mb-4 inline-block">Understanding AI Agents</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Beyond Chatbots:{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">True Autonomy</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Unlike simple automation or basic chatbots, AI agents can:
            </p>
            <ul className="space-y-4">
              {[
                'Understand complex, multi-step requests',
                'Make decisions based on context and data',
                'Use tools and APIs to take real actions',
                'Learn and improve from every interaction',
                'Handle exceptions and edge cases intelligently',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <RxCheckCircled className="text-indigo-600 text-xl mt-0.5 flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {[
              { value: '80%', label: 'Task Completion Rate' },
              { value: '24/7', label: 'Availability' },
              { value: '10x', label: 'Faster Processing' },
              { value: '60%', label: 'Cost Reduction' },
            ].map((stat, i) => (
              <div 
                key={i} 
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center hover:border-indigo-100 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-gray-900 tracking-tight mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Agent Types */}
      <Section background="gray">
        <SectionHeader
          badge="Types of AI Agents"
          title={<>Solutions for Every <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">Use Case</span></>}
          subtitle="We build different types of AI agents depending on your specific needs and workflows."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {agentTypes.map((agent, index) => (
            <motion.div
              key={agent.title}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 hover:border-indigo-100 transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-6">
                <agent.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{agent.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{agent.description}</p>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Common Use Cases:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {agent.useCases.map((useCase) => (
                    <div key={useCase} className="flex items-center gap-2 text-sm text-gray-600">
                      <RxCheckCircled className="text-indigo-600 flex-shrink-0" />
                      <span>{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Capabilities */}
      <Section>
        <SectionHeader
          badge="Agent Capabilities"
          title={<>Built With <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">Enterprise Requirements</span></>}
          subtitle="Our AI agents are designed for reliability, security, and seamless integration with your existing systems."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:border-indigo-100 transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="w-2 h-2 bg-indigo-600 rounded-full mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">{cap.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{cap.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* How We Build Agents */}
      <Section background="gray">
        <SectionHeader
          badge="Our Approach"
          title={<>How We Build <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">Custom Agents</span></>}
          subtitle="A structured process to design, build, and deploy AI agents that deliver real business value."
        />

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Define', desc: 'Map the workflow, identify decision points, and define success criteria.' },
            { step: '02', title: 'Design', desc: 'Architect the agent system, integrations, and human oversight mechanisms.' },
            { step: '03', title: 'Build', desc: 'Develop, test, and iterate on the agent with real-world scenarios.' },
            { step: '04', title: 'Deploy', desc: 'Launch with monitoring, continuous improvement, and ongoing support.' },
          ].map((item, index) => (
            <motion.div
              key={item.step}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-5xl font-bold text-gray-200 mb-4">{item.step}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        title="Ready to Explore AI Agents?"
        subtitle="Let's discuss how intelligent agents can automate your workflows and free your team for higher-value work."
        primaryCta={{ text: 'Schedule a Conversation', to: '/contact' }}
        secondaryCta={{ text: 'View Case Studies', to: '/case-studies' }}
      />
    </>
  );
};

export default AIAgents;
