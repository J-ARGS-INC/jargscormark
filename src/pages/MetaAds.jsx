import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RxArrowRight } from 'react-icons/rx';
import {
  HiOutlineChartBar,
  HiOutlineCurrencyDollar,
  HiOutlineUserGroup,
  HiOutlineLightningBolt,
  HiOutlineAdjustments,
  HiOutlineEye,
} from 'react-icons/hi';
import { FaMeta, FaInstagram, FaFacebook } from 'react-icons/fa6';

const MetaAds = () => {
  const services = [
    {
      icon: HiOutlineChartBar,
      title: 'AI-Powered Campaign Optimization',
      description: 'Our machine learning algorithms continuously optimize your ad spend, targeting, and creative performance.',
    },
    {
      icon: HiOutlineUserGroup,
      title: 'Predictive Audience Targeting',
      description: 'Use AI to identify and target high-value audiences before your competitors do.',
    },
    {
      icon: HiOutlineLightningBolt,
      title: 'Smart Bid Automation',
      description: 'Automated bidding strategies that maximize ROAS while minimizing wasted spend.',
    },
    {
      icon: HiOutlineAdjustments,
      title: 'Creative Intelligence',
      description: 'AI-driven insights on which creative elements drive the best performance.',
    },
    {
      icon: HiOutlineEye,
      title: 'Real-Time Analytics',
      description: 'Live dashboards and alerts powered by AI to catch opportunities and issues instantly.',
    },
    {
      icon: HiOutlineCurrencyDollar,
      title: 'ROAS Optimization',
      description: 'Maximize your return on ad spend with predictive analytics and smart budget allocation.',
    },
  ];

  const results = [
    { metric: '3.5x', label: 'Average ROAS Improvement' },
    { metric: '40%', label: 'Lower Cost Per Acquisition' },
    { metric: '2x', label: 'Higher Click-Through Rates' },
    { metric: '60%', label: 'Faster Campaign Optimization' },
  ];

  const process = [
    {
      step: '01',
      title: 'Audit & Analysis',
      description: 'We analyze your current campaigns, audience data, and performance metrics to identify opportunities.',
    },
    {
      step: '02',
      title: 'AI Strategy Development',
      description: 'Build custom AI models tailored to your business goals and target audience.',
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Deploy AI-powered optimization across your Meta ad campaigns with seamless integration.',
    },
    {
      step: '04',
      title: 'Continuous Optimization',
      description: 'Ongoing AI monitoring and optimization to maximize performance and scale results.',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 hero-gradient">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="badge-primary">AI-Powered Advertising</span>
              <div className="flex items-center gap-2 text-text-muted">
                <FaMeta size={20} />
                <FaFacebook size={20} />
                <FaInstagram size={20} />
              </div>
            </motion.div>
            
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Supercharge Your Meta Ads with{' '}
              <span className="gradient-text">AI Intelligence</span>
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Transform your Facebook and Instagram advertising with machine learning 
              that optimizes campaigns, predicts audience behavior, and maximizes ROAS.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <NavLink to="/contact" className="btn-primary text-lg px-8 py-4">
                Get a Free Audit
                <RxArrowRight className="text-xl" />
              </NavLink>
              <NavLink to="/case-studies" className="btn-secondary text-lg px-8 py-4">
                See Results
              </NavLink>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Results Our Clients Achieve
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={result.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {result.metric}
                </div>
                <div className="text-blue-200 text-sm md:text-base">
                  {result.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-dark-800">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              className="badge-primary mb-4 inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our AI Capabilities
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-text-primary mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              AI-Powered Meta Advertising
            </motion.h2>
            <motion.p
              className="text-lg text-text-secondary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Leverage machine learning to outperform competitors and maximize your advertising ROI.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="feature-card group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 mb-5 group-hover:bg-primary-500/20 transition-all duration-300">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-text-secondary">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-text-primary mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Process
            </motion.h2>
            <motion.p
              className="text-lg text-text-secondary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              A proven approach to implementing AI-powered advertising optimization.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="feature-card h-full">
                  <span className="text-4xl font-bold text-primary-500/20 mb-4 block">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark-800">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Ready to Transform Your Meta Ads?
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Get a free audit of your current campaigns and discover how AI can 
              boost your advertising performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NavLink to="/contact" className="btn-primary text-lg px-8 py-4">
                Get Your Free Audit
                <RxArrowRight className="text-xl" />
              </NavLink>
              <a 
                href="mailto:info@jargscormark.com" 
                className="btn-outline text-lg px-8 py-4"
              >
                Email Us Directly
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MetaAds;
