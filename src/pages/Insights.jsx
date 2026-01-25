import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RxArrowRight } from 'react-icons/rx';
import { HiOutlineBookOpen, HiOutlineDocumentText, HiOutlineAcademicCap } from 'react-icons/hi';

import Section from '../components/layout/Section';
import SectionHeader from '../components/sections/SectionHeader';

const articles = [
  {
    id: 1,
    title: 'AI Readiness Assessment: Is Your Organization Prepared?',
    excerpt: 'A comprehensive guide to evaluating your organization\'s data infrastructure, team capabilities, and strategic alignment before embarking on an AI initiative.',
    category: 'Strategy',
    type: 'Guide',
    readTime: '12 min read',
    date: 'Jan 2025',
    featured: true,
  },
  {
    id: 2,
    title: 'Understanding Machine Learning: A Business Leader\'s Guide',
    excerpt: 'Demystifying ML concepts for decision-makers. Learn how machine learning works, what it can (and cannot) do, and how to evaluate ML opportunities.',
    category: 'Education',
    type: 'Guide',
    readTime: '15 min read',
    date: 'Jan 2025',
  },
  {
    id: 3,
    title: 'The ROI of AI: How to Measure Business Impact',
    excerpt: 'Frameworks and methodologies for quantifying AI investments. Includes real-world examples and KPIs to track for different AI use cases.',
    category: 'Business',
    type: 'Framework',
    readTime: '10 min read',
    date: 'Dec 2024',
  },
  {
    id: 4,
    title: 'Data Quality: The Foundation of Successful AI',
    excerpt: 'Why data quality matters more than algorithms, and practical steps to assess and improve your data foundation before any AI project.',
    category: 'Technical',
    type: 'Deep Dive',
    readTime: '8 min read',
    date: 'Dec 2024',
  },
  {
    id: 5,
    title: 'AI Use Cases in African Banking & Finance',
    excerpt: 'Real-world examples of how African financial institutions are using AI for fraud detection, credit scoring, and customer service automation.',
    category: 'Industry',
    type: 'Case Analysis',
    readTime: '11 min read',
    date: 'Nov 2024',
  },
  {
    id: 6,
    title: 'Building vs Buying AI Solutions: A Decision Framework',
    excerpt: 'When should you build custom AI? When should you buy off-the-shelf? A practical framework for making this critical decision.',
    category: 'Strategy',
    type: 'Framework',
    readTime: '9 min read',
    date: 'Nov 2024',
  },
  {
    id: 7,
    title: 'Predictive Maintenance: From Concept to Implementation',
    excerpt: 'A technical walkthrough of implementing predictive maintenance systems, including sensor selection, model building, and deployment considerations.',
    category: 'Technical',
    type: 'Technical Guide',
    readTime: '14 min read',
    date: 'Oct 2024',
  },
  {
    id: 8,
    title: 'AI Ethics: Building Responsible AI Systems',
    excerpt: 'Guidelines for developing AI systems that are fair, transparent, and accountable. Includes governance frameworks and bias detection strategies.',
    category: 'Ethics',
    type: 'Guide',
    readTime: '10 min read',
    date: 'Oct 2024',
  },
];

const resourceCategories = [
  {
    icon: HiOutlineBookOpen,
    title: 'Guides & Frameworks',
    description: 'Step-by-step guides and decision frameworks for AI strategy and implementation.',
    count: 12,
  },
  {
    icon: HiOutlineDocumentText,
    title: 'Technical Deep Dives',
    description: 'In-depth technical articles on ML, data engineering, and AI architecture.',
    count: 8,
  },
  {
    icon: HiOutlineAcademicCap,
    title: 'Business Education',
    description: 'AI concepts explained for business leaders and decision-makers.',
    count: 6,
  },
];

const categories = ['All', 'Strategy', 'Education', 'Technical', 'Industry', 'Business', 'Ethics'];

const Insights = () => {
  const featuredArticle = articles.find(a => a.featured);
  const regularArticles = articles.filter(a => !a.featured);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50/30 to-white" />
        <div className="absolute inset-0 bg-mesh" />
        
        <motion.div
          className="absolute top-40 right-20 w-72 h-72 bg-primary-100/40 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="container-main relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              className="badge-primary mb-6 inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Knowledge Center
            </motion.span>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              AI Insights &{' '}
              <span className="gradient-text">Resources</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Educational resources, practical frameworks, and expert analysis to help 
              you make informed decisions about AI for your business.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <Section size="small" background="gray">
        <div className="grid md:grid-cols-3 gap-6">
          {resourceCategories.map((cat, index) => (
            <motion.div
              key={cat.title}
              className="card-elevated p-6 hover:border-primary-200 transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="icon-box icon-box-md icon-box-primary mb-4">
                <cat.icon size={22} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{cat.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{cat.description}</p>
              <span className="text-primary-600 font-semibold text-sm">{cat.count} resources</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Featured Article */}
      {featuredArticle && (
        <Section size="small">
          <motion.div
            className="card-elevated overflow-hidden hover:border-primary-200 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto bg-gradient-to-br from-primary-500 to-primary-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-mesh opacity-30" />
                <div className="absolute bottom-6 left-6">
                  <span className="badge bg-white/90 text-primary-700 font-semibold">Featured</span>
                </div>
              </div>
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="badge-primary">{featuredArticle.category}</span>
                  <span className="text-sm text-gray-500">{featuredArticle.type}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {featuredArticle.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{featuredArticle.readTime}</span>
                  <Link
                    to={`/insights/${featuredArticle.id}`}
                    className="btn-primary group"
                  >
                    Read Guide
                    <RxArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </Section>
      )}

      {/* Filter Tags */}
      <Section size="small" background="white">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                cat === 'All' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-primary-50 hover:text-primary-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </Section>

      {/* Articles Grid */}
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularArticles.map((article, index) => (
            <motion.article
              key={article.id}
              className="card-elevated overflow-hidden group hover:border-primary-200 transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-50 relative">
                <span className="absolute top-4 left-4 badge-gray text-xs font-medium">
                  {article.type}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-primary-600">{article.category}</span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-500">{article.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
                <Link
                  to={`/insights/${article.id}`}
                  className="text-primary-600 font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Read Article
                  <RxArrowRight />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* Newsletter CTA - Educational Focus */}
      <Section background="gray">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="badge-primary mb-4 inline-block">Stay Informed</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Get AI Insights Delivered
            </h2>
            <p className="text-gray-600 mb-8">
              Join business leaders receiving our monthly digest of AI trends, 
              practical guides, and industry analysis.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your work email"
                className="input flex-grow"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3">
              No spam. Unsubscribe anytime. We respect your inbox.
            </p>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Insights;
