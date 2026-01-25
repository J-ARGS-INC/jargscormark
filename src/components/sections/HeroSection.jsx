import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RxArrowRight } from 'react-icons/rx';

// Futuristic background - more visible on mobile
const AnimatedBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {/* Primary glowing orb - larger and more visible */}
    <motion.div
      className="absolute top-1/3 left-1/2 -translate-x-1/2 w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, rgba(99, 102, 241, 0.1) 40%, transparent 70%)',
        filter: 'blur(40px)',
      }}
      animate={{ 
        scale: [1, 1.2, 1], 
        opacity: [0.6, 0.8, 0.6],
        x: ['-50%', '-45%', '-50%'],
      }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    />
    
    {/* Secondary orb - blue accent */}
    <motion.div
      className="absolute bottom-1/4 -left-10 w-48 h-48 sm:w-64 sm:h-64 rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
        filter: 'blur(30px)',
      }}
      animate={{ 
        scale: [1, 1.3, 1],
        opacity: [0.5, 0.7, 0.5],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
    />
    
    {/* Tertiary orb - cyan accent */}
    <motion.div
      className="absolute top-20 -right-10 w-40 h-40 sm:w-56 sm:h-56 rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.18) 0%, transparent 70%)',
        filter: 'blur(25px)',
      }}
      animate={{ 
        scale: [1, 1.25, 1],
        y: [0, 20, 0],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
    />
    
    {/* Floating particles - more visible on mobile */}
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        className={`absolute rounded-full ${i % 3 === 0 ? 'w-3 h-3 bg-indigo-400/50' : i % 3 === 1 ? 'w-2.5 h-2.5 bg-blue-400/45' : 'w-2 h-2 bg-cyan-400/40'}`}
        style={{
          left: `${8 + (i % 4) * 25}%`,
          top: `${15 + Math.floor(i / 4) * 28}%`,
        }}
        animate={{
          y: [0, -40 - (i % 3) * 10, 0],
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 3 + (i % 4),
          repeat: Infinity,
          ease: 'easeInOut',
          delay: i * 0.3,
        }}
      />
    ))}
    
    {/* Grid pattern - more visible */}
    <div 
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #6366F1 1px, transparent 0)`,
        backgroundSize: '32px 32px',
      }}
    />
    
    {/* Gradient overlay for depth */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50" />
  </div>
);


// Desktop-only AI Visual
const DesktopVisual = () => (
  <motion.div
    className="relative w-full h-[380px] lg:h-[420px]"
    initial={{ opacity: 0, x: 30, scale: 0.95 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
  >
    <div
      className="absolute inset-4 rounded-3xl"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.98), rgba(255,255,255,0.85))',
        backdropFilter: 'blur(24px)',
        border: '1px solid rgba(255,255,255,0.95)',
        boxShadow: `
          0 4px 6px rgba(99, 102, 241, 0.05),
          0 10px 20px rgba(99, 102, 241, 0.1),
          0 20px 40px rgba(99, 102, 241, 0.12),
          0 30px 60px rgba(99, 102, 241, 0.08)
        `,
      }}
    >
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#6366F1" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        {[
          { x1: '50%', y1: '35%', x2: '25%', y2: '55%' },
          { x1: '50%', y1: '35%', x2: '75%', y2: '50%' },
          { x1: '50%', y1: '55%', x2: '30%', y2: '75%' },
          { x1: '50%', y1: '55%', x2: '70%', y2: '70%' },
        ].map((line, i) => (
          <motion.line
            key={i} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
            stroke="url(#lineGrad)" strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 4, delay: i * 0.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </svg>

      {/* Central pulsing orb with glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div 
          className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center"
          style={{
            boxShadow: `
              0 0 20px rgba(99, 102, 241, 0.4),
              0 0 40px rgba(99, 102, 241, 0.2),
              0 4px 20px rgba(99, 102, 241, 0.3)
            `
          }}
        >
          <motion.div 
            className="w-6 h-6 rounded-full bg-white/50"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Animated node points with glow */}
      {[
        { left: '25%', top: '55%' },
        { left: '75%', top: '50%' },
        { left: '30%', top: '75%' },
        { left: '70%', top: '70%' },
        { left: '50%', top: '35%' },
      ].map((node, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-indigo-500"
          style={{ 
            left: node.left, 
            top: node.top, 
            boxShadow: '0 0 15px rgba(99,102,241,0.5), 0 0 30px rgba(99,102,241,0.2)' 
          }}
          animate={{ 
            scale: [1, 1.4, 1], 
            opacity: [0.7, 1, 0.7],
            boxShadow: [
              '0 0 15px rgba(99,102,241,0.5), 0 0 30px rgba(99,102,241,0.2)',
              '0 0 25px rgba(99,102,241,0.7), 0 0 50px rgba(99,102,241,0.3)',
              '0 0 15px rgba(99,102,241,0.5), 0 0 30px rgba(99,102,241,0.2)'
            ]
          }}
          transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Floating labels with shadows */}
      {[
        { text: 'Data Processing', left: '10%', top: '42%' },
        { text: 'ML Models', right: '10%', top: '32%' },
        { text: 'Automation', left: '18%', bottom: '18%' },
        { text: 'Intelligence', right: '12%', bottom: '22%' },
      ].map((label, i) => (
        <motion.div
          key={i}
          className="absolute px-3 py-1.5 rounded-full bg-white text-xs font-medium text-indigo-600 border border-indigo-100"
          style={{ 
            left: label.left, 
            right: label.right, 
            top: label.top, 
            bottom: label.bottom,
            boxShadow: '0 4px 12px rgba(99,102,241,0.15), 0 2px 4px rgba(0,0,0,0.05)'
          }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3.5, delay: i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          {label.text}
        </motion.div>
      ))}
    </div>
  </motion.div>
);

// Main Hero Component
const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="absolute inset-0 overflow-hidden">
        <AnimatedBackground />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Increased mobile top padding: pt-40 on mobile for more space from header */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center pt-40 pb-12 sm:pt-44 sm:pb-16 md:pt-44 md:pb-20 lg:pt-36 lg:pb-24">
          
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Badge - slides up dramatically */}
              <motion.div 
                className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3 sm:py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-5 sm:mb-6"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                <span className="text-[11px] sm:text-xs font-medium text-indigo-700">AI Consulting & Engineering</span>
              </motion.div>

              {/* Headline - reduced size */}
              <motion.h1
                className="text-[1.5rem] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-[1.15] sm:leading-tight tracking-tight mb-5 sm:mb-6"
                initial={{ opacity: 0, y: 80, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                We design and deploy{' '}
                <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  AI systems
                </span>{' '}
                that automate business operations
              </motion.h1>

              {/* Subtext - visible slide up */}
              <motion.p
                className="text-[15px] sm:text-base md:text-lg text-gray-600 mb-8 sm:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                Jargs Cormark partners with enterprises across Africa to build intelligent 
                systems that reduce costs, increase efficiency, and transform operations.
              </motion.p>

              {/* CTAs - slide up with bounce */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div whileTap={{ scale: 0.98 }}>
                  <Link 
                    to="/book-consultation" 
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 sm:py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold shadow-lg shadow-indigo-200/50 hover:shadow-xl hover:shadow-indigo-200/60 transition-all text-[15px]"
                  >
                    Book AI Consultation
                    <RxArrowRight size={16} />
                  </Link>
                </motion.div>
                <motion.div whileTap={{ scale: 0.98 }}>
                  <Link 
                    to="/solutions" 
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 sm:py-3 rounded-xl bg-white text-gray-700 font-semibold border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all text-[15px]"
                  >
                    View Solutions
                  </Link>
                </motion.div>
              </motion.div>

              {/* Stats - improved mobile spacing */}
              <motion.div
                className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
              >
                <div className="flex justify-center lg:justify-start gap-8 sm:gap-10">
                  {[
                    { value: '50+', label: 'Projects' },
                    { value: '95%', label: 'Retention' },
                    { value: '8', label: 'Industries' },
                  ].map((stat, index) => (
                    <motion.div 
                      key={stat.label} 
                      className="text-center lg:text-left"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    >
                      <div className="text-xl sm:text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-xs sm:text-sm text-gray-500">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Desktop Visual */}
          <div className="hidden lg:block">
            <DesktopVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
