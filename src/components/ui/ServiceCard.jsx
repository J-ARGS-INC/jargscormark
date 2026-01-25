import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { RxArrowRight } from 'react-icons/rx';

const ServiceCard = ({ 
  icon,
  title, 
  description, 
  features = [],
  tools = [],
  link,
  index = 0 
}) => {
  return (
    <motion.div
      className="service-card glass-card p-6 md:p-8 h-full flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      {/* Icon */}
      {icon && (
        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary-500/10 border border-primary-500/20 text-primary-400 mb-5">
          {icon}
        </div>
      )}

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-text-secondary mb-5 flex-grow">
        {description}
      </p>

      {/* Features */}
      {features.length > 0 && (
        <ul className="space-y-2 mb-5">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-text-secondary">
              <span className="text-primary-400 mt-1">•</span>
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* Tools */}
      {tools.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-5">
          {tools.map((tool, idx) => (
            <span 
              key={idx} 
              className="px-2 py-1 bg-dark-600 rounded text-xs text-text-muted"
            >
              {tool}
            </span>
          ))}
        </div>
      )}

      {/* Link */}
      {link && (
        <NavLink 
          to={link}
          className="inline-flex items-center gap-2 text-primary-400 font-medium hover:gap-3 transition-all duration-200"
        >
          Learn more <RxArrowRight />
        </NavLink>
      )}
    </motion.div>
  );
};

export default ServiceCard;
