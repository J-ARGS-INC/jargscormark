import React from 'react';
import { motion } from 'framer-motion';

const ProcessFlow = ({ steps, className = '' }) => {
  return (
    <div className={`space-y-8 ${className}`}>
      {steps.map((step, index) => (
        <motion.div
          key={index}
          className="process-step"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <div className="process-number">{index + 1}</div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              {step.icon && <span className="text-primary-400">{step.icon}</span>}
              <h4 className="text-lg font-semibold text-text-primary">{step.title}</h4>
            </div>
            <p className="text-text-secondary">{step.description}</p>
          </div>
          {index < steps.length - 1 && (
            <div className="absolute left-5 top-12 w-px h-8 bg-dark-500" />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default ProcessFlow;
