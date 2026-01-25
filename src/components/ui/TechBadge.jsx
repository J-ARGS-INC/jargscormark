import React from 'react';

const techCategories = {
  frontend: { color: 'primary', label: 'Frontend' },
  backend: { color: 'accent', label: 'Backend' },
  ai: { color: 'success', label: 'AI/ML' },
  data: { color: 'warning', label: 'Data' },
  cloud: { color: 'primary', label: 'Cloud' },
  devops: { color: 'accent', label: 'DevOps' },
};

const TechBadge = ({ 
  name, 
  icon, 
  category = 'frontend',
  size = 'md',
  showTooltip = false 
}) => {
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  const categoryConfig = techCategories[category] || techCategories.frontend;

  return (
    <div className="relative group">
      <span 
        className={`
          inline-flex items-center gap-2 
          bg-dark-600 border border-dark-500 rounded-lg 
          text-text-secondary 
          transition-all duration-200 
          hover:border-${categoryConfig.color}-500/30 
          hover:text-${categoryConfig.color}-400
          ${sizeClasses[size]}
        `}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {name}
      </span>
      
      {showTooltip && (
        <div className="
          absolute bottom-full left-1/2 -translate-x-1/2 mb-2
          px-2 py-1 rounded bg-dark-600 text-xs text-text-secondary
          opacity-0 group-hover:opacity-100 transition-opacity
          pointer-events-none whitespace-nowrap
        ">
          {categoryConfig.label}
        </div>
      )}
    </div>
  );
};

export default TechBadge;
