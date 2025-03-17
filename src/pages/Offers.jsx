import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Offers = () => {
  const offers = [
    {
      title: "Social Media Marketing",
      link: "social-media-marketing"
    },
    {
      title: "Sponsored Ads",
      link: "meta-ads"
    },
    {
      title: "Branding",
      link: "branding-website"
    },
  ];

  return (
    <div className='py-10 px-5 md:py-[18vh] md:px-20 bg-[#fafafa]'>
      <div className='grid grid-cols-1 md:grid-cols-2 items-end gap-5 mb-10'>
        <motion.div initial={{ translateY: 30, opacity: 0 }} whileInView={{ translateY: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }} viewport={{ once: true }}>
          <h1 className='text-4xl font-bold font-Barlow text-center py-2' style={{ color: '#052DA8' }}>JARGS CORMARK</h1>
          <h1 className='text-3xl font-bold font-Barlow text-center' style={{ color: '#C0272D' }}>
            Exciting February
          </h1>
        </motion.div>

        <motion.div initial={{ translateX: -20, opacity: 0 }} animate={{ translateX: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
          <p className='font-Mulish' style={{ color: '#05058E' }}>
            Explore our exclusive offers designed to elevate your business. From social media marketing to premium ad packages, we have everything you need to succeed.
          </p>
        </motion.div>
      </div>

      <div className='my-5'>
        <div className='grid grid-cols-1 gap-y-10'>
          {offers.map((offer, index) => (
            <motion.div key={index} initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, delay: 0.1 * index }}>
              <NavLink to={offer.link} className='block'>
                <button
                  className='w-full text-center p-4 rounded-full shadow-md transition-all duration-300'
                  style={{
                    backgroundColor: '#0E28C3',
                    color: 'white',
                    border: '2px solid #052DA8',
                    hover: { backgroundColor: '#052DA8' }
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#052DA8'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0E28C3'}
                >
                  <h2 className='font-Barlow text-2xl font-semibold mb-2'>{offer.title}</h2>
                </button>
              </NavLink>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;