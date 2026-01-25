import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RxArrowRight, RxArrowLeft } from 'react-icons/rx';

const CaseStudy = () => {
  const { id } = useParams();

  const caseStudies = {
    'predictive-analytics-retail': {
      title: 'Predictive Demand Forecasting for E-commerce Platform',
      industry: 'E-commerce',
      client: 'Leading Online Retailer',
      duration: '4 months',
      challenge: 'The client was experiencing significant revenue loss due to inventory mismanagement. Stockouts on popular items led to lost sales, while overstocking on slow-moving products tied up capital.',
      solution: 'We developed a machine learning pipeline that analyzes historical sales data, seasonal trends, and external factors to predict demand at the SKU level. The system generates weekly forecasts with confidence intervals.',
      results: [
        { metric: '40%', description: 'Improvement in forecast accuracy' },
        { metric: '60%', description: 'Reduction in stockouts' },
        { metric: '25%', description: 'Decrease in excess inventory' },
        { metric: '$2.3M', description: 'Annual savings' },
      ],
      technologies: ['Python', 'XGBoost', 'LightGBM', 'Apache Airflow', 'AWS SageMaker'],
      testimonial: {
        quote: 'The forecasting system has transformed how we manage inventory. We\'re now proactive instead of reactive.',
        author: 'VP of Operations',
      },
    },
    'nlp-customer-support': {
      title: 'AI-Powered Customer Support Automation',
      industry: 'SaaS',
      client: 'B2B Software Company',
      duration: '3 months',
      challenge: 'The support team was overwhelmed with repetitive inquiries, leading to long response times and customer frustration.',
      solution: 'We implemented a conversational AI system using LLMs that understands customer intent, retrieves relevant documentation, and provides accurate responses.',
      results: [
        { metric: '70%', description: 'Tickets resolved automatically' },
        { metric: '45%', description: 'Reduction in support costs' },
        { metric: '< 30s', description: 'Average response time' },
        { metric: '4.8/5', description: 'Customer satisfaction' },
      ],
      technologies: ['LangChain', 'OpenAI GPT-4', 'Pinecone', 'FastAPI', 'React'],
      testimonial: {
        quote: 'Our customers get instant, accurate answers 24/7. The AI handles the routine so our team can focus on complex issues.',
        author: 'Head of Customer Success',
      },
    },
    'fraud-detection-fintech': {
      title: 'Real-Time Fraud Detection System',
      industry: 'Finance',
      client: 'Digital Payments Platform',
      duration: '6 months',
      challenge: 'The client faced increasing fraud losses and high false positive rates that were blocking legitimate transactions.',
      solution: 'We built a multi-model ensemble system that analyzes transactions in real-time, considering user behavior patterns and network analysis.',
      results: [
        { metric: '95%', description: 'Fraud detection rate' },
        { metric: '60%', description: 'Fewer false positives' },
        { metric: '< 100ms', description: 'Decision latency' },
        { metric: '$5M+', description: 'Fraud prevented annually' },
      ],
      technologies: ['TensorFlow', 'Kafka', 'PostgreSQL', 'Redis', 'GCP Vertex AI'],
      testimonial: {
        quote: 'The fraud detection system pays for itself many times over. It\'s become a competitive advantage.',
        author: 'Chief Risk Officer',
      },
    },
  };

  const study = caseStudies[id];

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-primary mb-4">Case Study Not Found</h1>
          <NavLink to="/case-studies" className="btn-primary">
            View All Case Studies
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 hero-gradient">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="container-custom relative z-10">
          <NavLink 
            to="/case-studies" 
            className="inline-flex items-center gap-2 text-text-secondary hover:text-primary-400 mb-6 transition-colors"
          >
            <RxArrowLeft /> Back to Case Studies
          </NavLink>
          
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="badge-primary mb-4 inline-block">{study.industry}</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              {study.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-text-secondary">
              <span>Client: {study.client}</span>
              <span>•</span>
              <span>Duration: {study.duration}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-dark-800">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Challenge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-2">
                  <span className="w-2 h-8 bg-red-500 rounded-full" />
                  The Challenge
                </h2>
                <p className="text-text-secondary text-lg">{study.challenge}</p>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-2">
                  <span className="w-2 h-8 bg-primary-500 rounded-full" />
                  Our Solution
                </h2>
                <p className="text-text-secondary text-lg">{study.solution}</p>
              </motion.div>

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
                  <span className="w-2 h-8 bg-green-500 rounded-full" />
                  The Results
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {study.results.map((result, index) => (
                    <div key={index} className="glass-card p-6 text-center">
                      <div className="stats-value text-2xl mb-2">{result.metric}</div>
                      <div className="text-sm text-text-secondary">{result.description}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Testimonial */}
              {study.testimonial && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="testimonial-card p-8">
                    <blockquote className="text-xl text-text-primary mb-4 pt-8">
                      {study.testimonial.quote}
                    </blockquote>
                    <cite className="text-text-muted">— {study.testimonial.author}</cite>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="feature-card p-6">
                  <h3 className="text-lg font-semibold text-text-primary mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {study.technologies.map((tech, index) => (
                      <span key={index} className="tech-badge">{tech}</span>
                    ))}
                  </div>

                  <div className="divider-glow mb-8" />

                  <h3 className="text-lg font-semibold text-text-primary mb-4">Have a Similar Challenge?</h3>
                  <p className="text-text-secondary text-sm mb-6">
                    Let's discuss how we can help you achieve similar results.
                  </p>
                  <NavLink to="/contact" className="btn-primary w-full justify-center">
                    Get in Touch
                    <RxArrowRight />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;
