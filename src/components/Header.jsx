import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { RxArrowRight } from 'react-icons/rx';
import logo from '../assets/Images/jc_logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { text: 'Home', to: '/' },
    { text: 'Services', to: '/services' },
    { text: 'Solutions', to: '/solutions' },
    { text: 'Industries', to: '/industries' },
    { text: 'Case Studies', to: '/case-studies' },
    { text: 'Insights', to: '/insights' },
    { text: 'About', to: '/about' },
  ];


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${isScrolled 
            ? 'bg-white/98 backdrop-blur-xl border-b border-gray-100 shadow-soft' 
            : 'bg-white/80 backdrop-blur-sm'
          }
        `}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-18 md:h-20">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-2 group">
              <img 
                src={logo} 
                alt="Jargs Cormark" 
                className="h-10 md:h-11 w-auto transition-transform duration-300 group-hover:scale-105" 
              />
              <span className="font-bold text-lg text-gray-900 hidden sm:inline">Jargs Cormark</span>
            </NavLink>

            {/* Desktop Links */}
            <ul className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={`
                      px-4 py-2.5 rounded-xl text-sm font-medium
                      transition-all duration-200 relative
                      ${isActive(link.to)
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50/50'
                      }
                    `}
                  >
                    {link.text}
                    {isActive(link.to) && (
                      <motion.div
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary-600 rounded-full"
                        layoutId="activeIndicator"
                      />
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <NavLink
                to="/contact"
                className="btn-primary text-sm group"
              >
                Get in Touch
                <RxArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
              </NavLink>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2.5 text-gray-900 hover:bg-gray-100 rounded-xl transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <HiX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>


      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-white/98 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.nav
              className="absolute top-18 left-0 right-0 bottom-0 overflow-y-auto px-5 py-10 safe-bottom"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ type: 'tween', duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <ul className="space-y-2">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.to}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.06, duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <NavLink
                      to={link.to}
                      className={`
                        block px-5 py-4 rounded-xl text-[17px] font-medium
                        transition-all duration-200 min-h-[52px] flex items-center
                        ${isActive(link.to)
                          ? 'text-indigo-600 bg-indigo-50'
                          : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100'
                        }
                      `}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.text}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="mt-10 pt-8 border-t border-gray-200 space-y-4"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.35 }}
              >
                <motion.div whileTap={{ scale: 0.98 }}>
                  <NavLink
                    to="/contact"
                    className="btn-primary w-full justify-center py-4 text-[15px] font-semibold rounded-xl shadow-lg shadow-indigo-200/50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get in Touch
                    <RxArrowRight className="text-lg" />
                  </NavLink>
                </motion.div>
              </motion.div>

              {/* Trust indicators in mobile menu */}
              <motion.div
                className="mt-10 pt-8 border-t border-gray-100"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.35 }}
              >
                <div className="flex justify-center gap-8 text-center">
                  <div>
                    <div className="text-2xl font-bold text-indigo-600">50+</div>
                    <div className="text-xs text-gray-500 mt-0.5">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-indigo-600">95%</div>
                    <div className="text-xs text-gray-500 mt-0.5">Success</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-indigo-600">10+</div>
                    <div className="text-xs text-gray-500 mt-0.5">Years</div>
                  </div>
                </div>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;