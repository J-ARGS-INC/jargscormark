import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RxArrowRight, RxCheckCircled } from 'react-icons/rx';
import {
    HiOutlinePhone,
    HiOutlineLightningBolt,
    HiOutlineCube,
    HiOutlineGlobeAlt,
    HiOutlineCode,
    HiOutlineLightBulb,
    HiOutlineTemplate,
    HiOutlineArrowRight,
} from 'react-icons/hi';

import CTASection from '../components/sections/CTASection';
import PageHero from '../components/sections/PageHero';

const services = [
    {
        id: 'consulting',
        icon: HiOutlineLightBulb,
        title: 'AI Consulting',
        tagline: 'Start with strategy',
        description: 'We map your operations, surface the right AI opportunities, and give you a concrete plan. Not a slide deck — a prioritised list of what to build and why, with realistic timelines.',
        deliverables: [
            'AI opportunity assessment across your workflow',
            'Tool and platform recommendations with rationale',
            'Phased implementation roadmap',
            'Team training and change management support',
            'Ongoing advisory access',
        ],
        tools: ['Strategy', 'Assessment', 'Training'],
        idealFor: ['Executive teams', 'Operations leaders', 'Companies evaluating AI readiness'],
    },
    {
        id: 'automation',
        icon: HiOutlineLightningBolt,
        title: 'AI Automation',
        tagline: 'Remove the manual work',
        description: 'We identify the repetitive work in your operations and automate it end-to-end. Your team stops handling what a workflow can do and focuses on what actually needs them.',
        deliverables: [
            'Process audit and workflow mapping',
            'Custom automation builds using n8n and Make',
            'Multi-tool integrations and data sync',
            'Error handling, monitoring, and alerting',
            'Documentation and team training',
        ],
        tools: ['n8n', 'Make', 'Zapier'],
        idealFor: ['Operations teams', 'Finance and admin', 'Sales and marketing'],
    },
    {
        id: 'software',
        icon: HiOutlineCode,
        title: 'Custom Software',
        tagline: 'Built around your workflow',
        description: 'We build applications designed around your exact requirements. Admin portals, customer-facing apps, dashboards — integrated with the systems you already use, not forced to fit a template.',
        deliverables: [
            'Web application design and development',
            'Admin dashboards and internal tools',
            'API development and third-party integrations',
            'Database architecture and optimisation',
            'Ongoing maintenance and support',
        ],
        tools: ['React', 'Node.js', 'PostgreSQL', 'Python'],
        idealFor: ['Growing businesses', 'Companies replacing legacy tools', 'Teams with unique processes'],
    },
    {
        id: 'websites',
        icon: HiOutlineTemplate,
        title: 'Website Building',
        tagline: 'Sites that convert',
        description: 'We build fast, well-designed websites that reflect the quality of your business and convert visitors into leads. Clean code, good performance, and integrated with your tools.',
        deliverables: [
            'Design, copywriting, and full development',
            'CMS setup so your team can manage content',
            'Lead capture, forms, and analytics',
            'Performance optimisation and SEO foundation',
            'Deployment and hosting configuration',
        ],
        tools: ['React', 'Next.js', 'Tailwind CSS'],
        idealFor: ['Professional services firms', 'Startups', 'Businesses outgrowing their current site'],
    },
    {
        id: 'mcp',
        icon: HiOutlineCube,
        title: 'MCP Integration',
        tagline: 'Connect AI to your data',
        description: 'We implement Model Context Protocol to give AI agents secure, structured access to your databases, APIs, and internal tools — enabling automation that understands your actual business context.',
        deliverables: [
            'MCP server setup and configuration',
            'Database and API connections',
            'Custom tool and resource development',
            'Security and access controls',
            'Agent orchestration and workflow design',
        ],
        tools: ['MCP', 'Claude', 'OpenAI'],
        idealFor: ['Tech-forward companies', 'Enterprise teams', 'SaaS businesses with complex data'],
    },
    {
        id: 'voice-agents',
        icon: HiOutlinePhone,
        title: 'AI Voice Agents',
        tagline: 'Calls handled automatically',
        description: 'We deploy voice agents that handle inbound and outbound calls around the clock — qualifying leads, booking appointments, and following up. Your team takes over only when a human is genuinely needed.',
        deliverables: [
            'Custom voice agent trained on your business',
            'Lead qualification logic and scoring',
            'Appointment booking and calendar integration',
            'CRM sync and call recording',
            'Analytics dashboard with call metrics',
        ],
        tools: ['VAPI', 'Make', 'GoHighLevel'],
        idealFor: ['Real estate agencies', 'Healthcare practices', 'Home services', 'Sales teams'],
    },
];

const processSteps = [
    { num: '01', title: 'Discovery', description: 'We map your current processes, understand the constraints, and confirm where AI will have the most measurable impact.' },
    { num: '02', title: 'Design', description: 'We architect the solution, define success metrics, and agree on deliverables before any development starts.' },
    { num: '03', title: 'Build and deploy', description: 'We build, test, and go live. Most engagements are in production within 2 to 4 weeks.' },
    { num: '04', title: 'Monitor and improve', description: 'We stay involved after launch to monitor performance, fix issues, and tune the system until it runs correctly.' },
];

function ServiceDetail({ svc }) {
    return (
        <div>
            <p className="text-xs font-semibold text-indigo-500 uppercase tracking-widest mb-2">{svc.tagline}</p>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{svc.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">{svc.description}</p>
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2.5">What we deliver</p>
            <ul className="space-y-2 mb-5">
                {svc.deliverables.map(d => (
                    <li key={d} className="flex items-start gap-2">
                        <RxCheckCircled className="text-indigo-500 mt-0.5 flex-shrink-0 text-xs" />
                        <span className="text-sm text-gray-600">{d}</span>
                    </li>
                ))}
            </ul>
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                    {svc.tools.map(t => (
                        <span key={t} className="px-2 py-1 rounded-lg bg-gray-100 text-xs font-medium text-gray-500">{t}</span>
                    ))}
                </div>
                <Link to="/book-consultation"
                    className="flex-shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600">
                    Get started <RxArrowRight size={13} />
                </Link>
            </div>
        </div>
    );
}

function ServiceTabs() {
    const [active, setActive] = useState(0);
    const [mobileOpen, setMobileOpen] = useState(null);

    return (
        <>
            {/* Mobile accordion */}
            <div className="lg:hidden rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm divide-y divide-gray-100">
                {services.map((s, i) => (
                    <div key={s.id}>
                        <button
                            onClick={() => setMobileOpen(mobileOpen === i ? null : i)}
                            className={`w-full text-left px-4 py-4 flex items-center gap-3 transition-colors ${mobileOpen === i ? 'bg-indigo-50' : 'active:bg-gray-50'}`}
                        >
                            <span className={`flex-shrink-0 ${mobileOpen === i ? 'text-indigo-600' : 'text-gray-400'}`}>
                                <s.icon size={18} />
                            </span>
                            <span className={`text-sm font-medium flex-1 ${mobileOpen === i ? 'text-indigo-700' : 'text-gray-700'}`}>{s.title}</span>
                            <motion.span animate={{ rotate: mobileOpen === i ? 45 : 0 }} transition={{ duration: 0.2 }} className="flex-shrink-0 text-gray-400">
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
                        {services.map((s, i) => (
                            <button
                                key={s.id}
                                onClick={() => setActive(i)}
                                className={`w-full text-left px-5 py-4 flex items-center gap-3 border-b border-gray-100 last:border-b-0 transition-all duration-150 group ${
                                    active === i
                                        ? 'bg-white border-l-2 border-l-indigo-600 text-indigo-700'
                                        : 'hover:bg-white/60 text-gray-500 hover:text-gray-800 border-l-2 border-l-transparent'
                                }`}
                            >
                                <span className={`flex-shrink-0 ${active === i ? 'text-indigo-600' : 'text-gray-400 group-hover:text-gray-600'}`}>
                                    <s.icon size={17} />
                                </span>
                                <span className="text-sm font-medium">{s.title}</span>
                                {active === i && (
                                    <motion.span layoutId="arrow" className="ml-auto text-indigo-400">
                                        <HiOutlineArrowRight size={14} />
                                    </motion.span>
                                )}
                            </button>
                        ))}
                    </div>
                    <div className="lg:col-span-3 p-9 min-h-[420px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0, x: 12 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -12 }}
                                transition={{ duration: 0.22 }}
                            >
                                <ServiceDetail svc={services[active]} />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </>
    );
}

const Services = () => (
    <>
        <PageHero
            eyebrow="Services"
            title="What we build"
            accent="for your business"
            description="AI consulting, automation, custom software, websites, and voice agents. We design, build, and deploy — we do not just advise."
        />

        {/* Interactive services */}
        <section className="py-20 sm:py-24 bg-white">
            <div className="container-main">
                <div className="mb-10">
                    <div className="w-8 h-0.5 bg-indigo-600 rounded-full mb-4" />
                    <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">Our services</h2>
                    <p className="text-gray-500">Select a service to see what we deliver.</p>
                </div>
                <ServiceTabs />
            </div>
        </section>

        {/* Process */}
        <section className="py-20 sm:py-24 bg-gray-50 border-y border-gray-100">
            <div className="container-main">
                <div className="mb-10">
                    <div className="w-8 h-0.5 bg-indigo-600 rounded-full mb-4" />
                    <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">How we work</h2>
                    <p className="text-gray-500 max-w-lg">Four steps from first conversation to a running system.</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {processSteps.map((step, i) => (
                        <motion.div
                            key={step.num}
                            className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-indigo-100 hover:shadow-sm transition-all"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.4 }}
                        >
                            <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white text-xs font-bold flex items-center justify-center mb-4">
                                {i + 1}
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8">
                    <Link to="/consulting-process"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors">
                        Read our full process <RxArrowRight size={14} />
                    </Link>
                </div>
            </div>
        </section>

        {/* Why us */}
        <section className="py-20 sm:py-24 bg-white">
            <div className="container-main">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div>
                        <div className="w-8 h-0.5 bg-indigo-600 rounded-full mb-4" />
                        <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-5">Why clients choose us</h2>
                        <div className="space-y-5">
                            {[
                                { title: 'We deploy, we do not just advise', body: 'Every recommendation we make is something we can build and deliver ourselves.' },
                                { title: 'Production systems, not prototypes', body: 'We build things that run in production daily. Not experiments that get handed over unfinished.' },
                                { title: 'Honest about what works', body: 'If AI is not the right solution for your problem, we will tell you. Our goal is to solve problems, not sell technology.' },
                                { title: 'End to end, including support', body: 'We stay involved after launch. Most clients have us on retainer to monitor, improve, and extend the systems we build.' },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    className="flex items-start gap-4"
                                    initial={{ opacity: 0, x: -12 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                >
                                    <div className="w-5 h-5 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <RxCheckCircled className="text-indigo-600 text-xs" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 text-[15px] mb-0.5">{item.title}</p>
                                        <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-6">Tools we work with</p>
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { name: 'VAPI', label: 'Voice AI' },
                                { name: 'n8n', label: 'Automation' },
                                { name: 'MCP', label: 'AI Integration' },
                                { name: 'Make', label: 'Automation' },
                                { name: 'OpenAI', label: 'Language AI' },
                                { name: 'React', label: 'Frontend' },
                                { name: 'GoHighLevel', label: 'CRM' },
                                { name: 'PostgreSQL', label: 'Database' },
                            ].map((t, i) => (
                                <motion.div
                                    key={t.name}
                                    className="bg-white border border-gray-100 rounded-xl px-4 py-3 hover:border-indigo-100 transition-colors"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <p className="font-semibold text-gray-800 text-sm">{t.name}</p>
                                    <p className="text-xs text-gray-400">{t.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <CTASection
            title="Ready to start?"
            subtitle="Tell us what you need. We will confirm whether we are the right fit and what we would build."
            primaryCta={{ text: 'Book a consultation', to: '/book-consultation' }}
            secondaryCta={{ text: 'View case studies', to: '/case-studies' }}
        />
    </>
);

export default Services;
