import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ 
  title, 
  subtitle, 
  badge,
  gradient = true,
  align = 'center',
  className = '' 
}) => {
  const alignClasses = {
    center: 'text-center mx-auto',
    left: 'text-left',
    right: 'text-right ml-auto',
  };

  return (
    <motion.div 
      className={`max-w-3xl mb-12 md:mb-16 ${alignClasses[align]} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      {badge && (
        <motion.span 
          className="badge-primary mb-4 inline-block"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {badge}
        </motion.span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${gradient ? 'gradient-text' : 'text-text-primary'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-text-secondary">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
