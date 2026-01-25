import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RxArrowRight } from 'react-icons/rx';

const VideoHero = ({
  badge,
  title,
  subtitle,
  primaryCta = { text: 'Get in Touch', to: '/contact' },
  secondaryCta,
}) => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center overflow-hidden">
      {/* Sophisticated Background */}
      <div className="absolute inset-0 z-0">
        {/* Base */}
        <div className="absolute inset-0 bg-white dark:bg-gray-950" />
        
        {/* Subtle gradient mesh */}
        <div className="absolute inset-0 bg-mesh" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid opacity-40" />
        
        {/* Floating accent - very subtle */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary-100/20 dark:bg-primary-900/20 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent-100/15 dark:bg-accent-900/15 rounded-full blur-3xl"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-main py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="badge-primary">{badge}</span>
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            className="text-display mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-body-lg max-w-2xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to={primaryCta.to} className="btn-primary btn-lg group">
              {primaryCta.text}
              <RxArrowRight className="text-lg group-hover:translate-x-0.5 transition-transform" />
            </Link>
            {secondaryCta && (
              <Link to={secondaryCta.to} className="btn-outline btn-lg">
                {secondaryCta.text}
              </Link>
            )}
          </motion.div>

          {/* Subtle trust indicators */}
          <motion.div
            className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-gray-200 dark:border-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {[
              { value: '50+', label: 'Projects Delivered' },
              { value: '95%', label: 'Client Retention' },
              { value: '10+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="stat-value text-2xl md:text-3xl">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
