import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import logo from '../../assets/Images/jc_logo.png';

const footerLinks = {
    services: [
        { text: 'AI Consulting', to: '/services' },
        { text: 'AI Systems', to: '/looped-ai' },
        { text: 'AI Automation', to: '/services' },
        { text: 'Custom Software', to: '/services' },
        { text: 'Website Building', to: '/services' },
        { text: 'AI Voice Agents', to: '/services' },
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

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="container-main py-10 sm:py-12 lg:py-14">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
                    <div className="col-span-2 sm:col-span-3 lg:col-span-2">
                        <Link to="/" className="inline-flex items-center gap-2 mb-4">
                            <img src={logo} alt="Jargs Cormark" className="w-8 h-8 rounded-lg" />
                        </Link>
                        <p className="text-sm text-gray-500 mb-2 max-w-xs leading-relaxed">
                            We help businesses integrate AI into their operations.
                        </p>
                        <a
                            href="https://www.loopedai.io"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-indigo-600 hover:text-indigo-700 font-medium mb-5 transition-colors"
                        >
                            We built loopedai.io
                        </a>
                        <div className="flex gap-1">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-200 transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[11px] font-semibold text-gray-900 mb-3 uppercase tracking-wider">Services</h4>
                        <ul className="space-y-2.5">
                            {footerLinks.services.map((link) => (
                                <li key={link.text}>
                                    <NavLink to={link.to} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                                        {link.text}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[11px] font-semibold text-gray-900 mb-3 uppercase tracking-wider">Company</h4>
                        <ul className="space-y-2.5">
                            {footerLinks.company.map((link) => (
                                <li key={link.text}>
                                    <NavLink to={link.to} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                                        {link.text}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                        <h4 className="text-[11px] font-semibold text-gray-900 mb-3 uppercase tracking-wider">Contact</h4>
                        <ul className="space-y-2.5">
                            {footerLinks.connect.map((link) => (
                                <li key={link.text}>
                                    <NavLink to={link.to} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                                        {link.text}
                                    </NavLink>
                                </li>
                            ))}
                            <li className="pt-1">
                                <a
                                    href="mailto:info@jargscormark.com"
                                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-1.5"
                                >
                                    <HiOutlineMail size={13} />
                                    info@jargscormark.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-200">
                <div className="container-main py-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400">
                        <p>© {year} Jargs Cormark. All rights reserved.</p>
                        <div className="flex items-center gap-5">
                            <Link to="/privacy" className="hover:text-gray-600 transition-colors">Privacy</Link>
                            <Link to="/terms" className="hover:text-gray-600 transition-colors">Terms</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
