import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RxCheckCircled, RxArrowRight, RxArrowLeft } from 'react-icons/rx';
import { 
  HiOutlineCalendar,
  HiOutlineBriefcase,
  HiOutlineClipboardCheck,
  HiOutlineShieldCheck
} from 'react-icons/hi';

import Section from '../components/layout/Section';

const serviceOptions = [
  { id: 'strategy', label: 'AI Strategy & Roadmap', description: 'Identify AI opportunities in your business' },
  { id: 'automation', label: 'Process Automation', description: 'Automate manual, repetitive tasks' },
  { id: 'analytics', label: 'Predictive Analytics', description: 'Turn data into predictions' },
  { id: 'chatbot', label: 'Conversational AI', description: 'Customer service automation' },
  { id: 'custom', label: 'Custom Development', description: 'Tailored AI solutions' },
  { id: 'unsure', label: 'Not sure yet', description: 'Help me identify the right approach' },
];

const timeSlots = [
  { id: '9am', label: '9:00 AM' },
  { id: '10am', label: '10:00 AM' },
  { id: '11am', label: '11:00 AM' },
  { id: '2pm', label: '2:00 PM' },
  { id: '3pm', label: '3:00 PM' },
  { id: '4pm', label: '4:00 PM' },
];

const BookConsultation = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Service
    service: '',
    // Step 2: Business Info
    name: '',
    email: '',
    company: '',
    role: '',
    employees: '',
    challenge: '',
    // Step 3: Schedule
    date: '',
    time: '',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceSelect = (serviceId) => {
    setFormData({ ...formData, service: serviceId });
  };

  const handleTimeSelect = (timeId) => {
    setFormData({ ...formData, time: timeId });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  // Generate next 14 days for date selection
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push({
          value: date.toISOString().split('T')[0],
          label: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
        });
      }
    }
    return dates.slice(0, 10);
  };

  if (isSubmitted) {
    return (
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-mesh" />
        <div className="container-main relative z-10">
          <motion.div
            className="max-w-xl mx-auto text-center card-elevated p-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="w-16 h-16 bg-accent-100 dark:bg-accent-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <RxCheckCircled className="text-accent-600 text-3xl" />
            </div>
            <h1 className="text-headline mb-4">Consultation Scheduled</h1>
            <p className="text-body-lg mb-6">
              Your consultation is confirmed for{' '}
              <span className="font-semibold text-gray-900 dark:text-white">
                {getAvailableDates().find(d => d.value === formData.date)?.label}
              </span>{' '}
              at{' '}
              <span className="font-semibold text-gray-900 dark:text-white">
                {timeSlots.find(t => t.id === formData.time)?.label}
              </span>.
            </p>
            <p className="text-muted mb-8">
              We have sent a calendar invite to <span className="font-medium">{formData.email}</span>.
              You will receive a reminder 24 hours before.
            </p>
            <div className="card-subtle p-6 text-left">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">What to prepare:</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <RxCheckCircled className="text-primary-600 mt-0.5 flex-shrink-0" />
                  <span>A clear description of the business challenge</span>
                </li>
                <li className="flex items-start gap-2">
                  <RxCheckCircled className="text-primary-600 mt-0.5 flex-shrink-0" />
                  <span>Overview of your current data and systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <RxCheckCircled className="text-primary-600 mt-0.5 flex-shrink-0" />
                  <span>Any questions you have about AI or our approach</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-8 md:pt-36 lg:pt-40 lg:pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        
        <div className="container-main relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h1
              className="text-display mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Book AI Consultation
            </motion.h1>
            <motion.p
              className="text-body-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              A 30-minute conversation to understand your challenge and explore how AI can help.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <Section size="small">
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex items-center justify-between">
            {[
              { num: 1, label: 'Select Service', icon: HiOutlineBriefcase },
              { num: 2, label: 'Your Details', icon: HiOutlineClipboardCheck },
              { num: 3, label: 'Schedule', icon: HiOutlineCalendar },
            ].map((s, i) => (
              <div key={s.num} className="flex items-center">
                <div className={`flex items-center gap-2 ${step >= s.num ? 'text-primary-600' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step > s.num 
                      ? 'bg-primary-600 text-white' 
                      : step === s.num 
                        ? 'bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300' 
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-400'
                  }`}>
                    {step > s.num ? <RxCheckCircled /> : s.num}
                  </div>
                  <span className="hidden sm:block text-sm font-medium">{s.label}</span>
                </div>
                {i < 2 && (
                  <div className={`w-12 sm:w-24 h-0.5 mx-2 ${step > s.num ? 'bg-primary-600' : 'bg-gray-200 dark:bg-gray-700'}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="card-elevated p-8"
          >
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <div>
                <h2 className="text-title mb-2">What are you looking for help with?</h2>
                <p className="text-muted mb-6">Select the area that best matches your needs.</p>
                
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {serviceOptions.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => handleServiceSelect(service.id)}
                      className={`text-left p-4 rounded-lg border-2 transition-all ${
                        formData.service === service.id
                          ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20'
                          : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                      }`}
                    >
                      <div className="font-medium text-gray-900 dark:text-white">{service.label}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{service.description}</div>
                    </button>
                  ))}
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!formData.service}
                    className="btn-primary"
                  >
                    Continue
                    <RxArrowRight />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Business Info */}
            {step === 2 && (
              <div>
                <h2 className="text-title mb-2">Tell us about your business</h2>
                <p className="text-muted mb-6">This helps us prepare for a productive conversation.</p>
                
                <div className="space-y-4 mb-8">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="label">Your Name *</label>
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
                      <label htmlFor="email" className="label">Work Email *</label>
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

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="label">Company *</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="input"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="role" className="label">Your Role</label>
                      <input
                        type="text"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="input"
                        placeholder="e.g., CTO, Operations Manager"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="employees" className="label">Company Size</label>
                    <select
                      id="employees"
                      name="employees"
                      value={formData.employees}
                      onChange={handleChange}
                      className="select"
                    >
                      <option value="">Select...</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-500">201-500 employees</option>
                      <option value="500+">500+ employees</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="challenge" className="label">
                      Briefly describe your challenge *
                    </label>
                    <textarea
                      id="challenge"
                      name="challenge"
                      value={formData.challenge}
                      onChange={handleChange}
                      className="textarea"
                      rows="3"
                      placeholder="What problem are you trying to solve?"
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <button type="button" onClick={prevStep} className="btn-ghost">
                    <RxArrowLeft />
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!formData.name || !formData.email || !formData.company || !formData.challenge}
                    className="btn-primary"
                  >
                    Continue
                    <RxArrowRight />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Schedule */}
            {step === 3 && (
              <form onSubmit={handleSubmit}>
                <h2 className="text-title mb-2">Choose a time</h2>
                <p className="text-muted mb-6">
                  Select a date and time that works for you. All times shown in {formData.timezone}.
                </p>
                
                <div className="mb-6">
                  <label className="label">Select Date *</label>
                  <div className="grid grid-cols-5 gap-2">
                    {getAvailableDates().map((date) => (
                      <button
                        key={date.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, date: date.value })}
                        className={`p-2 text-center rounded-lg border text-sm transition-all ${
                          formData.date === date.value
                            ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                            : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-600 dark:text-gray-400'
                        }`}
                      >
                        {date.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <label className="label">Select Time *</label>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot.id}
                        type="button"
                        onClick={() => handleTimeSelect(slot.id)}
                        className={`p-2 text-center rounded-lg border text-sm transition-all ${
                          formData.time === slot.id
                            ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                            : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-600 dark:text-gray-400'
                        }`}
                      >
                        {slot.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="card-subtle p-4 mb-6">
                  <div className="flex items-start gap-3">
                    <HiOutlineShieldCheck className="text-primary-600 text-xl flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-medium text-gray-900 dark:text-white">No obligation.</span>{' '}
                      This is a discovery call to understand your needs. We will be honest about whether we can help.
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button type="button" onClick={prevStep} className="btn-ghost">
                    <RxArrowLeft />
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={!formData.date || !formData.time || isSubmitting}
                    className="btn-primary"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Confirming...
                      </>
                    ) : (
                      <>
                        Confirm Consultation
                        <RxCheckCircled />
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

export default BookConsultation;
