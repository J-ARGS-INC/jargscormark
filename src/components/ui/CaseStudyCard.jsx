import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { RxArrowRight } from 'react-icons/rx';

const CaseStudyCard = ({ 
  id,
  image,
  title, 
  industry, 
  excerpt,
  metrics = [],
  technologies = [],
  index = 0 
}) => {
  return (
    <motion.div
      className="case-study-card group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600"} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
        <span className="absolute top-4 left-4 badge-primary">{industry}</span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-text-primary mb-2 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
          {excerpt}
        </p>

        {/* Metrics */}
        {metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-3 mb-4">
            {metrics.slice(0, 2).map((metric, idx) => (
              <div key={idx} className="text-center p-2 bg-dark-600/50 rounded-lg">
                <div className="text-lg font-bold text-primary-400">{metric.value}</div>
                <div className="text-xs text-text-muted">{metric.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Technologies */}
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {technologies.slice(0, 3).map((tech, idx) => (
              <span key={idx} className="text-xs px-2 py-1 bg-dark-600 rounded text-text-muted">
                {tech}
              </span>
            ))}
            {technologies.length > 3 && (
              <span className="text-xs px-2 py-1 text-text-muted">
                +{technologies.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Link */}
        <NavLink 
          to={`/case-studies/${id}`}
          className="inline-flex items-center gap-2 text-primary-400 font-medium hover:gap-3 transition-all duration-200"
        >
          View case study <RxArrowRight />
        </NavLink>
      </div>
    </motion.div>
  );
};

export default CaseStudyCard;
