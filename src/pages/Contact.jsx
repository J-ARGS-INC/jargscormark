import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RxArrowRight, RxCheckCircled } from 'react-icons/rx';
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlineCalendar } from 'react-icons/hi';
import { FaLinkedin } from 'react-icons/fa';

import Section from '../components/layout/Section';
import PageHero from '../components/sections/PageHero';

const contactMethods = [
    {
        icon: HiOutlineCalendar,
        title: 'Book a consultation',
        description: 'A 30-minute call to talk through your project. No obligation.',
        action: { text: 'Book time', to: '/book-consultation' },
    },
    {
        icon: HiOutlineMail,
        title: 'Email us',
        description: 'info@jargscormark.com',
        action: { text: 'Send email', href: 'mailto:info@jargscormark.com' },
    },
    {
        icon: HiOutlineLocationMarker,
        title: 'Location',
        description: 'United Kingdom',
        action: null,
    },
];

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || '550cfcff-a63e-464f-a133-5da7abd2074b';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', company: '', subject: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');
        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    access_key: WEB3FORMS_KEY,
                    subject: `Website Enquiry — ${formData.subject} from ${formData.name}`,
                    from_name: 'Jargs Cormark Website',
                    Name: formData.name,
                    Email: formData.email,
                    Company: formData.company,
                    Topic: formData.subject,
                    Message: formData.message,
                }),
            });
            const json = await res.json();
            if (json.success) {
                setIsSubmitted(true);
            } else {
                setError('Submission failed. Please email info@jargscormark.com directly.');
            }
        } catch {
            setError('Network error. Please email info@jargscormark.com directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <PageHero
                eyebrow="Contact"
                title="Get in touch"
                description="Whether you are exploring AI for your business, looking for a technology partner, or have a project in mind, we would welcome the conversation."
            />

            <Section size="small">
                {/* Contact method cards */}
                <div className="grid md:grid-cols-3 gap-5 mb-16">
                    {contactMethods.map((method, i) => (
                        <motion.div
                            key={method.title}
                            className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-indigo-100 hover:shadow-sm transition-all"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                                <method.icon size={20} />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-1">{method.title}</h3>
                            <p className="text-sm text-gray-500 mb-4">{method.description}</p>
                            {method.action && (
                                method.action.to ? (
                                    <Link to={method.action.to}
                                        className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors">
                                        {method.action.text} <RxArrowRight size={13} />
                                    </Link>
                                ) : (
                                    <a href={method.action.href}
                                        className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors">
                                        {method.action.text} <RxArrowRight size={13} />
                                    </a>
                                )
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Form + sidebar */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-4">Send us a message</h2>
                        <p className="text-gray-500 mb-6 leading-relaxed">
                            For general enquiries, partnership discussions, or questions about our services.
                            We typically respond within one business day.
                        </p>

                        <div className="space-y-5">
                            <div>
                                <p className="font-semibold text-gray-900 text-sm mb-1">Looking for a consultation?</p>
                                <p className="text-sm text-gray-500 mb-2">For project discussions, booking a consultation is the fastest route.</p>
                                <Link to="/book-consultation"
                                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
                                    Book a consultation <RxArrowRight size={13} />
                                </Link>
                            </div>
                            <div className="pt-4 border-t border-gray-100">
                                <p className="font-semibold text-gray-900 text-sm mb-2">Connect on LinkedIn</p>
                                <a href="https://linkedin.com/company/jargscormark" target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 transition-colors">
                                    <FaLinkedin size={16} />
                                    Follow Jargs Cormark
                                </a>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {isSubmitted ? (
                            <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center">
                                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <RxCheckCircled className="text-green-600 text-2xl" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Message sent</h3>
                                <p className="text-sm text-gray-500">Thank you for reaching out. We will respond within one business day.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm space-y-4">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="label">Name *</label>
                                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="input" required />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="label">Email *</label>
                                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="input" required />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="company" className="label">Company</label>
                                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="input" />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="label">Subject *</label>
                                    <select id="subject" name="subject" value={formData.subject} onChange={handleChange} className="select" required>
                                        <option value="">Select a topic...</option>
                                        <option value="services">AI Services Enquiry</option>
                                        <option value="partnership">Partnership Discussion</option>
                                        <option value="loopedai">LoopedAI</option>
                                        <option value="careers">Careers</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="label">Message *</label>
                                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="textarea" rows="4" required />
                                </div>
                                {error && (
                                    <div className="p-3 rounded-lg bg-red-50 border border-red-100 text-sm text-red-700">{error}</div>
                                )}
                                <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center">
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>Send message <RxArrowRight /></>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </Section>
        </>
    );
};

export default Contact;
