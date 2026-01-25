import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import logo from '../../assets/Images/jc_logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { text: 'AI Strategy', to: '/services' },
      { text: 'Custom Development', to: '/services' },
      { text: 'Data Engineering', to: '/services' },
      { text: 'AI Agents', to: '/ai-agents' },
    ],
    company: [
      { text: 'About', to: '/about' },
      { text: 'Case Studies', to: '/case-studies' },
      { text: 'Our Process', to: '/consulting-process' },
      { text: 'Industries', to: '/industries' },
    ],
    connect: [
      { text: 'Contact', to: '/contact' },
      { text: 'Book Consultation', to: '/book-consultation' },
    ],
  };

  const socialLinks = [
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaGithub, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      {/* Main Footer */}
      <div className="container-main py-10 sm:py-12 lg:py-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 mb-3 sm:mb-4">
              <img src={logo} alt="Jargs Cormark" className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg" />
            </Link>
            <p className="text-body mb-4 max-w-xs">
              AI Consulting & Intelligent Systems for enterprises across Africa and beyond.
            </p>
            <div className="flex gap-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 flex items-center justify-center rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors touch-feedback"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[13px] font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 uppercase tracking-wide">Services</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.text}>
                  <NavLink 
                    to={link.to} 
                    className="text-body hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[13px] font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 uppercase tracking-wide">Company</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.text}>
                  <NavLink 
                    to={link.to} 
                    className="text-body hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-[13px] font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 uppercase tracking-wide">Connect</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.text}>
                  <NavLink 
                    to={link.to} 
                    className="text-body hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
              <li className="pt-1">
                <a 
                  href="mailto:hello@jargscormark.com" 
                  className="text-body hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2"
                >
                  <HiOutlineMail size={14} />
                  hello@jargscormark.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="container-main py-4 sm:py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-muted">
            <p>© {currentYear} Jargs Cormark. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
