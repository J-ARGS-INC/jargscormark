import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RxArrowRight } from 'react-icons/rx';
import { 
  HiOutlinePhone, 
  HiOutlineLightningBolt, 
  HiOutlineCube,
  HiOutlineGlobeAlt,
  HiOutlineCode,
  HiOutlineLightBulb,
  HiOutlineCheckCircle,
  HiOutlineSparkles
} from 'react-icons/hi';
import { 
  FaHospital, 
  FaChartLine, 
  FaShoppingCart, 
  FaTruck, 
  FaHome, 
  FaBuilding 
} from 'react-icons/fa';
import VideoHero from '../components/VideoHero';

const Homepage = () => {
  const industries = [
    { icon: FaHome, name: 'Real Estate' },
    { icon: FaHospital, name: 'Healthcare' },
    { icon: FaBuilding, name: 'Professional Services' },
    { icon: FaShoppingCart, name: 'E-commerce' },
    { icon: FaTruck, name: 'Home Services' },
    { icon: FaChartLine, name: 'Finance' },
  ];

  const services = [
    {
      icon: HiOutlinePhone,
      title: 'AI Voice Agents',
      description: 'Deploy voice agents that answer calls, qualify leads, and book appointments 24/7.',
      outcome: '80% faster response time'
    },
    {
      icon: HiOutlineLightningBolt,
      title: 'Workflow Automation',
      description: 'Connect your apps and automate repetitive tasks with n8n and Make.',
      outcome: '60% less manual work'
    },
    {
      icon: HiOutlineCube,
      title: 'MCP Integration',
      description: 'Give AI agents secure access to your databases and business systems.',
      outcome: 'AI that acts on real data'
    },
    {
      icon: HiOutlineGlobeAlt,
      title: 'AI Lead Generation',
      description: 'High-converting websites with AI-powered chat and automated follow-up.',
      outcome: '3x more qualified leads'
    },
    {
      icon: HiOutlineCode,
      title: 'Custom Software',
      description: 'Tailored web applications, dashboards, and internal tools for your business.',
      outcome: 'Built for your needs'
    },
    {
      icon: HiOutlineLightBulb,
      title: 'AI Consulting',
      description: 'Strategic guidance on implementing AI automation in your business.',
      outcome: 'Clear roadmap to results'
    },
  ];

  const stats = [
    { value: '50+', label: 'Automations Deployed' },
    { value: '10K+', label: 'Hours Saved Monthly' },
    { value: '95%', label: 'Client Retention' },
    { value: '24/7', label: 'AI Availability' },
  ];

  const benefits = [
    'We deploy AI, we don\'t build it—faster results, lower costs',
    'Production-ready systems, not experiments',
    'End-to-end delivery from strategy to deployment',
    'Ongoing support and optimization included'
  ];

  const techStack = [
    { name: 'VAPI', category: 'Voice AI' },
    { name: 'n8n', category: 'Automation' },
    { name: 'MCP', category: 'AI Integration' },
    { name: 'Make', category: 'Automation' },
    { name: 'GoHighLevel', category: 'CRM' },
    { name: 'OpenAI', category: 'AI' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Video Background */}
      <VideoHero
        title={
          <>
            We Deploy AI That{' '}
            <span className="gradient-text-animated">Runs Your Business</span>
          </>
        }
        subtitle="AI automation using VAPI, n8n, and MCP—so you can scale without adding headcount."
        ctaText="Book Free Strategy Call"
        ctaLink="/book-consultation"
        secondaryCtaText="View Our Services"
        secondaryCtaLink="/services"
      />

      {/* Tech Stack Banner */}
      <section className="py-8 bg-gray-50 border-y border-gray-200">
        <div className="container-main">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <span className="text-sm font-medium text-gray-500 mr-2">Powered by:</span>
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="tech-badge"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                {tech.name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Industries Banner */}
      <section className="py-12 bg-blue-subtle border-b border-gray-200">
        <div className="container-main">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Trusted Across Industries
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                className="flex flex-col items-center gap-2 group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-100 text-gray-700 group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-all duration-300">
                  <industry.icon size={24} />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-indigo-600 transition-colors">
                  {industry.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-subtle">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 glow-border"
              style={{ 
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(56, 189, 248, 0.05))',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <HiOutlineSparkles className="text-indigo-500" />
              <span className="text-sm font-medium text-indigo-600">
                Our Services
              </span>
            </motion.div>
            <motion.h2
              className="text-headline mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              AI Automation That Delivers{' '}
              <span className="gradient-text">Real Results</span>
            </motion.h2>
            <motion.p
              className="text-body-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              We deploy proven AI systems that automate your operations, qualify leads, 
              and scale your business—without custom model building or R&D experiments.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="card-futuristic group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="icon-futuristic mb-4">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-3">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-indigo-600 font-medium">
                  <HiOutlineCheckCircle size={16} />
                  <span>{service.outcome}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Benefits List */}
          <motion.div
            className="card-futuristic p-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              The Jargs Cormark Difference
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <HiOutlineCheckCircle className="text-indigo-600" size={16} />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-futuristic opacity-30" />
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="container-main relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section bg-indigo-subtle">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 glow-border"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(56, 189, 248, 0.05))',
                }}
              >
                <span className="text-sm font-medium text-indigo-600">How It Works</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                From Discovery to Deployment in Weeks
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We follow a proven process to deploy AI automation fast. Most clients 
                see their first automation live within 2-4 weeks.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  '1. Discovery — Understand your goals and pain points',
                  '2. Design — Architect the right automation solution',
                  '3. Deploy — Build, test, and launch your AI systems',
                  '4. Optimize — Monitor, improve, and scale',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-indigo-600" />
                    {item}
                  </li>
                ))}
              </ul>
              <NavLink to="/services" className="btn-primary">
                View Our Services
                <RxArrowRight />
              </NavLink>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="card-futuristic p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">2-4</div>
                <div className="text-gray-600 text-sm">Weeks to Deploy</div>
              </div>
              <div className="card-futuristic p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-gray-600 text-sm">AI Availability</div>
              </div>
              <div className="card-futuristic p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">60%</div>
                <div className="text-gray-600 text-sm">Less Manual Work</div>
              </div>
              <div className="card-futuristic p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">3x</div>
                <div className="text-gray-600 text-sm">More Leads</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-subtle">
        <div className="container-main">
          <motion.div
            className="card-futuristic p-12 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Automate Your Business?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Book a free strategy call to discover which AI systems can 
              save you 20+ hours per week and generate more qualified leads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NavLink to="/book-consultation" className="btn-glow text-lg px-8 py-4">
                Book Free Strategy Call
                <RxArrowRight className="text-xl" />
              </NavLink>
              <NavLink to="/case-studies" className="btn-outline text-lg px-8 py-4">
                View Case Studies
              </NavLink>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;