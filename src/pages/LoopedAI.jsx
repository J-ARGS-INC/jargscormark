import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RxArrowRight, RxArrowTopRight, RxCheckCircled } from 'react-icons/rx';
import {
    HiOutlineDocumentSearch,
    HiOutlineGlobeAlt,
    HiOutlineCalendar,
    HiOutlineLightningBolt,
    HiOutlineChatAlt2,
    HiOutlineBell,
} from 'react-icons/hi';
import Section from '../components/layout/Section';
import CTASection from '../components/sections/CTASection';

const features = [
    {
        icon: HiOutlineGlobeAlt,
        title: 'Visa research, live',
        description: 'Requirements fetched directly from official government portals in real time, tailored to the user\'s exact nationality and visa type.',
    },
    {
        icon: HiOutlineDocumentSearch,
        title: 'AI document review',
        description: 'Users upload their documents and receive a pass/fail score on every page. The AI reads each requirement against their paperwork and flags exactly what needs fixing.',
    },
    {
        icon: HiOutlineCalendar,
        title: 'Timeline planning',
        description: 'A personalised backward timeline from today to the target move date, accounting for current processing delays and the specific visa path.',
    },
    {
        icon: HiOutlineLightningBolt,
        title: 'Country comparison',
        description: 'Compares immigration pathways side-by-side across multiple destinations based on the user\'s situation, not generic rankings.',
    },
    {
        icon: HiOutlineChatAlt2,
        title: 'Telegram intelligence hub',
        description: 'Users link their Telegram account and get full AI assistant access anywhere. Ask questions, receive updates, and manage briefings without opening a browser.',
    },
    {
        icon: HiOutlineBell,
        title: 'Daily intelligence briefings',
        description: 'Every two days, LoopedAI delivers a personalised brief via Telegram covering immigration law changes, job market conditions, and news for the destination country.',
    },
];

const steps = [
    {
        num: '01',
        title: 'Ask in plain language',
        description: 'No forms or jargon. Users describe their situation including where they want to go, why, and when.',
    },
    {
        num: '02',
        title: 'AI fetches live requirements',
        description: 'Agents read official government portals in real time, tailored to the user\'s nationality and visa type.',
    },
    {
        num: '03',
        title: 'Get a personalised plan',
        description: 'Users receive documents, timelines, financial thresholds, and a checklist built for their specific case.',
    },
    {
        num: '04',
        title: 'Submit with confidence',
        description: 'Documents are uploaded for AI review. Pass/fail feedback on every page before the user presses submit.',
    },
];

const LoopedAI = () => {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-indigo-900 to-blue-900" />
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div
                        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20"
                        style={{ background: 'radial-gradient(circle, rgba(129,140,248,0.6) 0%, transparent 70%)', filter: 'blur(80px)' }}
                    />
                    <div
                        className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-20"
                        style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.5) 0%, transparent 70%)', filter: 'blur(60px)' }}
                    />
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
                            backgroundSize: '32px 32px',
                        }}
                    />
                </div>

                <div className="container-main relative z-10">
                    <div className="max-w-3xl">
                        <motion.div
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-300 animate-pulse" />
                            <span className="text-xs font-medium text-indigo-200">Built by Jargs Cormark</span>
                        </motion.div>

                        <motion.h1
                            className="text-[2rem] sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-5"
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            LoopedAI
                            <span className="block text-indigo-300 mt-1">
                                AI Immigration Intelligence
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-lg text-indigo-100 mb-4 max-w-xl leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            LoopedAI is an AI system we designed and built. It reads official
                            government portals in real time, builds exact document checklists,
                            and reviews files before submission so users arrive prepared.
                        </motion.p>

                        <motion.p
                            className="text-sm text-indigo-300 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                        >
                            190 countries covered. Free to start.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-3"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <a
                                href="https://www.loopedai.io"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-indigo-700 font-semibold shadow-lg hover:shadow-xl hover:bg-indigo-50 transition-all text-[15px]"
                            >
                                Visit loopedai.io
                                <RxArrowTopRight size={16} />
                            </a>
                            <Link
                                to="/book-consultation"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 border border-white/25 text-white font-semibold hover:bg-white/20 transition-all text-[15px]"
                            >
                                Work with us
                                <RxArrowRight size={16} />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What we built and why */}
            <Section>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    <div>
                        <h2 className="text-headline mb-4">What we built and why</h2>
                        <p className="text-body-lg mb-5">
                            Immigration information is scattered across dozens of government portals,
                            buried in PDFs, and constantly changing. Most people pay expensive
                            consultants, spend hours reading outdated blog posts, or both.
                        </p>
                        <p className="text-body mb-5">
                            We designed and built LoopedAI as an AI agent that goes directly to
                            official government sources, processes requirements for each user's exact
                            situation, and reviews their actual documents to find what needs fixing
                            before they submit.
                        </p>
                        <p className="text-body">
                            It is not a directory or a blog. It is a live AI system that reads the
                            same portals immigration officers use and tells users exactly what they
                            need, right now.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            { label: 'Official sources only', detail: 'Government portals, not travel blogs or outdated forums.' },
                            { label: 'Instant, not approximate', detail: 'Actual current requirements rather than generic estimates.' },
                            { label: '190 countries covered', detail: 'Every major immigration pathway, including lesser-known routes.' },
                            { label: 'Document AI review', detail: 'Pass/fail scoring on actual files before submission.' },
                            { label: 'Available 24/7', detail: 'Ask questions any time from anywhere, including via Telegram.' },
                            { label: 'Free to start', detail: 'No card required. Upgrade to Premium for document review and daily briefings.' },
                        ].map((item, index) => (
                            <motion.div
                                key={item.label}
                                className="flex items-start gap-4"
                                initial={{ opacity: 0, x: 16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.07, duration: 0.4 }}
                            >
                                <div className="w-6 h-6 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <RxCheckCircled className="text-indigo-600 text-sm" />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900 text-[15px]">{item.label}</p>
                                    <p className="text-sm text-gray-500">{item.detail}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Features */}
            <Section background="gray">
                <div className="max-w-2xl mb-10">
                    <h2 className="text-headline mb-3">Core features we built</h2>
                    <p className="text-body-lg">
                        Six capabilities that take users from first question to confirmed submission.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-indigo-100 hover:shadow-md transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.4 }}
                        >
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 flex items-center justify-center mb-4">
                                <feature.icon className="text-indigo-600" size={20} />
                            </div>
                            <h3 className="font-semibold text-gray-900 text-[15px] mb-2">{feature.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* How it works */}
            <Section>
                <div className="max-w-2xl mb-10">
                    <h2 className="text-headline mb-3">How it works</h2>
                    <p className="text-body-lg">From the user's first question to a completed submission in four steps.</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.num}
                            className="relative bg-white rounded-2xl border border-gray-100 p-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                        >
                            <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-indigo-600 text-white text-sm font-bold mb-4">
                                {index + 1}
                            </div>
                            <h3 className="font-semibold text-gray-900 text-[15px] mb-2">{step.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Pricing */}
            <Section background="gray">
                <div className="max-w-2xl mb-10">
                    <h2 className="text-headline mb-3">Simple pricing</h2>
                    <p className="text-body-lg">Free to start. Upgrade when users need document review, daily briefings, and unlimited queries.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 max-w-2xl">
                    <motion.div
                        className="bg-white rounded-2xl border border-gray-200 p-7"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Free</p>
                        <div className="text-3xl font-bold text-gray-900 mb-1">$0</div>
                        <p className="text-sm text-gray-400 mb-5">No card required</p>
                        <ul className="space-y-2.5">
                            {['Up to 4 AI queries per session', 'Real-time visa research', 'Country comparison', 'Timeline planning', 'Pre-application checklist'].map(item => (
                                <li key={item} className="flex items-start gap-2.5">
                                    <RxCheckCircled className="text-gray-300 mt-0.5 flex-shrink-0 text-sm" />
                                    <span className="text-sm text-gray-600">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        className="relative bg-white rounded-2xl border-2 border-indigo-500 p-7 overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        <div className="absolute top-0 right-0 px-3 py-1.5 bg-indigo-500 text-white text-[11px] font-semibold rounded-bl-xl">
                            Popular
                        </div>
                        <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-3">Premium</p>
                        <div className="text-3xl font-bold text-gray-900 mb-1">$20<span className="text-base font-normal text-gray-400">/mo</span></div>
                        <p className="text-sm text-gray-400 mb-5">Cancel any time</p>
                        <ul className="space-y-2.5">
                            {[
                                'Unlimited AI immigration queries',
                                'AI document review with pass/fail scoring',
                                'Daily intelligence briefings via Telegram',
                                'Telegram bot to chat from anywhere',
                                'Priority AI responses',
                                'All free features included',
                            ].map(item => (
                                <li key={item} className="flex items-start gap-2.5">
                                    <RxCheckCircled className="text-indigo-500 mt-0.5 flex-shrink-0 text-sm" />
                                    <span className="text-sm text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </Section>

            {/* Product link */}
            <section className="py-14 sm:py-16 bg-gradient-to-r from-indigo-950 to-blue-900">
                <div className="container-main">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-1">Interested in what we can build for you?</h3>
                            <p className="text-indigo-300 text-sm">LoopedAI is one example. We design and deploy AI systems like this for clients across industries.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                            <a
                                href="https://www.loopedai.io"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-medium text-sm hover:bg-white/20 transition-all whitespace-nowrap"
                            >
                                See loopedai.io
                                <RxArrowTopRight size={14} />
                            </a>
                            <Link
                                to="/book-consultation"
                                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-indigo-700 font-semibold text-sm shadow-lg hover:bg-indigo-50 transition-all whitespace-nowrap"
                            >
                                Book a consultation
                                <RxArrowRight size={14} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection
                title="Want us to build something similar?"
                subtitle="We designed and deployed LoopedAI. We can do the same for your business. Tell us about your challenge."
                primaryCta={{ text: 'Book a consultation', to: '/book-consultation' }}
                secondaryCta={{ text: 'View case studies', to: '/case-studies' }}
            />
        </>
    );
};

export default LoopedAI;
