import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RxArrowRight, RxCheckCircled } from 'react-icons/rx';

import Section from '../components/layout/Section';
import CTASection from '../components/sections/CTASection';
import PageHero from '../components/sections/PageHero';

// Case studies with measurable results
const caseStudies = [
  {
    id: 'bank-loan-processing',
    industry: 'Financial Services',
    client: 'Regional Bank',
    region: 'West Africa',
    title: 'Automated Loan Processing',
    challenge: 'Manual loan application review taking 3-5 days per application, limiting growth and frustrating customers. Credit officers spending 70% of time on administrative tasks instead of relationship building.',
    solution: 'Built an AI system that extracts data from application documents, validates against databases, calculates risk scores, and routes applications for appropriate review.',
    implementation: [
      'Document processing for IDs, pay slips, bank statements',
      'Integration with credit bureaus and internal systems',
      'Risk scoring model trained on historical loan performance',
      'Dashboard for credit officers to review flagged applications',
    ],
    results: [
      { metric: '85%', label: 'Reduction in processing time' },
      { metric: '40%', label: 'Increase in applications processed' },
      { metric: '25%', label: 'Reduction in default rate' },
      { metric: '3 months', label: 'Time to production' },
    ],
    testimonial: 'We went from processing 50 loans a day to over 200, with better credit decisions.',
  },
  {
    id: 'logistics-route-optimization',
    industry: 'Logistics',
    client: 'Distribution Company',
    region: 'East Africa',
    title: 'Intelligent Route Planning',
    challenge: 'Delivery routes planned manually each morning, not accounting for traffic, road conditions, or delivery time windows. Drivers averaging 60km/day more than necessary.',
    solution: 'Developed an AI-powered route optimization system that generates optimal routes daily, factoring in real-time conditions and business constraints.',
    implementation: [
      'Integration with traffic and mapping APIs',
      'Machine learning model for delivery time estimation',
      'Mobile app for drivers with turn-by-turn navigation',
      'Dashboard for dispatchers to monitor and adjust',
    ],
    results: [
      { metric: '22%', label: 'Reduction in fuel costs' },
      { metric: '18%', label: 'More deliveries per vehicle' },
      { metric: '35%', label: 'Improvement in on-time delivery' },
      { metric: '8 weeks', label: 'Time to production' },
    ],
    testimonial: 'The fuel savings alone paid for the system in 4 months.',
  },
  {
    id: 'retail-customer-service',
    industry: 'Retail',
    client: 'E-commerce Platform',
    region: 'Southern Africa',
    title: 'WhatsApp Customer Service Bot',
    challenge: 'Customer service team of 15 handling 2,000+ WhatsApp messages daily. Response times averaging 4 hours. Customers abandoning orders due to unanswered questions.',
    solution: 'Built a conversational AI assistant for WhatsApp that handles order tracking, product questions, returns, and payment issues with seamless handoff to human agents.',
    implementation: [
      'Natural language processing for customer intent',
      'Integration with order management and inventory systems',
      'Multilingual support (English, local languages)',
      'Escalation rules for complex issues',
    ],
    results: [
      { metric: '68%', label: 'Inquiries resolved without human' },
      { metric: '2 min', label: 'Average response time (from 4 hours)' },
      { metric: '15%', label: 'Increase in completed orders' },
      { metric: '6 weeks', label: 'Time to production' },
    ],
    testimonial: 'Customers now get answers immediately, and our team focuses on cases that actually need human judgment.',
  },
  {
    id: 'manufacturing-quality',
    industry: 'Manufacturing',
    client: 'Consumer Goods Manufacturer',
    region: 'Nigeria',
    title: 'Automated Quality Inspection',
    challenge: 'Manual quality inspection at end of production line missing 15% of defects. Rejected products discovered after packaging, causing costly rework.',
    solution: 'Deployed computer vision system to inspect products in real-time on the production line, catching defects before packaging.',
    implementation: [
      'High-speed cameras installed at inspection points',
      'AI model trained on thousands of defect images',
      'Automatic rejection mechanism for defective items',
      'Quality analytics dashboard for management',
    ],
    results: [
      { metric: '94%', label: 'Defect detection rate (from 85%)' },
      { metric: '60%', label: 'Reduction in customer complaints' },
      { metric: '40%', label: 'Reduction in rework costs' },
      { metric: '10 weeks', label: 'Time to production' },
    ],
    testimonial: 'We catch defects in real-time now. Customer complaints about quality have dropped significantly.',
  },
  {
    id: 'healthcare-claims',
    industry: 'Healthcare',
    client: 'Health Insurance Provider',
    region: 'United Kingdom',
    title: 'Claims Processing Automation',
    challenge: 'Claims processing taking 5-7 days on average. High error rates causing rejections and resubmissions. Staff overwhelmed with backlog.',
    solution: 'Implemented AI system to extract data from claim forms and supporting documents, validate against policy terms, and auto-approve straightforward claims.',
    implementation: [
      'OCR and AI extraction from claim forms, receipts, prescriptions',
      'Business rules engine for policy validation',
      'Fraud detection scoring',
      'Integration with payment systems for auto-disbursement',
    ],
    results: [
      { metric: '70%', label: 'Claims processed automatically' },
      { metric: '2 days', label: 'Average processing time (from 6)' },
      { metric: '45%', label: 'Reduction in processing errors' },
      { metric: '12 weeks', label: 'Time to production' },
    ],
    testimonial: 'Our members now get reimbursed in days instead of weeks. Staff morale improved because they handle interesting cases, not data entry.',
  },
];

const CaseStudies = () => {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Real projects."
        accent="Measurable results."
        description="Examples of AI projects we have delivered for clients. Names are anonymized for confidentiality, but the results are real."
      />

      {/* Case Studies */}
      <Section>
        <div className="space-y-20">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.id}
              id={study.id}
              className="scroll-mt-24"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Header */}
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">{study.industry}</span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">{study.region}</span>
              </div>
              
              <h2 className="text-headline mb-6">{study.title}</h2>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Left: Story */}
                <div>
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                      The Challenge
                    </h3>
                    <p className="text-body">{study.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                      The Solution
                    </h3>
                    <p className="text-body mb-4">{study.solution}</p>
                    <ul className="space-y-2">
                      {study.implementation.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <RxCheckCircled className="text-indigo-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {study.testimonial && (
                    <blockquote className="border-l-2 border-indigo-600 pl-4 italic text-gray-600">
                      "{study.testimonial}"
                    </blockquote>
                  )}
                </div>

                {/* Right: Results */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                    Results
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {study.results.map((result, i) => (
                      <div 
                        key={i} 
                        className="card-elevated p-4 text-center"
                      >
                        <div className="stat-value text-2xl mb-1">{result.metric}</div>
                        <div className="text-xs text-gray-400 font-medium">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Divider */}
              {index < caseStudies.length - 1 && (
                <hr className="mt-16 border-gray-200" />
              )}
            </motion.article>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        title="Want results like these?"
        subtitle="Tell us about your challenge. We will let you know if we can help—and what results you can realistically expect."
        primaryCta={{ text: 'Discuss Your Project', to: '/book-consultation' }}
        secondaryCta={{ text: 'View Industries', to: '/industries' }}
      />
    </>
  );
};

export default CaseStudies;
