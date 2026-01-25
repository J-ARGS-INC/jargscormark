import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { RxArrowRight } from 'react-icons/rx';
import logo from '../../assets/Images/jc_logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { text: 'Home', to: '/' },
    { text: 'Services', to: '/services' },
    { text: 'Solutions', to: '/solutions' },
    { text: 'Industries', to: '/industries' },
    { text: 'Case Studies', to: '/case-studies' },
    { text: 'AI Agents', to: '/ai-agents' },
    { text: 'About', to: '/about' },
  ];

  const mobileLinks = [
    ...navLinks,
    { text: 'Our Process', to: '/consulting-process' },
    { text: 'Contact', to: '/contact' },
  ];

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

  // Animation variants for staggered menu items
  const menuContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -16 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    },
    exit: { opacity: 0, x: -16 },
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container-main">
          <nav className="flex items-center justify-between h-14 sm:h-16 lg:h-18">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 z-10">
              <motion.img 
                src={logo} 
                alt="Jargs Cormark" 
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg" 
                whileTap={{ scale: 0.95 }}
              />
            </Link>

            {/* Desktop Navigation - unchanged */}
            <ul className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-indigo-700 bg-indigo-50'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`
                    }
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Link to="/book-consultation" className="btn-primary">
                Book AI Consultation
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-1 lg:hidden">
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-3 rounded-xl text-gray-700 active:bg-gray-100"
                aria-label="Toggle menu"
                whileTap={{ scale: 0.92 }}
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? <HiX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
                </motion.div>
              </motion.button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu - Production-grade */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Backdrop - Solid white background */}
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Menu Content */}
            <motion.nav
              className="absolute top-14 sm:top-16 left-0 right-0 bottom-0 overflow-y-auto bg-white"
              variants={menuContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="px-4 pt-4 pb-8 bg-white">
                {/* Navigation Links */}
                <motion.ul className="space-y-1">
                  {mobileLinks.map((link, index) => (
                    <motion.li key={link.to} variants={menuItemVariants}>
                      <NavLink
                        to={link.to}
                        end={link.to === '/'}
                        onClick={closeMobileMenu}
                        className={({ isActive }) =>
                          `flex items-center px-4 py-3.5 rounded-xl text-[15px] font-medium transition-all active:scale-[0.98] ${
                            isActive
                              ? 'text-primary-700 bg-primary-50'
                              : 'text-gray-800 active:bg-gray-50'
                          }`
                        }
                      >
                        {link.text}
                      </NavLink>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* CTA Section */}
                <motion.div 
                  className="mt-6 pt-6 border-t border-gray-200"
                  variants={menuItemVariants}
                >
                  <Link
                    to="/book-consultation"
                    onClick={closeMobileMenu}
                    className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold text-[15px] shadow-lg shadow-indigo-200 active:scale-[0.98] transition-transform"
                  >
                    Book AI Consultation
                    <RxArrowRight size={18} />
                  </Link>
                </motion.div>

                {/* Additional Info */}
                <motion.div 
                  className="mt-8 px-4 text-center"
                  variants={menuItemVariants}
                >
                  <p className="text-xs text-gray-500">
                    AI Consulting & Intelligent Systems
                  </p>
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
