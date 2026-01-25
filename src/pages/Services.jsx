import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RxArrowRight, RxCheckCircled } from 'react-icons/rx';
import { 
  HiOutlinePhone,
  HiOutlineLightningBolt,
  HiOutlineCube,
  HiOutlineGlobeAlt,
  HiOutlineCode,
  HiOutlineLightBulb,
  HiOutlineSparkles
} from 'react-icons/hi';

import Section from '../components/layout/Section';
import CTASection from '../components/sections/CTASection';

// Services that reflect actual business offerings
const services = [
  {
    id: 'voice-agents',
    icon: HiOutlinePhone,
    title: 'AI Voice Agents',
    tagline: 'Your 24/7 Sales Team',
    description: 'Deploy intelligent voice agents powered by VAPI that handle inbound and outbound calls—qualifying leads, booking appointments, and following up automatically.',
    deliverables: [
      'Custom voice agent trained on your business',
      'Appointment booking integration',
      'Lead qualification workflows',
      'Call recording & analytics dashboard',
      'CRM integration (HubSpot, GoHighLevel)',
    ],
    tools: ['VAPI', 'Make', 'GoHighLevel'],
    idealFor: ['Real estate', 'Healthcare', 'Home services', 'Sales teams'],
    outcome: '80% faster response time',
  },
  {
    id: 'workflow-automation',
    icon: HiOutlineLightningBolt,
    title: 'Workflow Automation',
    tagline: 'Eliminate Manual Work',
    description: 'Build powerful automation workflows using n8n that connect your apps, sync data, and run your operations on autopilot—saving hours every week.',
    deliverables: [
      'Custom automation workflows',
      'Multi-app integrations',
      'Automated reporting & notifications',
      'Error handling & monitoring',
      'Documentation & training',
    ],
    tools: ['n8n', 'Make', 'Zapier'],
    idealFor: ['Operations teams', 'Marketing agencies', 'E-commerce', 'Service providers'],
    outcome: '60% less manual work',
  },
  {
    id: 'mcp-integration',
    icon: HiOutlineCube,
    title: 'MCP Integration',
    tagline: 'Connect AI to Your Systems',
    description: 'Implement Model Context Protocol to give AI agents secure access to your databases, APIs, and internal tools—enabling truly intelligent automation.',
    deliverables: [
      'MCP server setup & configuration',
      'Database & API connections',
      'Custom tool development',
      'Security & access controls',
      'Agent orchestration workflows',
    ],
    tools: ['MCP', 'Claude', 'OpenAI'],
    idealFor: ['Tech companies', 'Data-driven businesses', 'Enterprise', 'SaaS'],
    outcome: 'AI that acts on real data',
  },
  {
    id: 'ai-lead-generation',
    icon: HiOutlineGlobeAlt,
    title: 'AI Lead Generation',
    tagline: 'Capture & Convert Automatically',
    description: 'Build high-converting websites and funnels with AI-powered follow-up systems that capture leads, nurture them automatically, and book qualified appointments.',
    deliverables: [
      'High-converting landing pages',
      'AI-powered lead capture forms',
      'Automated nurture sequences',
      'AI chatbot for instant engagement',
      'Analytics & conversion tracking',
    ],
    tools: ['Next.js', 'GoHighLevel', 'Claude'],
    idealFor: ['Service businesses', 'Coaches', 'Local businesses', 'B2B companies'],
    outcome: '3x more qualified leads',
  },
  {
    id: 'software-development',
    icon: HiOutlineCode,
    title: 'Custom Software Solutions',
    tagline: 'Built for Your Business',
    description: 'Develop custom web applications, dashboards, and internal tools designed around your exact requirements—no compromises, no workarounds.',
    deliverables: [
      'Custom web applications',
      'Admin dashboards & portals',
      'API development & integrations',
      'Database design & optimization',
      'Ongoing maintenance & support',
    ],
    tools: ['React', 'Node.js', 'PostgreSQL'],
    idealFor: ['Growing businesses', 'Operations teams', 'Unique processes', 'Startups'],
    outcome: 'Software that fits perfectly',
  },
  {
    id: 'consulting',
    icon: HiOutlineLightBulb,
    title: 'AI Consulting & Strategy',
    tagline: 'Your AI Roadmap',
    description: 'Get expert guidance on implementing AI in your business—identify the right opportunities, select the best tools, and create an implementation roadmap that delivers real ROI.',
    deliverables: [
      'AI opportunity assessment',
      'Tool & platform recommendations',
      'Implementation roadmap',
      'Team training & workshops',
      'Ongoing advisory support',
    ],
    tools: ['Strategy', 'Training', 'Implementation'],
    idealFor: ['Business owners', 'Operations leaders', 'Marketing teams', 'Executives'],
    outcome: 'Clear path to AI success',
  },
];

const techStack = [
  { name: 'VAPI', category: 'Voice AI' },
  { name: 'n8n', category: 'Automation' },
  { name: 'MCP', category: 'AI Integration' },
  { name: 'Make', category: 'Automation' },
  { name: 'GoHighLevel', category: 'CRM' },
  { name: 'OpenAI', category: 'AI' },
  { name: 'Claude', category: 'AI' },
  { name: 'React', category: 'Development' },
];

const processSteps = [
  { step: '01', title: 'Discovery', desc: 'Understand your goals, processes, and pain points' },
  { step: '02', title: 'Design', desc: 'Architect the solution and define success metrics' },
  { step: '03', title: 'Deploy', desc: 'Build, test, and launch your automation systems' },
  { step: '04', title: 'Optimize', desc: 'Monitor, improve, and support ongoing operations' },
];

const Services = () => {
  return (
    <>
      {/* Hero Section */}
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
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                AI Automation Services
              </span>
            </motion.div>
            
            {/* Headline */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="text-gray-900">We Deploy AI That </span>
              <span className="gradient-text-animated">Runs Your Business</span>
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              We don't build AI models—we deploy proven AI systems using VAPI, n8n, and MCP 
              to automate your operations and generate leads on autopilot.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/book-consultation" className="btn-glow">
                Book Free Strategy Call
                <RxArrowRight />
              </Link>
              <Link to="/case-studies" className="btn-outline">
                View Case Studies
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Banner */}
      <section className="py-8 border-y border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="container-main">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="tech-badge"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                {tech.name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <Section className="bg-subtle">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            className="text-headline mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-body-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Everything you need to automate your business operations and scale without adding headcount.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="card-futuristic flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className="icon-futuristic mb-5">
                <service.icon size={24} />
              </div>

              {/* Title & Tagline */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {service.title}
              </h3>
              <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-3">
                {service.tagline}
              </p>

              {/* Description */}
              <p className="text-body mb-5 flex-grow">
                {service.description}
              </p>

              {/* Outcome Badge */}
              <div className="flex items-center gap-2 mb-5 px-3 py-2 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800">
                <RxCheckCircled className="text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                  {service.outcome}
                </span>
              </div>

              {/* Tools */}
              <div className="flex flex-wrap gap-2 mb-5">
                {service.tools.map((tool) => (
                  <span 
                    key={tool}
                    className="px-2 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Link 
                to={`/services/${service.id}`}
                className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:gap-3 transition-all mt-auto"
              >
                Learn more <RxArrowRight />
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Detailed Service Breakdown */}
      <Section>
        <div className="space-y-16 sm:space-y-20">
          {services.slice(0, 3).map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              className="scroll-mt-24"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="icon-futuristic pulse-glow mb-6">
                    <service.icon size={28} />
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {service.deliverables.slice(0, 4).map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <RxCheckCircled className="text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/book-consultation" className="btn-primary">
                    Get Started <RxArrowRight />
                  </Link>
                </div>

                {/* Visual */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-100 to-cyan-50 dark:from-indigo-900/30 dark:to-cyan-900/20 p-8 flex items-center justify-center glow-border">
                    <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                      {service.idealFor.map((item, i) => (
                        <motion.div
                          key={i}
                          className="px-4 py-3 bg-white/80 dark:bg-gray-800/80 rounded-xl text-center text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + i * 0.1 }}
                        >
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {index < 2 && (
                <hr className="mt-16 border-gray-200 dark:border-gray-800" />
              )}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* How We Work */}
      <Section className="bg-gray-900 dark:bg-gray-950 text-white overflow-hidden relative">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-dots-futuristic opacity-30" />
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <div className="relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              How We Work
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              A proven process to deploy AI automation in your business—fast.
            </motion.p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                className="relative text-center sm:text-left"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Step Number */}
                <div className="text-5xl sm:text-6xl font-bold gradient-text mb-4">
                  {item.step}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm">{item.desc}</p>

                {/* Connector Line (desktop only) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-indigo-500/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/consulting-process" 
              className="inline-flex items-center gap-2 text-indigo-400 font-medium hover:text-indigo-300 transition-colors"
            >
              Learn more about our process
              <RxArrowRight />
            </Link>
          </div>
        </div>
      </Section>

      {/* What Makes Us Different */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-headline mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Why Choose Us
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "We Deploy, Not Build",
                desc: "We use proven AI tools like VAPI and n8n—no custom ML models means faster results and lower costs."
              },
              {
                title: "Production-Ready Systems",
                desc: "No prototypes or experiments. We deliver fully working automation that's ready for daily use."
              },
              {
                title: "End-to-End Delivery",
                desc: "From strategy to deployment to ongoing support—we handle everything so you can focus on your business."
              },
              {
                title: "Results-Focused",
                desc: "We measure success by hours saved, leads generated, and revenue increased—not vanity metrics."
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="card-futuristic"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        title="Ready to automate your business?"
        subtitle="Book a free strategy call to discover which AI systems can save you 20+ hours per week."
        primaryCta={{ text: 'Book Free Strategy Call', to: '/book-consultation' }}
        secondaryCta={{ text: 'View Case Studies', to: '/case-studies' }}
      />
    </>
  );
};

export default Services;