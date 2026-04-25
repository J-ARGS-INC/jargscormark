import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RxArrowRight, RxCheckCircled } from 'react-icons/rx';
import { 
  HiOutlineOfficeBuilding,
  HiOutlineCurrencyDollar,
  HiOutlineTruck,
  HiOutlineShoppingCart,
  HiOutlineHeart,
  HiOutlineLightningBolt
} from 'react-icons/hi';

import Section from '../components/layout/Section';
import CTASection from '../components/sections/CTASection';
import PageHero from '../components/sections/PageHero';

// Industry data with African business context
const industries = [
  {
    id: 'financial-services',
    icon: HiOutlineCurrencyDollar,
    name: 'Financial Services',
    subtitle: 'Banks, Microfinance, Insurance, Fintech',
    pain: [
      'Manual loan processing taking days instead of hours',
      'Fraud detection that catches issues too late',
      'Customer onboarding bottlenecks limiting growth',
      'Compliance documentation consuming staff time',
    ],
    solutions: [
      {
        title: 'Automated Credit Decisioning',
        description: 'AI models that assess creditworthiness in minutes using alternative data sources—mobile money history, utility payments, business transactions.',
        benefit: '70% faster loan processing, 30% reduction in defaults',
      },
      {
        title: 'Real-Time Fraud Detection',
        description: 'Pattern recognition that flags suspicious transactions as they happen, not after the money is gone.',
        benefit: '85% of fraud caught before completion',
      },
      {
        title: 'Automated KYC & Document Processing',
        description: 'Extract and validate customer information from IDs, utility bills, and business documents automatically.',
        benefit: 'Onboarding time reduced from 2 days to 20 minutes',
      },
    ],
  },
  {
    id: 'logistics-supply-chain',
    icon: HiOutlineTruck,
    name: 'Logistics & Supply Chain',
    subtitle: 'Transport, Distribution, Warehousing',
    pain: [
      'Route planning done manually, wasting fuel and time',
      'Inventory sitting idle or running out unpredictably',
      'No visibility into delivery status until problems arise',
      'Fleet maintenance reactive instead of preventive',
    ],
    solutions: [
      {
        title: 'Intelligent Route Optimization',
        description: 'AI that factors in traffic, road conditions, delivery windows, and fuel costs to plan optimal routes daily.',
        benefit: '15-25% reduction in fuel costs, 20% more deliveries per day',
      },
      {
        title: 'Demand Forecasting',
        description: 'Predict what products will be needed where, so inventory is positioned before orders come in.',
        benefit: '40% reduction in stockouts, 25% less excess inventory',
      },
      {
        title: 'Predictive Fleet Maintenance',
        description: 'Monitor vehicle health data to schedule maintenance before breakdowns happen.',
        benefit: '50% reduction in unplanned downtime',
      },
    ],
  },
  {
    id: 'retail-ecommerce',
    icon: HiOutlineShoppingCart,
    name: 'Retail & E-commerce',
    subtitle: 'Supermarkets, Online Stores, FMCG',
    pain: [
      'Customer support overwhelmed by repetitive questions',
      'Pricing decisions based on gut feel, not data',
      'Inventory management disconnected from demand',
      'High customer acquisition costs, low retention',
    ],
    solutions: [
      {
        title: 'Customer Service Automation',
        description: 'AI chatbots that handle order tracking, product questions, and returns—in local languages and via WhatsApp.',
        benefit: '60% of inquiries resolved without human intervention',
      },
      {
        title: 'Dynamic Pricing',
        description: 'Adjust prices based on demand, competition, and inventory levels to maximize revenue.',
        benefit: '8-15% improvement in gross margins',
      },
      {
        title: 'Personalized Recommendations',
        description: 'Show customers products they are likely to buy based on browsing and purchase history.',
        benefit: '25% increase in average order value',
      },
    ],
  },
  {
    id: 'healthcare',
    icon: HiOutlineHeart,
    name: 'Healthcare',
    subtitle: 'Hospitals, Clinics, Pharmacies, HMOs',
    pain: [
      'Patient records scattered across paper files and systems',
      'Appointment scheduling inefficient, high no-show rates',
      'Claims processing slow and error-prone',
      'Drug inventory management causing stockouts',
    ],
    solutions: [
      {
        title: 'Patient Record Digitization',
        description: 'Extract and structure data from handwritten notes, lab results, and prescriptions into searchable records.',
        benefit: 'Patient history accessible in seconds, not hours',
      },
      {
        title: 'Appointment Optimization',
        description: 'AI scheduling that predicts no-shows and optimizes appointment slots to maximize clinic utilization.',
        benefit: '30% reduction in no-shows, 20% more patients served',
      },
      {
        title: 'Claims Automation',
        description: 'Automatic extraction and validation of claims data, flagging errors before submission.',
        benefit: '50% faster claims processing, 40% fewer rejections',
      },
    ],
  },
  {
    id: 'manufacturing',
    icon: HiOutlineOfficeBuilding,
    name: 'Manufacturing',
    subtitle: 'Production, Assembly, Processing',
    pain: [
      'Equipment failures causing unplanned production stops',
      'Quality issues caught too late in the process',
      'Manual data entry from production floor to systems',
      'No real-time visibility into production status',
    ],
    solutions: [
      {
        title: 'Predictive Maintenance',
        description: 'Monitor equipment sensors to predict failures before they happen, scheduling maintenance during planned downtime.',
        benefit: '45% reduction in unplanned downtime',
      },
      {
        title: 'Automated Quality Inspection',
        description: 'Computer vision that inspects products on the line, catching defects human inspectors miss.',
        benefit: '90% defect detection rate, 60% faster than manual inspection',
      },
      {
        title: 'Production Analytics',
        description: 'Real-time dashboards showing production rates, bottlenecks, and efficiency metrics.',
        benefit: '15% improvement in overall equipment effectiveness',
      },
    ],
  },
  {
    id: 'energy-utilities',
    icon: HiOutlineLightningBolt,
    name: 'Energy & Utilities',
    subtitle: 'Power, Water, Telecoms',
    pain: [
      'Meter reading and billing manual and error-prone',
      'Power theft and losses difficult to detect',
      'Customer complaints handled slowly',
      'Infrastructure maintenance reactive',
    ],
    solutions: [
      {
        title: 'Smart Metering Analytics',
        description: 'Analyze consumption patterns to detect theft, predict demand, and optimize billing accuracy.',
        benefit: '20% reduction in non-technical losses',
      },
      {
        title: 'Customer Service Automation',
        description: 'AI handling balance inquiries, outage reports, and payment processing via USSD, SMS, and WhatsApp.',
        benefit: '70% of customer interactions automated',
      },
      {
        title: 'Infrastructure Monitoring',
        description: 'Predict equipment failures and optimize maintenance schedules across distributed assets.',
        benefit: '35% reduction in maintenance costs',
      },
    ],
  },
];

const Industries = () => {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="AI solutions built for"
        accent="African business realities"
        description="We understand the operational challenges of doing business in Africa: infrastructure constraints, cost pressures, and the need to do more with less. Our AI solutions are designed for these realities."
      />

      {/* Industry Sections */}
      {industries.map((industry, index) => (
        <Section 
          key={industry.id} 
          id={industry.id}
          className={index % 2 === 1 ? 'bg-gray-50' : ''}
        >
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Industry Header */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-6">
                  <industry.icon size={28} />
                </div>
                <h2 className="text-headline mb-2">{industry.name}</h2>
                <p className="text-muted mb-6">{industry.subtitle}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">
                    Common Challenges
                  </h4>
                  <ul className="space-y-2">
                    {industry.pain.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-gray-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Solutions */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {industry.solutions.map((solution, i) => (
                  <motion.div
                    key={solution.title}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <h3 className="text-title mb-3">{solution.title}</h3>
                    <p className="text-body mb-4">{solution.description}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <RxCheckCircled className="text-accent-600 flex-shrink-0" />
                      <span className="font-medium text-accent-700">
                        {solution.benefit}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* Approach Section */}
      <Section>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-headline mb-4">Our Approach</h2>
          <p className="text-body-lg">
            We do not sell generic AI products. Every solution is designed for your 
            specific operational context and built to deliver measurable results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Start with the Problem',
              description: 'We begin by understanding your actual pain points—not by pushing technology. If AI is not the right answer, we will tell you.',
            },
            {
              title: 'Build for Your Reality',
              description: 'Our solutions account for infrastructure constraints, connectivity issues, and the need to work with existing systems.',
            },
            {
              title: 'Measure What Matters',
              description: 'Every project has clear success metrics tied to business outcomes—cost reduction, time saved, revenue generated.',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-semibold text-sm mb-4">
                {index + 1}
              </div>
              <h3 className="text-title mb-3">{item.title}</h3>
              <p className="text-body">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        title="Let us discuss your industry challenges"
        subtitle="Tell us about your operational pain points. We will show you what AI can realistically solve."
        primaryCta={{ text: 'Book Consultation', to: '/book-consultation' }}
        secondaryCta={{ text: 'View Case Studies', to: '/case-studies' }}
      />
    </>
  );
};

export default Industries;
