import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RxArrowRight } from 'react-icons/rx';

/* ── Cycling headline words ─────────────────────────────────────────────── */
const WORDS = ['automates your operations', 'handles your workflows', 'grows your business'];

function CyclingWord() {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const id = setInterval(() => setIndex(i => (i + 1) % WORDS.length), 2800);
        return () => clearInterval(id);
    }, []);
    return (
        <span className="relative inline-block overflow-hidden align-bottom" style={{ minWidth: '14ch' }}>
            <AnimatePresence mode="wait">
                <motion.span
                    key={index}
                    className="block bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent"
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    exit={{ y: '-100%', opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                    {WORDS[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
}

/* ── Mouse spotlight (desktop only) ────────────────────────────────────── */
function MouseSpotlight() {
    const ref = useRef(null);
    const mouseX = useMotionValue(-400);
    const mouseY = useMotionValue(-400);
    const springX = useSpring(mouseX, { damping: 30, stiffness: 200 });
    const springY = useSpring(mouseY, { damping: 30, stiffness: 200 });

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const onMove = (e) => {
            const rect = el.getBoundingClientRect();
            mouseX.set(e.clientX - rect.left);
            mouseY.set(e.clientY - rect.top);
        };
        const onLeave = () => { mouseX.set(-400); mouseY.set(-400); };
        el.addEventListener('mousemove', onMove);
        el.addEventListener('mouseleave', onLeave);
        return () => {
            el.removeEventListener('mousemove', onMove);
            el.removeEventListener('mouseleave', onLeave);
        };
    }, [mouseX, mouseY]);

    return (
        <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{
                    x: springX, y: springY,
                    translateX: '-50%', translateY: '-50%',
                    background: 'radial-gradient(circle, rgba(99,102,241,0.09) 0%, rgba(99,102,241,0.03) 40%, transparent 70%)',
                }}
            />
        </div>
    );
}

/* ── Animated AI workflow panel ─────────────────────────────────────────── */
const TASKS = [
    { id: 1, label: 'Lead qualification',  duration: 3200 },
    { id: 2, label: 'CRM update',          duration: 2400 },
    { id: 3, label: 'Follow-up email',     duration: 2800 },
    { id: 4, label: 'Appointment booked',  duration: 3600 },
    { id: 5, label: 'Report generated',    duration: 2600 },
];
const STATUS = { idle: 'idle', running: 'running', done: 'done' };

function TaskRow({ label, status, index }) {
    return (
        <motion.div
            className="flex items-center justify-between py-2.5 border-b border-white/8 last:border-0"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
        >
            <div className="flex items-center gap-2.5">
                <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                    status === STATUS.done    ? 'bg-green-400' :
                    status === STATUS.running ? 'bg-indigo-400 animate-pulse' : 'bg-white/20'
                }`} />
                <span className={`text-xs font-medium ${
                    status === STATUS.done    ? 'text-white/60 line-through' :
                    status === STATUS.running ? 'text-white' : 'text-white/30'
                }`}>
                    {label}
                </span>
            </div>
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                status === STATUS.done    ? 'bg-green-500/20 text-green-400' :
                status === STATUS.running ? 'bg-indigo-500/20 text-indigo-300' : 'bg-white/5 text-white/20'
            }`}>
                {status === STATUS.done ? 'Done' : status === STATUS.running ? 'Running' : 'Queue'}
            </span>
        </motion.div>
    );
}

function useAIPanel() {
    const [statuses, setStatuses] = useState(TASKS.map(() => STATUS.idle));
    const [completedCount, setCompletedCount] = useState(0);
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!visible) return;
        let cancelled = false;
        const runCycle = async () => {
            while (!cancelled) {
                setStatuses(TASKS.map(() => STATUS.idle));
                setCompletedCount(0);
                await delay(600);
                for (let i = 0; i < TASKS.length; i++) {
                    if (cancelled) return;
                    setStatuses(prev => prev.map((s, j) => j === i ? STATUS.running : s));
                    await delay(TASKS[i].duration);
                    if (cancelled) return;
                    setStatuses(prev => prev.map((s, j) => j === i ? STATUS.done : s));
                    setCompletedCount(i + 1);
                    await delay(300);
                }
                await delay(1800);
            }
        };
        runCycle();
        return () => { cancelled = true; };
    }, [visible]);

    return { ref, statuses, completedCount, progress: Math.round((completedCount / TASKS.length) * 100) };
}

function AIPanel({ compact = false }) {
    const { ref, statuses, completedCount, progress } = useAIPanel();

    if (compact) {
        return (
            <div ref={ref} className="rounded-xl bg-gray-50 border border-gray-200 p-4">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                        <motion.div
                            className="w-2 h-2 rounded-full bg-green-500"
                            animate={{ opacity: [1, 0.4, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="text-xs font-semibold text-gray-600">AI running your operations</span>
                    </div>
                    <span className="text-[10px] font-bold text-indigo-600">{progress}%</span>
                </div>
                <div className="space-y-2 mb-3">
                    {TASKS.slice(0, 4).map((task, i) => (
                        <div key={task.id} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                                    statuses[i] === STATUS.done    ? 'bg-green-500' :
                                    statuses[i] === STATUS.running ? 'bg-indigo-500 animate-pulse' : 'bg-gray-300'
                                }`} />
                                <span className={`text-xs ${
                                    statuses[i] === STATUS.done    ? 'text-gray-400 line-through' :
                                    statuses[i] === STATUS.running ? 'text-gray-800 font-medium' : 'text-gray-400'
                                }`}>{task.label}</span>
                            </div>
                            <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${
                                statuses[i] === STATUS.done    ? 'bg-green-50 text-green-600' :
                                statuses[i] === STATUS.running ? 'bg-indigo-50 text-indigo-600' : 'text-gray-300'
                            }`}>
                                {statuses[i] === STATUS.done ? 'Done' : statuses[i] === STATUS.running ? 'Running' : ''}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-blue-400"
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                    />
                </div>
            </div>
        );
    }

    return (
        <motion.div
            ref={ref}
            className="relative w-full rounded-2xl overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
        >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/8">
                <div className="flex items-center gap-2">
                    <motion.div
                        className="w-2 h-2 rounded-full bg-green-400"
                        animate={{ opacity: [1, 0.4, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-xs font-semibold text-white/80">AI Automation</span>
                </div>
                <span className="text-[10px] text-white/35 font-medium">Live</span>
            </div>
            <div className="px-5 py-2">
                {TASKS.map((task, i) => (
                    <TaskRow key={task.id} label={task.label} status={statuses[i]} index={i} />
                ))}
            </div>
            <div className="px-5 py-3.5 border-t border-white/8">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-white/40 font-medium">{completedCount} of {TASKS.length} tasks completed</span>
                    <span className="text-[10px] font-bold text-indigo-400">{progress}%</span>
                </div>
                <div className="w-full h-1 bg-white/8 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-blue-400"
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                    />
                </div>
            </div>
        </motion.div>
    );
}

function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

const PILLS = ['AI Consulting', 'AI Automation', 'Custom Software', 'Websites', 'AI Voice Agents', 'LoopedAI'];

/* ── Hero ───────────────────────────────────────────────────────────────── */
const HeroSection = () => (
    <section className="relative bg-white overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400" />

        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 right-0 w-[700px] h-[700px] opacity-[0.05]"
                style={{ background: 'radial-gradient(circle at top right, #6366f1 0%, transparent 60%)' }} />
            <div className="absolute inset-0 opacity-[0.018]"
                style={{
                    backgroundImage: 'linear-gradient(to right,#6366f1 1px,transparent 1px),linear-gradient(to bottom,#6366f1 1px,transparent 1px)',
                    backgroundSize: '56px 56px',
                }} />
        </div>

        <MouseSpotlight />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center pt-28 pb-14 sm:pt-36 sm:pb-18 lg:pt-48 lg:pb-28">

                {/* Left — copy */}
                <div>
                    <motion.div
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-6"
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.span
                            className="w-1.5 h-1.5 rounded-full bg-indigo-500"
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="text-xs font-semibold text-indigo-700 tracking-wide">AI Consulting and Engineering</span>
                    </motion.div>

                    <motion.h1
                        className="text-[2.1rem] sm:text-5xl lg:text-[3.4rem] font-bold text-gray-950 leading-[1.1] tracking-tight mb-5"
                        initial={{ opacity: 0, y: 22 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                    >
                        AI that{' '}
                        <br className="hidden sm:block" />
                        <CyclingWord />
                    </motion.h1>

                    <motion.p
                        className="text-base sm:text-lg text-gray-500 mb-8 max-w-lg leading-relaxed"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.26 }}
                    >
                        Jargs Cormark helps businesses integrate AI into their operations.
                        We build AI systems, automation, custom software, and websites. We also built{' '}
                        <a href="https://www.loopedai.io" target="_blank" rel="noopener noreferrer"
                            className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
                            LoopedAI
                        </a>
                        , an AI immigration platform covering 190 countries.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-3 mb-8 sm:mb-10"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.38 }}
                    >
                        <Link to="/book-consultation"
                            className="group inline-flex items-center justify-center gap-2 px-6 py-4 sm:py-3.5 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 active:scale-[0.98] transition-all text-[15px] shadow-md shadow-indigo-200">
                            Book a consultation
                            <motion.span className="inline-flex"
                                animate={{ x: [0, 3, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1 }}>
                                <RxArrowRight size={16} />
                            </motion.span>
                        </Link>
                        <Link to="/services"
                            className="inline-flex items-center justify-center gap-2 px-6 py-4 sm:py-3.5 rounded-xl border border-gray-200 text-gray-700 font-medium hover:border-indigo-200 hover:text-indigo-700 hover:bg-indigo-50 active:scale-[0.98] transition-all text-[15px]">
                            View services
                        </Link>
                    </motion.div>

                    {/* Mobile: compact AI status card */}
                    <motion.div
                        className="lg:hidden mb-8"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <AIPanel compact />
                    </motion.div>

                    {/* Pills */}
                    <motion.div
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        {PILLS.map((s, i) => (
                            <motion.span key={s}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.62 + i * 0.06 }}
                                className="inline-flex items-center px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-500 hover:border-indigo-200 hover:text-indigo-600 hover:bg-indigo-50 cursor-default transition-colors">
                                {s}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>

                {/* Right — desktop animated panel */}
                <div className="hidden lg:flex flex-col gap-4">
                    <div className="rounded-2xl bg-[#0d1117] p-5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-48 h-48 opacity-20"
                            style={{ background: 'radial-gradient(circle at top right, #6366f1, transparent 65%)' }} />
                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-semibold text-white/60 uppercase tracking-widest">Your AI is running</span>
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                                </div>
                            </div>
                            <AIPanel />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        {[
                            { label: 'Tasks today', value: '47' },
                            { label: 'Response time', value: '<1s' },
                            { label: 'Uptime', value: '99.9%' },
                        ].map((item, i) => (
                            <motion.div key={item.label}
                                className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-center"
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 + i * 0.1 }}>
                                <div className="text-base font-bold text-gray-900">{item.value}</div>
                                <div className="text-[10px] text-gray-400 mt-0.5">{item.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
);

export default HeroSection;
