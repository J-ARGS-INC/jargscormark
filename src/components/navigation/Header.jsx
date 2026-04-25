import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { RxArrowRight } from 'react-icons/rx';
import logo from '../../assets/Images/jc_logo.png';

const navLinks = [
    { text: 'Home', to: '/' },
    { text: 'Services', to: '/services' },
    { text: 'LoopedAI', to: '/looped-ai', highlight: true },
    { text: 'Case Studies', to: '/case-studies' },
    { text: 'About', to: '/about' },
];

const mobileLinks = [
    ...navLinks,
    { text: 'Contact', to: '/contact' },
    { text: 'Our Process', to: '/consulting-process' },
];

const menuContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
};

const menuItemVariants = {
    hidden: { opacity: 0, x: -16 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
    exit: { opacity: 0, x: -16 },
};

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isMobileMenuOpen]);

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-sm' : 'bg-transparent'
                }`}
            >
                <div className="container-main">
                    <nav className="flex items-center justify-between h-14 sm:h-16">
                        <Link to="/" className="flex items-center gap-2 z-10">
                            <motion.img
                                src={logo}
                                alt="Jargs Cormark"
                                className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg"
                                whileTap={{ scale: 0.95 }}
                            />
                        </Link>

                        <ul className="hidden lg:flex items-center gap-0.5">
                            {navLinks.map((link) => (
                                <li key={link.to}>
                                    <NavLink
                                        to={link.to}
                                        end={link.to === '/'}
                                        className={({ isActive }) =>
                                            `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                                                isActive
                                                    ? 'text-indigo-700 bg-indigo-50'
                                                    : link.highlight
                                                    ? 'text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50'
                                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                            }`
                                        }
                                    >
                                        {link.text}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        <div className="hidden lg:flex items-center gap-3">
                            <Link to="/contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors px-3 py-2">
                                Contact
                            </Link>
                            <Link to="/book-consultation" className="btn-primary text-sm">
                                Book consultation
                            </Link>
                        </div>

                        <div className="flex items-center lg:hidden">
                            <motion.button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2.5 rounded-xl text-gray-700 active:bg-gray-100"
                                aria-label="Toggle menu"
                                whileTap={{ scale: 0.92 }}
                            >
                                <motion.div animate={{ rotate: isMobileMenuOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
                                    {isMobileMenuOpen ? <HiX size={22} /> : <HiOutlineMenuAlt3 size={22} />}
                                </motion.div>
                            </motion.button>
                        </div>
                    </nav>
                </div>
            </header>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 lg:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="absolute inset-0 bg-white" />
                        <motion.nav
                            className="absolute top-14 sm:top-16 left-0 right-0 bottom-0 overflow-y-auto bg-white"
                            variants={menuContainerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <div className="px-4 pt-4 pb-8">
                                <motion.ul className="space-y-0.5">
                                    {mobileLinks.map((link) => (
                                        <motion.li key={link.to} variants={menuItemVariants}>
                                            <NavLink
                                                to={link.to}
                                                end={link.to === '/'}
                                                onClick={closeMobileMenu}
                                                className={({ isActive }) =>
                                                    `flex items-center px-4 py-3.5 rounded-xl text-[15px] font-medium transition-all ${
                                                        isActive
                                                            ? 'text-indigo-700 bg-indigo-50'
                                                            : link.highlight
                                                            ? 'text-indigo-600'
                                                            : 'text-gray-800'
                                                    }`
                                                }
                                            >
                                                {link.text}
                                                {link.highlight && (
                                                    <span className="ml-2 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-indigo-100 text-indigo-600">
                                                        We built it
                                                    </span>
                                                )}
                                            </NavLink>
                                        </motion.li>
                                    ))}
                                </motion.ul>

                                <motion.div className="mt-6 pt-5 border-t border-gray-100" variants={menuItemVariants}>
                                    <Link
                                        to="/book-consultation"
                                        onClick={closeMobileMenu}
                                        className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold text-[15px] shadow-lg shadow-indigo-200"
                                    >
                                        Book consultation
                                        <RxArrowRight size={16} />
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
