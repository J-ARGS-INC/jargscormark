import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RxArrowRight } from 'react-icons/rx';

const CTASection = ({
    title = 'Ready to build something?',
    subtitle = 'Tell us about your challenge. We will tell you honestly whether we can help.',
    primaryCta = { text: 'Book a consultation', to: '/book-consultation' },
    secondaryCta,
    variant = 'card',
}) => {
    if (variant === 'full') {
        return (
            <section className="relative py-20 sm:py-24 bg-indigo-600 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-10"
                        style={{ background: 'radial-gradient(circle at top right, #fff, transparent 60%)' }} />
                </div>
                <div className="container-main relative z-10 text-center">
                    <motion.h2
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-3"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        className="text-indigo-200 mb-8 max-w-xl mx-auto text-base sm:text-lg"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        {subtitle}
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-3 justify-center"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link to={primaryCta.to}
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-indigo-700 font-semibold hover:bg-indigo-50 active:scale-[0.98] transition-all text-[15px] shadow-sm">
                            {primaryCta.text}
                            <RxArrowRight />
                        </Link>
                        {secondaryCta && (
                            <Link to={secondaryCta.to}
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/30 text-white font-medium hover:bg-white/10 active:scale-[0.98] transition-all text-[15px]">
                                {secondaryCta.text}
                            </Link>
                        )}
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-20 sm:py-24 bg-gray-50 border-t border-gray-100">
            <div className="container-main">
                <motion.div
                    className="rounded-2xl bg-white border border-gray-200 p-10 sm:p-14 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="max-w-xl text-center lg:text-left">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-3">{title}</h2>
                        <p className="text-gray-500 text-base sm:text-lg leading-relaxed">{subtitle}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                        <Link to={primaryCta.to}
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 active:scale-[0.98] transition-all text-[15px] shadow-sm">
                            {primaryCta.text}
                            <RxArrowRight />
                        </Link>
                        {secondaryCta && (
                            <Link to={secondaryCta.to}
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-gray-200 text-gray-700 font-medium hover:border-indigo-200 hover:text-indigo-700 hover:bg-indigo-50 active:scale-[0.98] transition-all text-[15px]">
                                {secondaryCta.text}
                            </Link>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
