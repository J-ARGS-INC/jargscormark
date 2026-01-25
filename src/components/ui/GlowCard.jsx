import React from 'react';
import { motion } from 'framer-motion';

const GlowCard = ({ 
  children, 
  className = '', 
  hover = true,
  variant = 'default',
  onClick,
  as = 'div'
}) => {
  const Component = motion[as] || motion.div;
  
  // Light theme premium styling
  const variants = {
    default: `
      bg-white/95 backdrop-blur-md 
      border border-gray-100/80 
      rounded-2xl
      shadow-[0_1px_2px_rgba(0,0,0,0.02),0_4px_12px_rgba(0,0,0,0.04),0_8px_24px_rgba(99,102,241,0.06)]
    `,
    glass: `
      backdrop-blur-lg 
      bg-gradient-to-br from-white/95 to-white/85
      border border-white/80
      rounded-2xl
      shadow-[0_4px_16px_rgba(99,102,241,0.08)]
    `,
    elevated: `
      bg-white 
      border border-gray-100
      rounded-2xl
      shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.04)]
    `,
  };

  const hoverStyles = hover ? 'hover:border-indigo-100 hover:shadow-[0_4px_12px_rgba(0,0,0,0.04),0_8px_24px_rgba(99,102,241,0.1)]' : '';

  return (
    <Component
      className={`
        ${variants[variant] || variants.default}
        transition-all duration-300 ease-out
        ${hoverStyles}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
      whileHover={hover ? { y: -4 } : {}}
      whileTap={hover ? { scale: 0.98 } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </Component>
  );
};

export default GlowCard;

