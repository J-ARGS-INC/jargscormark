import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RxArrowRight, RxArrowTopRight, RxCheckCircled } from 'react-icons/rx';
import {
    HiOutlineLightBulb,
    HiOutlineLightningBolt,
    HiOutlineCode,
    HiOutlineTemplate,
    HiOutlineCube,
    HiOutlinePhone,
    HiOutlineArrowRight,
} from 'react-icons/hi';

import CTASection from '../components/sections/CTASection';
import HeroSection from '../components/sections/HeroSection';

/* ─── Services interactive showcase ────────────────────────────────────── */
const SERVICES = [
    {
        icon: HiOutlineLightBulb,
        title: 'AI Consulting',
        tagline: 'Start with strategy',
        description: 'We map your operations, surface the right AI opportunities, and build a concrete implementation plan. No vague roadmaps  a prioritised list of what to build first and why.',
        delivers: [
            'AI opportunity assessment across your workflow',
            'Tool and platform recommendations with rationale',
            'Phased implementation roadmap with timelines',
            'Team training and change management support',
        ],
        to: '/services',
    },
    {
        icon: HiOutlineCube,
        title: 'LoopedAI',
        tagline: 'Immigration intelligence  built by us',
        description: 'An AI system we designed and deployed. It reads official government portals in real time, builds document checklists, reviews files before submission, and sends daily Telegram briefings. 190 countries covered.',
        delivers: [
            'Live visa requirements from official government portals',
            'Pass/fail AI document review before submission',
            'Personalised timelines and pre-application checklists',
            'Daily intelligence briefings via Telegram',
        ],
        to: '/looped-ai',
        external: 'https://www.loopedai.io',
    },
    {
        icon: HiOutlineLightningBolt,
        title: 'AI Automation',
        tagline: 'Remove the manual work',
        description: 'We identify the repetitive, time-consuming tasks in your operations and automate them end-to-end. Your team stops doing what a workflow can handle and starts focusing on work that actually needs them.',
        delivers: [
            'Process audit to identify automation opportunities',
            'Multi-tool workflow builds using n8n and Make',
            'Automated reporting, alerts, and data sync',
            'Error handling, monitoring, and documentation',
        ],
        to: '/services',
    },
    {
        icon: HiOutlineCode,
        title: 'Custom Software',
        tagline: 'Software built around you',
        description: 'We build applications designed around your exact workflow  not adapted from a SaaS template that almost fits. Admin tools, customer portals, dashboards, and internal systems integrated with what you already use.',
        delivers: [
            'Web application design and development',
            'Admin dashboards and internal tools',
            'API development and third-party integrations',
            'Database architecture and ongoing maintenance',
        ],
        to: '/services',
    },
    {
        icon: HiOutlineTemplate,
        title: 'Website Building',
        tagline: 'Sites that actually convert',
        description: 'We build fast, well-designed websites that reflect the quality of your business. Clean code, good performance, and integrated with the tools your team uses  not a theme you have to fight.',
        delivers: [
            'Design, copywriting, and full development',
            'CMS integration for your team to manage content',
            'Lead capture, forms, and analytics setup',
            'Performance optimisation and deployment',
        ],
        to: '/services',
    },
    {
        icon: HiOutlinePhone,
        title: 'AI Voice Agents',
        tagline: 'Phone calls on autopilot',
        description: 'We deploy AI voice agents that handle inbound and outbound calls around the clock. They qualify leads, book appointments, and follow up automatically  so your team handles conversations that actually need a human.',
        delivers: [
            'Custom voice agent trained on your business',
            'Appointment booking and lead qualification logic',
            'CRM integration and call recording',
            'Analytics dashboard with call metrics',
        ],
        to: '/services',
    },
];

/* Mobile: accordion. Desktop: side-by-side tabs */
function ServicesShowcase() {
    const [active, setActive] = useState(0);
    const [mobileOpen, setMobileOpen] = useState(null);
    const service = SERVICES[active];

    const ServiceDetail = ({ svc }) => (
        <div>
            <p className="text-xs font-semibold text-indigo-500 uppercase tracking-widest mb-2">{svc.tagline}</p>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">{svc.description}</p>
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2.5">What we deliver</p>
            <ul className="space-y-2 mb-5">
                {svc.delivers.map(item => (
                    <li key={item} className="flex items-start gap-2">
                        <RxCheckCircled className="text-indigo-500 mt-0.5 flex-shrink-0 text-xs" />
                        <span className="text-sm text-gray-600">{item}</span>
                    </li>
                ))}
            </ul>
            <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                <Link to={svc.to} className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600">
                    Learn more <RxArrowRight size={13} />
                </Link>
                {svc.external && (
                    <a href={svc.external} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-gray-400">
                        Visit site <RxArrowTopRight size={12} />
                    </a>
                )}
            </div>
        </div>
    );

    return (
        <>
            {/* Mobile accordion */}
            <div className="lg:hidden rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm divide-y divide-gray-100">
                {SERVICES.map((s, i) => (
                    <div key={s.title}>
                        <button
                            onClick={() => setMobileOpen(mobileOpen === i ? null : i)}
                            className={`w-full text-left px-4 py-4 flex items-center gap-3 transition-colors ${
                                mobileOpen === i ? 'bg-indigo-50' : 'active:bg-gray-50'
                            }`}
                        >
                            <span className={`flex-shrink-0 ${mobileOpen === i ? 'text-indigo-600' : 'text-gray-400'}`}>
                                <s.icon size={18} />
                            </span>
                            <span className={`text-sm font-medium flex-1 ${mobileOpen === i ? 'text-indigo-700' : 'text-gray-700'}`}>
                                {s.title}
                            </span>
                            <motion.span
                                animate={{ rotate: mobileOpen === i ? 45 : 0 }}
                                transition={{ duration: 0.2 }}
                                className="flex-shrink-0 text-gray-400"
                            >
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </motion.span>
                        </button>
                        <AnimatePresence>
                            {mobileOpen === i && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-4 pb-5 pt-1">
                                        <ServiceDetail svc={s} />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>

            {/* Desktop tabs */}
            <div className="hidden lg:block rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm">
                <div className="grid lg:grid-cols-5">
                    <div className="lg:col-span-2 border-r border-gray-100 bg-gray-50">
                        {SERVICES.map((s, i) => (
                            <button
                                key={s.title}
                                onClick={() => setActive(i)}
                                className={`w-full text-left px-5 py-4 flex items-center gap-3 border-b border-gray-100 last:border-b-0 transition-all duration-150 group ${
                                    active === i
                                        ? 'bg-white border-l-2 border-l-indigo-600 text-indigo-700'
                                        : 'hover:bg-white/60 text-gray-500 hover:text-gray-800 border-l-2 border-l-transparent'
                                }`}
                            >
                                <span className={`flex-shrink-0 transition-colors ${active === i ? 'text-indigo-600' : 'text-gray-400 group-hover:text-gray-600'}`}>
                                    <s.icon size={17} />
                                </span>
                                <span className="text-sm font-medium">{s.title}</span>
                                {active === i && (
                                    <motion.span layoutId="activeArrow" className="ml-auto text-indigo-400">
                                        <HiOutlineArrowRight size={14} />
                                    </motion.span>
                                )}
                            </button>
                        ))}
                    </div>
                    <div className="lg:col-span-3 p-8 min-h-[400px] flex flex-col">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0, x: 12 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -12 }}
                                transition={{ duration: 0.22 }}
                                className="flex-1"
                            >
                                <ServiceDetail svc={service} />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </>
    );
}

/* ─── LoopedAI chat demo ────────────────────────────────────────────────── */
const CHAT = [
    { role: 'user', text: "I'm Rwandan, can I get a Canada study permit?" },
    { role: 'ai', text: "Yes! Rwanda is eligible. Here is your checklist:", delay: 800 },
    { role: 'list', items: ['Valid passport (6+ months)', 'Letter of acceptance', 'Proof of funds  CAD $10,000', 'Biometrics appointment'], delay: 1400 },
    { role: 'ai', text: "2 items need attention before you submit. Want me to guide you through them?", delay: 2400 },
];

function ChatDemo() {
    const [visible, setVisible] = useState(0);
    const [typing, setTyping] = useState(false);
    const [started, setStarted] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
            { threshold: 0.4 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [started]);

    useEffect(() => {
        if (!started || visible >= CHAT.length) return;
        const current = CHAT[visible];
        const baseDelay = current.delay ?? 0;
        const t = setTimeout(() => {
            if (current.role !== 'user') setTyping(true);
            const t2 = setTimeout(() => {
                setTyping(false);
                setVisible(v => v + 1);
            }, current.role === 'user' ? 0 : 900);
            return () => clearTimeout(t2);
        }, visible === 0 ? 300 : baseDelay);
        return () => clearTimeout(t);
    }, [started, visible]);

    return (
        <div ref={ref} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-2.5 px-4 py-3 border-b border-gray-100 bg-gray-50">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="text-xs font-semibold text-gray-700">LoopedAI</span>
                <span className="text-xs text-gray-400">Online</span>
            </div>

            {/* Messages */}
            <div className="px-4 py-4 space-y-3 min-h-[260px]">
                {CHAT.slice(0, visible).map((msg, i) => {
                    if (msg.role === 'user') return (
                        <motion.div
                            key={i}
                            className="flex justify-end"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25 }}
                        >
                            <div className="bg-indigo-600 text-white text-sm rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[85%]">
                                {msg.text}
                            </div>
                        </motion.div>
                    );
                    if (msg.role === 'ai') return (
                        <motion.div
                            key={i}
                            className="flex"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25 }}
                        >
                            <div className="bg-gray-100 text-gray-800 text-sm rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%]">
                                {msg.text}
                            </div>
                        </motion.div>
                    );
                    if (msg.role === 'list') return (
                        <motion.div
                            key={i}
                            className="bg-gray-50 border border-gray-200 rounded-xl p-3.5 ml-0 max-w-[90%]"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25 }}
                        >
                            <ul className="space-y-1.5">
                                {msg.items.map((item, j) => (
                                    <li key={j} className="flex items-center gap-2 text-xs text-gray-700">
                                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    );
                    return null;
                })}

                {/* Typing indicator */}
                {typing && (
                    <motion.div
                        className="flex"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1">
                            {[0, 1, 2].map(i => (
                                <motion.div
                                    key={i}
                                    className="w-1.5 h-1.5 rounded-full bg-gray-400"
                                    animate={{ y: [0, -4, 0] }}
                                    transition={{ duration: 0.6, delay: i * 0.15, repeat: Infinity }}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>

            {/* Input bar */}
            <div className="px-4 py-3 border-t border-gray-100">
                <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl">
                    <span className="text-xs text-gray-400 flex-1">Ask about visas, permits, documents...</span>
                    <div className="w-6 h-6 rounded-lg bg-indigo-600 flex items-center justify-center flex-shrink-0">
                        <RxArrowRight className="text-white" size={12} />
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ─── Problems ──────────────────────────────────────────────────────────── */
const PROBLEMS = [
    { problem: 'Manual processes that cannot scale', solution: 'AI automation that handles volume without adding headcount' },
    { problem: 'Data sitting unused in spreadsheets', solution: 'Systems that turn that data into decisions and actions' },
    { problem: 'Customer enquiries overwhelming your team', solution: 'Intelligent agents that handle routine communication around the clock' },
    { problem: 'Software that does not fit your workflow', solution: 'Custom applications built around how your business actually works' },
];

function ProblemsAccordion() {
    const [open, setOpen] = useState(null);
    return (
        <div className="divide-y divide-gray-100 rounded-2xl border border-gray-200 overflow-hidden bg-white">
            {PROBLEMS.map((item, i) => (
                <div key={i}>
                    <button
                        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                        onClick={() => setOpen(open === i ? null : i)}
                    >
                        <span className="font-medium text-gray-900 text-[15px]">{item.problem}</span>
                        <motion.span
                            className="flex-shrink-0 w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-gray-400"
                            animate={{ rotate: open === i ? 45 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                                <path d="M5 0v10M0 5h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </motion.span>
                    </button>
                    <AnimatePresence>
                        {open === i && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                                className="overflow-hidden"
                            >
                                <div className="px-6 pb-5 flex items-start gap-3">
                                    <RxCheckCircled className="text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <p className="text-sm text-gray-600 leading-relaxed">{item.solution}</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}

/* ─── Page ──────────────────────────────────────────────────────────────── */
const Home = () => (
    <>
        <HeroSection />

        {/* LoopedAI showcase */}
        <section className="py-20 sm:py-24 lg:py-28 bg-[#0a0e1a] relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10"
                    style={{ background: 'radial-gradient(circle at top right, #6366f1, transparent 60%)' }} />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-10"
                    style={{ background: 'radial-gradient(circle at bottom left, #3b82f6, transparent 60%)' }} />
                <div className="absolute inset-0 opacity-[0.025]"
                    style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '32px 32px' }} />
            </div>

            <div className="container-main relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/8 border border-white/15 mb-5">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                            <span className="text-xs font-medium text-indigo-300">Built by Jargs Cormark</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight mb-4">
                            LoopedAI
                        </h2>
                        <p className="text-lg text-indigo-100 mb-4 leading-relaxed">
                            An AI immigration intelligence system we designed and deployed. It reads
                            official government portals in real time, builds exact document checklists,
                            and reviews files before submission across 190 countries.
                        </p>
                        <p className="text-sm text-indigo-300 mb-7 leading-relaxed">
                            This is an example of the kind of AI product we build for clients.
                            If your business needs something similar, we can build it for you.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <a href="https://www.loopedai.io" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-indigo-700 font-semibold text-sm hover:bg-indigo-50 transition-all shadow-md">
                                Visit loopedai.io <RxArrowTopRight size={14} />
                            </a>
                            <Link to="/looped-ai"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white font-medium text-sm hover:bg-white/15 transition-all">
                                See how we built it <RxArrowRight size={14} />
                            </Link>
                        </div>
                    </div>

                    <ChatDemo />
                </div>
            </div>
        </section>

        {/* Services showcase */}
        <section className="py-20 sm:py-24 lg:py-28 bg-white">
            <div className="container-main">
                <div className="mb-10">
                    <div className="w-8 h-0.5 bg-indigo-600 rounded-full mb-4" />
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-3">What we build</h2>
                    <p className="text-gray-500 text-lg max-w-xl">
                        Engineering-led. We design, build, and deploy. We do not just advise.
                    </p>
                </div>
                <ServicesShowcase />
            </div>
        </section>

        {/* Problems accordion */}
        <section className="py-20 sm:py-24 bg-gray-50">
            <div className="container-main">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    <div>
                        <div className="w-8 h-0.5 bg-indigo-600 rounded-full mb-4" />
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                            Problems we solve
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed">
                            AI works best applied to specific, well-defined problems.
                            These are the ones our clients bring to us most often.
                        </p>
                    </div>
                    <ProblemsAccordion />
                </div>
            </div>
        </section>

        {/* Why us */}
        <section className="py-20 sm:py-24 bg-white">
            <div className="container-main">
                <div className="max-w-2xl">
                    <div className="w-8 h-0.5 bg-indigo-600 rounded-full mb-4" />
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                        Results, not promises
                    </h2>
                    <p className="text-gray-500 text-lg mb-7 leading-relaxed">
                        We are an AI consulting firm. We help businesses integrate AI into their
                        operations — through strategy, automation, custom software, and deployment.
                        We build things that run in production, not prototypes that never ship.
                    </p>
                    <ul className="space-y-4">
                        {[
                            'We focus on production systems, not proofs of concept',
                            'We serve businesses of all sizes across any industry',
                            'We are engineers first and we build what we recommend',
                            'We will tell you honestly if a simpler solution would work better',
                        ].map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <RxCheckCircled className="text-indigo-600 text-xs" />
                                </div>
                                <span className="text-[15px] text-gray-600">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>

        <CTASection
            title="Ready to talk about your project?"
            subtitle="Tell us about your challenge. We will tell you honestly whether we can help and how."
            primaryCta={{ text: 'Book a consultation', to: '/book-consultation' }}
            secondaryCta={{ text: 'View case studies', to: '/case-studies' }}
        />
    </>
);

export default Home;
