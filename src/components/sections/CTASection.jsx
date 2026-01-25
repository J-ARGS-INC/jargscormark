import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RxArrowRight } from 'react-icons/rx';

const CTASection = ({
  title = "Ready to automate your business?",
  subtitle = "Book a free strategy call to discover which AI systems can save you 20+ hours per week.",
  primaryCta = { text: 'Book Free Strategy Call', to: '/book-consultation' },
  secondaryCta,
  variant = 'card',
}) => {
  if (variant === 'full') {
    return (
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-indigo-600 to-blue-600 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent" />

        <div className="container-main relative z-10 text-center">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-indigo-100 mb-6 sm:mb-8 max-w-xl mx-auto"
            style={{ fontSize: 'clamp(0.875rem, 2vw, 1.125rem)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {subtitle}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link 
              to={primaryCta.to} 
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-white text-indigo-700 font-semibold shadow-lg active:scale-[0.98] transition-transform"
            >
              {primaryCta.text}
              <RxArrowRight className="text-lg" />
            </Link>
            {secondaryCta && (
              <Link 
                to={secondaryCta.to} 
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl border border-white/30 text-white font-medium hover:bg-white/10 active:scale-[0.98] transition-all"
              >
                {secondaryCta.text}
              </Link>
            )}
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-14 sm:py-16 md:py-20 lg:py-24 bg-futuristic">
      <div className="container-main">
        <motion.div
          className="card-futuristic text-center max-w-3xl mx-auto"
          style={{ padding: 'clamp(1.75rem, 5vw, 3.5rem)' }}
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <h2 className="text-headline mb-3 sm:mb-4">{title}</h2>
          <p className="text-body-lg mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <motion.div whileTap={{ scale: 0.98 }}>
              <Link 
                to={primaryCta.to} 
                className="btn-glow btn-lg inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl"
              >
                {primaryCta.text}
                <RxArrowRight className="text-lg" />
              </Link>
            </motion.div>
            {secondaryCta && (
              <motion.div whileTap={{ scale: 0.98 }}>
                <Link to={secondaryCta.to} className="btn-outline btn-lg w-full sm:w-auto rounded-xl">
                  {secondaryCta.text}
                </Link>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
