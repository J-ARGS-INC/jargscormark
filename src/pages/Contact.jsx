import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RxArrowRight, RxCheckCircled } from 'react-icons/rx';
import { 
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineCalendar
} from 'react-icons/hi';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

import Section from '../components/layout/Section';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const contactMethods = [
    {
      icon: HiOutlineCalendar,
      title: 'Schedule a Consultation',
      description: 'Book a 30-minute conversation to discuss your AI needs.',
      action: { text: 'Book Time', to: '/book-consultation' },
    },
    {
      icon: HiOutlineMail,
      title: 'Email Us',
      description: 'hello@jargscormark.com',
      action: { text: 'Send Email', href: 'mailto:hello@jargscormark.com' },
    },
    {
      icon: HiOutlineLocationMarker,
      title: 'Location',
      description: 'Kigali, Rwanda • Remote-first team',
      action: null,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-32 md:pb-14 lg:pt-36 lg:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        
        <div className="container-main relative z-10">
          <div className="max-w-3xl">
            <motion.p
              className="text-primary-700 dark:text-primary-400 font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Contact
            </motion.p>
            
            <motion.h1
              className="text-display mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Get in touch
            </motion.h1>
            
            <motion.p
              className="text-body-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Whether you are exploring AI for your organization, seeking a technology 
              partner, or interested in investment opportunities, we would welcome the 
              conversation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <Section size="small">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              className="card-elevated p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="icon-box icon-box-md icon-box-primary mb-4">
                <method.icon size={22} />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                {method.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {method.description}
              </p>
              {method.action && (
                method.action.to ? (
                  <Link 
                    to={method.action.to} 
                    className="text-primary-700 dark:text-primary-400 text-sm font-medium hover:underline inline-flex items-center gap-1"
                  >
                    {method.action.text}
                    <RxArrowRight />
                  </Link>
                ) : (
                  <a 
                    href={method.action.href}
                    className="text-primary-700 dark:text-primary-400 text-sm font-medium hover:underline inline-flex items-center gap-1"
                  >
                    {method.action.text}
                    <RxArrowRight />
                  </a>
                )
              )}
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-headline mb-4">Send us a message</h2>
            <p className="text-body mb-6">
              Use this form for general inquiries, partnership discussions, or any 
              questions about our services. We typically respond within one business day.
            </p>
            
            <div className="space-y-4 text-sm">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Looking for a consultation?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  For project discussions, we recommend booking a consultation directly.
                </p>
                <Link 
                  to="/book-consultation" 
                  className="text-primary-700 dark:text-primary-400 font-medium hover:underline inline-flex items-center gap-1"
                >
                  Book AI Consultation
                  <RxArrowRight />
                </Link>
              </div>
              
              <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Connect on LinkedIn
                </h3>
                <a 
                  href="https://linkedin.com/company/jargscormark"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-700 dark:hover:text-primary-400 inline-flex items-center gap-2"
                >
                  <FaLinkedin size={18} />
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
              <div className="card-elevated p-8 text-center">
                <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <RxCheckCircled className="text-accent-600 text-2xl" />
                </div>
                <h3 className="text-title mb-2">Message Sent</h3>
                <p className="text-body">
                  Thank you for reaching out. We will respond within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-elevated p-6 sm:p-8">
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="label">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="input"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="label">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="label">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="input"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="label">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="select"
                      required
                    >
                      <option value="">Select a topic...</option>
                      <option value="services">AI Services Inquiry</option>
                      <option value="partnership">Partnership Discussion</option>
                      <option value="investment">Investment Inquiry</option>
                      <option value="careers">Careers</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="label">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="textarea"
                      rows="4"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <RxArrowRight />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Contact;
