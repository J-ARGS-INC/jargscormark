import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaLinkedin, 
  FaTwitter,
  FaYoutube
} from 'react-icons/fa';
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlineShieldCheck } from 'react-icons/hi';
import { RxArrowRight } from 'react-icons/rx';
import logo from '../assets/Images/jc_logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { text: 'AI Voice Agents', to: '/services#voice-agents' },
      { text: 'Workflow Automation', to: '/services#workflow-automation' },
      { text: 'MCP Integration', to: '/services#mcp-integration' },
      { text: 'AI Lead Generation', to: '/services#ai-lead-generation' },
      { text: 'Custom Software', to: '/services#software-development' },
      { text: 'AI Consulting', to: '/services#consulting' },
    ],
    company: [
      { text: 'About Us', to: '/about' },
      { text: 'Services', to: '/services' },
      { text: 'Industries', to: '/industries' },
      { text: 'Case Studies', to: '/case-studies' },
      { text: 'Contact', to: '/contact' },
    ],
    resources: [
      { text: 'AI Agents', to: '/ai-agents' },
      { text: 'Solutions', to: '/solutions' },
      { text: 'Our Process', to: '/consulting-process' },
      { text: 'Book Consultation', to: '/book-consultation' },
    ],
  };

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://linkedin.com/company/jargs-cormark', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube' },
  ];

  const techStack = ['VAPI', 'n8n', 'MCP', 'Make', 'GoHighLevel'];

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      {/* CTA Section */}
      <div className="section-padding pb-12 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-futuristic" />
        <div className="absolute inset-0 bg-mesh opacity-30" />
        
        <motion.div
          className="card-futuristic p-10 md:p-14 text-center max-w-4xl mx-auto relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Automate Your Business with{' '}
            <span className="gradient-text">AI?</span>
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Book a free strategy call to discover which AI systems can save you 
            20+ hours per week and generate more qualified leads.
          </p>
          <NavLink to="/book-consultation" className="btn-glow btn-lg group">
            Book Free Strategy Call
            <RxArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
          </NavLink>
          
          {/* Tech badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="text-sm text-gray-500">Powered by:</span>
            {techStack.map((tech) => (
              <span key={tech} className="tech-badge text-xs">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Main Footer */}
      <div className="container-main py-12 md:py-16 bg-white border-t border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <NavLink to="/" className="flex items-center gap-2 mb-4 group">
              <img 
                src={logo} 
                alt="Jargs Cormark" 
                className="h-14 w-auto transition-transform group-hover:scale-105" 
              />
            </NavLink>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              AI Automation & Intelligent Systems. We deploy AI that runs your business.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 border border-gray-100 text-gray-500 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Services</h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className="text-sm text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className="text-sm text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className="text-sm text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-gray-900 font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <HiOutlineMail className="mt-0.5 text-indigo-600" size={18} />
                <a 
                  href="mailto:info@jargscormark.com" 
                  className="hover:text-indigo-600 transition-colors"
                >
                  info@jargscormark.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <HiOutlineLocationMarker className="mt-0.5 text-indigo-600" size={18} />
                <span>Global Remote Team</span>
              </li>
            </ul>
            
            {/* Trust indicator */}
            <div className="mt-6 p-3 bg-indigo-50 rounded-xl border border-indigo-100">
              <p className="text-xs text-indigo-700 font-medium flex items-center gap-2">
                <HiOutlineShieldCheck size={14} />
                Enterprise-grade AI automation
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {currentYear} Jargs Cormark. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <NavLink to="/privacy" className="hover:text-indigo-600 transition-colors">
              Privacy Policy
            </NavLink>
            <NavLink to="/terms" className="hover:text-indigo-600 transition-colors">
              Terms of Service
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;