import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RxArrowRight, RxCheckCircled } from 'react-icons/rx';
import {
    HiOutlineLightningBolt,
    HiOutlineGlobe,
    HiOutlineShieldCheck,
    HiOutlineRefresh,
} from 'react-icons/hi';

import CTASection from '../components/sections/CTASection';
import PageHero from '../components/sections/PageHero';

const values = [
    {
        icon: HiOutlineShieldCheck,
        title: 'Production systems, not prototypes',
        description: 'Everything we build is designed to run reliably in production from day one. We do not hand over experiments.',
    },
    {
        icon: HiOutlineLightningBolt,
        title: 'Fast time to value',
        description: 'We use proven tools rather than building from scratch. Most engagements are live within two to four weeks.',
    },
    {
        icon: HiOutlineGlobe,
        title: 'Honest about what works',
        description: 'We tell clients when AI is not the right solution. Our goal is to solve the actual problem, not sell technology.',
    },
    {
        icon: HiOutlineRefresh,
        title: 'Ongoing, not one-off',
        description: 'We stay involved after launch to monitor, improve, and extend what we build. Most clients keep us on retainer.',
    },
];

const expertise = [
    {
        category: 'Technologies we deploy',
        items: ['VAPI Voice Agents', 'n8n Workflow Automation', 'MCP Integration', 'GoHighLevel CRM', 'OpenAI and Claude APIs', 'React and Node.js'],
    },
    {
        category: 'Problems we solve',
        items: ['Lead qualification and booking', 'Manual data entry and repetitive tasks', 'Disconnected tools and systems', 'Slow customer response times', 'Inconsistent follow-up', 'Scaling without adding headcount'],
    },
    {
        category: 'Industries we serve',
        items: ['Real Estate', 'Healthcare', 'Home Services', 'Professional Services', 'E-commerce', 'SaaS and Technology'],
    },
];

const partners = [
    {
        title: 'Marketing agencies',
        description: 'Add AI lead generation and automation to your service offering. We handle the technical delivery.',
    },
    {
        title: 'Business consultants',
        description: 'Partner with us to deliver AI automation for your clients. We do the build, you manage the relationship.',
    },
    {
        title: 'Technology integrators',
        description: 'Extend your capabilities with voice agents, workflow automation, and MCP integrations.',
    },
];

const About = () => (
    <>
        <PageHero
            eyebrow="About"
            title="We build the AI systems"
            accent="that run your business"
            description="Jargs Cormark is an AI consulting firm. We help businesses integrate AI into their operations through consulting, automation, custom software, and website development. We also built LoopedAI, an AI immigration intelligence platform covering 190 countries."
        />

        {/* Values */}
        <section className="py-20 sm:py-24 bg-white">
            <div className="container-main">
                <div className="mb-10">
                    <div className="w-8 h-0.5 bg-indigo-600 rounded-full mb-4" />
                    <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">How we approach the work</h2>
                    <p className="text-gray-500 max-w-lg">Four principles that shape every engagement we take on.</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {values.map((v, i) => (
                        <motion.div
                            key={v.title}
                            className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-indigo-100 hover:shadow-sm transition-all"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                        >
                            <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-4">
                                <v.icon className="text-indigo-600" size={18} />
                            </div>
                            <h3 className="font-semibold text-gray-900 text-[15px] mb-2">{v.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* Expertise */}
        <section className="py-20 sm:py-24 bg-gray-50 border-y border-gray-100">
            <div className="container-main">
                <div className="mb-10">
                    <div className="w-8 h-0.5 bg-indigo-600 rounded-full mb-4" />
                    <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">What we actually do</h2>
                    <p className="text-gray-500">The technologies, problems, and industries we have real experience with.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-5">
                    {expertise.map((section, i) => (
                        <motion.div
                            key={section.category}
                            className="bg-white rounded-2xl border border-gray-100 p-6"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-4">{section.category}</p>
                            <ul className="space-y-3">
                                {section.items.map(item => (
                                    <li key={item} className="flex items-start gap-2.5">
                                        <RxCheckCircled className="text-indigo-500 mt-0.5 flex-shrink-0 text-sm" />
                                        <span className="text-sm text-gray-600">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* LoopedAI callout */}
        <section className="py-20 sm:py-24 bg-white">
            <div className="container-main">
                <div className="rounded-2xl bg-[#0a0e1a] p-10 sm:p-14 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-10"
                        style={{ background: 'radial-gradient(circle at top right, #6366f1, transparent 60%)' }} />
                    <div className="relative z-10 max-w-xl">
                        <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">Case study</p>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">We built LoopedAI</h3>
                        <p className="text-indigo-200 text-base leading-relaxed mb-7">
                            LoopedAI is an AI immigration intelligence platform we designed and deployed.
                            It reads official government portals in real time, reviews documents before submission,
                            and sends daily briefings via Telegram. 190 countries covered. This is an example
                            of the kind of AI product we can build for your business.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <a href="https://www.loopedai.io" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-indigo-700 font-semibold text-sm hover:bg-indigo-50 transition-all">
                                Visit loopedai.io <RxArrowRight size={14} />
                            </a>
                            <Link to="/looped-ai"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white font-medium text-sm hover:bg-white/15 transition-all">
                                See how we built it
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Partners */}
        <section className="py-20 sm:py-24 bg-gray-50 border-t border-gray-100">
            <div className="container-main">
                <div className="mb-10">
                    <div className="w-8 h-0.5 bg-indigo-600 rounded-full mb-4" />
                    <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">Partner with us</h2>
                    <p className="text-gray-500 max-w-lg">We work with agencies, consultants, and technology partners who want to deliver AI services to their clients.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-5 mb-8">
                    {partners.map((p, i) => (
                        <motion.div
                            key={p.title}
                            className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-indigo-100 transition-colors"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <h3 className="font-semibold text-gray-900 mb-2">{p.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{p.description}</p>
                        </motion.div>
                    ))}
                </div>
                <Link to="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors">
                    Get in touch to explore partnership opportunities <RxArrowRight size={14} />
                </Link>
            </div>
        </section>

        <CTASection
            title="Ready to work together?"
            subtitle="Tell us about your challenge. We will tell you honestly whether we can help and what we would build."
            primaryCta={{ text: 'Book a consultation', to: '/book-consultation' }}
            secondaryCta={{ text: 'View services', to: '/services' }}
        />
    </>
);

export default About;
