import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RxCheckCircled, RxArrowRight, RxArrowLeft } from 'react-icons/rx';
import { HiOutlineCalendar, HiOutlineBriefcase, HiOutlineClipboardCheck, HiOutlineShieldCheck } from 'react-icons/hi';
import Section from '../components/layout/Section';

const WEB3FORMS_KEY = '550cfcff-a63e-464f-a133-5da7abd2074b';

const serviceOptions = [
    { id: 'consulting',    label: 'AI Consulting',        description: 'Strategy and roadmap for AI in your business' },
    { id: 'ai-systems',   label: 'AI Systems / LoopedAI', description: 'Deploy an AI system to run your pipeline' },
    { id: 'automation',   label: 'AI Automation',         description: 'Automate manual, repetitive processes' },
    { id: 'software',     label: 'Custom Software',       description: 'Build tailored applications or internal tools' },
    { id: 'websites',     label: 'Website Building',      description: 'Professional website design and development' },
    { id: 'voice-agents', label: 'AI Voice Agents',       description: 'Automated phone agents for leads and bookings' },
    { id: 'unsure',       label: 'Not sure yet',          description: 'Help me identify the right approach' },
];

const timeSlots = [
    { id: '9am',  label: '9:00 AM' },
    { id: '10am', label: '10:00 AM' },
    { id: '11am', label: '11:00 AM' },
    { id: '2pm',  label: '2:00 PM' },
    { id: '3pm',  label: '3:00 PM' },
    { id: '4pm',  label: '4:00 PM' },
];

const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 21; i++) {
        const d = new Date(today);
        d.setDate(today.getDate() + i);
        if (d.getDay() !== 0 && d.getDay() !== 6) {
            dates.push({
                value: d.toISOString().split('T')[0],
                label: d.toLocaleDateString('en-GB', { weekday: 'short', month: 'short', day: 'numeric' }),
            });
        }
        if (dates.length === 10) break;
    }
    return dates;
};

const availableDates = getAvailableDates();

const STEPS = [
    { num: 1, label: 'Service',  icon: HiOutlineBriefcase },
    { num: 2, label: 'Details',  icon: HiOutlineClipboardCheck },
    { num: 3, label: 'Schedule', icon: HiOutlineCalendar },
];

const BookConsultation = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        service: '', name: '', email: '', company: '',
        role: '', employees: '', challenge: '', date: '', time: '',
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

    const serviceLabel = serviceOptions.find(s => s.id === formData.service)?.label ?? formData.service;
    const dateLabel    = availableDates.find(d => d.value === formData.date)?.label ?? formData.date;
    const timeLabel    = timeSlots.find(t => t.id === formData.time)?.label ?? formData.time;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');
        try {
            const data = new FormData();
            data.append('access_key', WEB3FORMS_KEY);
            data.append('subject', `Consultation Request - ${formData.name} (${formData.company || 'no company'})`);
            data.append('from_name', 'Jargs Cormark Website');
            data.append('replyto', formData.email);
            data.append('Service', serviceLabel);
            data.append('Name', formData.name);
            data.append('Email', formData.email);
            data.append('Company', formData.company);
            data.append('Role', formData.role);
            data.append('Company size', formData.employees);
            data.append('Challenge', formData.challenge);
            data.append('Preferred date', dateLabel);
            data.append('Preferred time', timeLabel);
            data.append('Timezone', formData.timezone);

            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: data,
            });
            const json = await res.json();
            if (json.success) {
                setSubmitted(true);
            } else {
                setError('Submission failed. Please email us directly at info@jargscormark.com');
            }
        } catch {
            setError('Network error. Please email us directly at info@jargscormark.com');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <section className="pt-32 pb-16 lg:pt-44 lg:pb-24 min-h-screen">
                <div className="container-main">
                    <motion.div
                        className="max-w-lg mx-auto bg-white rounded-2xl border border-gray-200 p-10 text-center shadow-sm"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
                            <RxCheckCircled className="text-green-600 text-2xl" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-3">Request received</h1>
                        <p className="text-gray-500 mb-6 leading-relaxed">
                            Your preferred time is{' '}
                            <span className="font-semibold text-gray-900">{dateLabel}</span> at{' '}
                            <span className="font-semibold text-gray-900">{timeLabel}</span>.
                            We will review your request and get back to you at{' '}
                            <span className="font-medium text-gray-700">{formData.email}</span>{' '}
                            within one business day to confirm.
                        </p>
                        <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 text-left">
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">To prepare</p>
                            <ul className="space-y-2.5">
                                {[
                                    'A clear description of the business challenge you want to solve',
                                    'An overview of your current tools, data, and team setup',
                                    'Any specific questions about AI or our approach',
                                ].map(item => (
                                    <li key={item} className="flex items-start gap-2.5">
                                        <RxCheckCircled className="text-indigo-500 mt-0.5 flex-shrink-0 text-sm" />
                                        <span className="text-sm text-gray-600">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <>
            <section className="pt-32 pb-8 md:pt-36 lg:pt-44 lg:pb-10 relative overflow-hidden bg-white">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400" />
                <div className="absolute inset-0 opacity-[0.018] pointer-events-none"
                    style={{ backgroundImage: 'linear-gradient(to right,#6366f1 1px,transparent 1px),linear-gradient(to bottom,#6366f1 1px,transparent 1px)', backgroundSize: '56px 56px' }} />
                <div className="container-main relative z-10 text-center">
                    <motion.h1
                        className="text-[2rem] sm:text-4xl font-bold text-gray-900 tracking-tight mb-3"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Book a consultation
                    </motion.h1>
                    <motion.p
                        className="text-gray-500 text-lg"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        A 30-minute call to understand your challenge. No obligation.
                    </motion.p>
                </div>
            </section>

            <Section size="small">
                {/* Progress bar */}
                <div className="max-w-2xl mx-auto mb-8">
                    <div className="flex items-center justify-between">
                        {STEPS.map((s, i) => (
                            <div key={s.num} className="flex items-center">
                                <div className={`flex items-center gap-2 ${step >= s.num ? 'text-indigo-600' : 'text-gray-400'}`}>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                                        step > s.num  ? 'bg-indigo-600 text-white' :
                                        step === s.num ? 'bg-indigo-50 border border-indigo-200 text-indigo-700' :
                                                         'bg-gray-100 text-gray-400'
                                    }`}>
                                        {step > s.num ? <RxCheckCircled /> : s.num}
                                    </div>
                                    <span className="hidden sm:block text-sm font-medium">{s.label}</span>
                                </div>
                                {i < 2 && <div className={`w-12 sm:w-20 h-px mx-2 transition-colors ${step > s.num ? 'bg-indigo-500' : 'bg-gray-200'}`} />}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="max-w-2xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 16 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -16 }}
                            transition={{ duration: 0.22 }}
                            className="bg-white rounded-2xl border border-gray-200 p-7 sm:p-9 shadow-sm"
                        >
                            {/* ── Step 1: Service ── */}
                            {step === 1 && (
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900 mb-1">What do you need help with?</h2>
                                    <p className="text-gray-400 text-sm mb-6">Select the area that best matches your situation.</p>
                                    <div className="grid sm:grid-cols-2 gap-2.5 mb-7">
                                        {serviceOptions.map(svc => (
                                            <button key={svc.id} type="button"
                                                onClick={() => setFormData(p => ({ ...p, service: svc.id }))}
                                                className={`text-left p-4 rounded-xl border-2 transition-all ${
                                                    formData.service === svc.id
                                                        ? 'border-indigo-500 bg-indigo-50'
                                                        : 'border-gray-200 hover:border-gray-300'
                                                }`}
                                            >
                                                <p className="font-medium text-gray-900 text-sm">{svc.label}</p>
                                                <p className="text-xs text-gray-500 mt-0.5">{svc.description}</p>
                                            </button>
                                        ))}
                                    </div>
                                    <div className="flex justify-end">
                                        <button onClick={() => setStep(2)} disabled={!formData.service} className="btn-primary">
                                            Continue <RxArrowRight />
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* ── Step 2: Details ── */}
                            {step === 2 && (
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900 mb-1">Tell us about your business</h2>
                                    <p className="text-gray-400 text-sm mb-6">This helps us prepare a useful conversation.</p>
                                    <div className="space-y-4 mb-7">
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div><label htmlFor="name" className="label">Your name *</label>
                                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="input" required /></div>
                                            <div><label htmlFor="email" className="label">Work email *</label>
                                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="input" required /></div>
                                        </div>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div><label htmlFor="company" className="label">Company *</label>
                                                <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="input" required /></div>
                                            <div><label htmlFor="role" className="label">Your role</label>
                                                <input type="text" id="role" name="role" value={formData.role} onChange={handleChange} className="input" placeholder="e.g. CEO, Operations Manager" /></div>
                                        </div>
                                        <div>
                                            <label htmlFor="employees" className="label">Company size</label>
                                            <select id="employees" name="employees" value={formData.employees} onChange={handleChange} className="select">
                                                <option value="">Select...</option>
                                                <option value="1-10">1–10 employees</option>
                                                <option value="11-50">11–50 employees</option>
                                                <option value="51-200">51–200 employees</option>
                                                <option value="201-500">201–500 employees</option>
                                                <option value="500+">500+ employees</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="challenge" className="label">Describe your challenge *</label>
                                            <textarea id="challenge" name="challenge" value={formData.challenge} onChange={handleChange} className="textarea" rows="3" placeholder="What problem are you trying to solve?" required />
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <button type="button" onClick={() => setStep(1)} className="btn-ghost"><RxArrowLeft /> Back</button>
                                        <button type="button" onClick={() => setStep(3)}
                                            disabled={!formData.name || !formData.email || !formData.company || !formData.challenge}
                                            className="btn-primary">Continue <RxArrowRight /></button>
                                    </div>
                                </div>
                            )}

                            {/* ── Step 3: Schedule ── */}
                            {step === 3 && (
                                <form onSubmit={handleSubmit}>
                                    <h2 className="text-xl font-bold text-gray-900 mb-1">Choose a time</h2>
                                    <p className="text-gray-400 text-sm mb-6">All times in {formData.timezone}.</p>

                                    <div className="mb-6">
                                        <label className="label">Preferred date *</label>
                                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                                            {availableDates.map(date => (
                                                <button key={date.value} type="button"
                                                    onClick={() => setFormData(p => ({ ...p, date: date.value, time: '' }))}
                                                    className={`p-3 text-center rounded-lg border text-xs transition-all ${
                                                        formData.date === date.value
                                                            ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                                                            : 'border-gray-200 hover:border-gray-300 text-gray-600'
                                                    }`}
                                                >{date.label}</button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mb-7">
                                        <label className="label">Preferred time *</label>
                                        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                                            {timeSlots.map(slot => (
                                                <button key={slot.id} type="button"
                                                    onClick={() => setFormData(p => ({ ...p, time: slot.id }))}
                                                    className={`p-2 text-center rounded-lg border text-sm transition-all ${
                                                        formData.time === slot.id
                                                            ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                                                            : 'border-gray-200 hover:border-gray-300 text-gray-600'
                                                    }`}
                                                >{slot.label}</button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 rounded-xl border border-gray-100 p-4 mb-6 flex items-start gap-3">
                                        <HiOutlineShieldCheck className="text-indigo-500 text-xl flex-shrink-0 mt-0.5" />
                                        <p className="text-sm text-gray-500">
                                            <span className="font-medium text-gray-700">No obligation.</span>{' '}
                                            This is a discovery call. We will confirm the time by email within one business day.
                                        </p>
                                    </div>

                                    {error && (
                                        <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-100 text-sm text-red-700">{error}</div>
                                    )}

                                    <div className="flex justify-between">
                                        <button type="button" onClick={() => setStep(2)} className="btn-ghost"><RxArrowLeft /> Back</button>
                                        <button type="submit" disabled={!formData.date || !formData.time || isSubmitting} className="btn-primary">
                                            {isSubmitting ? (
                                                <><svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                                                Sending...</>
                                            ) : (
                                                <>Send request <RxCheckCircled /></>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </Section>
        </>
    );
};

export default BookConsultation;
