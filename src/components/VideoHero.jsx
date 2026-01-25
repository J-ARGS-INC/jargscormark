import React from 'react';
import { motion } from 'framer-motion';
import { RxArrowRight } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';
import { HiOutlineSparkles } from 'react-icons/hi';

const VideoHero = ({ 
  title, 
  subtitle, 
  ctaText = "Book Free Strategy Call", 
  ctaLink = "/book-consultation",
  secondaryCtaText,
  secondaryCtaLink,
}) => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-indigo-50/30 to-cyan-50/20" />
        <div className="absolute inset-0 bg-futuristic" />
        <div className="absolute inset-0 bg-dots-futuristic opacity-40" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        
        {/* Floating Orbs - Desktop */}
        <motion.div 
          className="hidden md:block absolute top-20 left-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="hidden md:block absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Mobile Animated Futuristic Elements */}
        <div className="md:hidden absolute inset-0 flex items-center justify-center">
          {/* Rotating outer ring */}
          <motion.div
            className="absolute w-[350px] h-[350px] rounded-full border border-indigo-300/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              background: 'conic-gradient(from 0deg, transparent, rgba(99, 102, 241, 0.1), transparent, rgba(56, 189, 248, 0.1), transparent)',
            }}
          />
          
          {/* Rotating middle ring - opposite direction */}
          <motion.div
            className="absolute w-[280px] h-[280px] rounded-full border border-cyan-300/40"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            style={{
              background: 'conic-gradient(from 90deg, transparent, rgba(56, 189, 248, 0.15), transparent, rgba(168, 85, 247, 0.1), transparent)',
            }}
          />
          
          {/* Pulsing inner ring */}
          <motion.div
            className="absolute w-[200px] h-[200px] rounded-full"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)',
              boxShadow: '0 0 60px rgba(99, 102, 241, 0.3)',
            }}
          />
          
          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-indigo-400/60"
              style={{
                top: `${30 + Math.random() * 40}%`,
                left: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
          
          {/* Animated gradient glow */}
          <motion.div
            className="absolute w-[300px] h-[300px] rounded-full blur-3xl"
            animate={{
              background: [
                'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)',
                'radial-gradient(circle, rgba(56, 189, 248, 0.3) 0%, transparent 70%)',
                'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)',
                'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)',
              ],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-main px-5 md:px-12 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 glow-border"
            style={{ 
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(56, 189, 248, 0.05))',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HiOutlineSparkles className="text-indigo-500" />
            <span className="text-sm font-medium text-indigo-600">
              AI Automation Agency
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-gray-900 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-sm md:text-base lg:text-lg mb-10 text-gray-600 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            {subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            <NavLink to={ctaLink} className="btn-glow text-base md:text-lg px-8 py-4">
              {ctaText}
              <RxArrowRight className="text-xl" />
            </NavLink>
            
            {secondaryCtaText && secondaryCtaLink && (
              <NavLink to={secondaryCtaLink} className="btn-outline text-base md:text-lg px-8 py-4">
                {secondaryCtaText}
              </NavLink>
            )}
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          >
            <span className="text-sm text-gray-500">Powered by:</span>
            {['VAPI', 'n8n', 'MCP', 'OpenAI'].map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
};

export default VideoHero;
