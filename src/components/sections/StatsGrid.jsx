import React from 'react';
import { motion } from 'framer-motion';

const StatsGrid = ({ stats, variant = 'default' }) => {
  const variants = {
    default: 'bg-white',
    primary: 'bg-gradient-to-r from-primary-600 to-primary-700 text-white',
  };

  return (
    <section className={`py-16 ${variants[variant]}`}>
      <div className="container-main">
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
              <div className={`stat-value ${variant === 'primary' ? 'text-white' : 'gradient-text'}`}>
                {stat.value}
              </div>
              <div className={`stat-label ${variant === 'primary' ? 'text-primary-100' : ''}`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsGrid;
