import React from 'react';
import { motion } from 'framer-motion';

const PageHero = ({ eyebrow, title, accent, description }) => (
    <section className="relative pt-36 pb-14 lg:pt-44 lg:pb-20 overflow-hidden bg-white">
        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400" />

        {/* Background accents */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[400px] opacity-[0.05]"
                style={{ background: 'radial-gradient(ellipse at top right, #6366f1 0%, transparent 65%)' }} />
            <div className="absolute inset-0 opacity-[0.018]"
                style={{
                    backgroundImage: 'linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)',
                    backgroundSize: '56px 56px',
                }} />
        </div>

        <div className="container-main relative z-10">
            {/* Left accent bar */}
            <div className="flex gap-6 items-start">
                <div className="hidden sm:block w-0.5 h-full min-h-[120px] rounded-full bg-gradient-to-b from-indigo-500 to-transparent self-stretch mt-1 flex-shrink-0" />

                <div className="max-w-3xl">
                    {eyebrow && (
                        <motion.p
                            className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-4"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45 }}
                        >
                            {eyebrow}
                        </motion.p>
                    )}

                    <motion.h1
                        className="text-[2rem] sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-5"
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {title}
                        {accent && (
                            <span className="block mt-1 bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                                {accent}
                            </span>
                        )}
                    </motion.h1>

                    {description && (
                        <motion.p
                            className="text-base sm:text-lg text-gray-500 max-w-2xl leading-relaxed"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {description}
                        </motion.p>
                    )}
                </div>
            </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
);

export default PageHero;
