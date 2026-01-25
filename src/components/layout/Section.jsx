import React from 'react';

const Section = ({ 
  children, 
  className = '', 
  size = 'default',
  background = 'white',
  id
}) => {
  const sizes = {
    default: 'py-14 sm:py-16 md:py-20 lg:py-24',
    large: 'py-20 sm:py-24 md:py-28 lg:py-32',
    small: 'py-10 sm:py-12 md:py-14 lg:py-16',
    breathable: 'py-16 sm:py-20 md:py-24 lg:py-28',
  };

  const backgrounds = {
    white: 'bg-white dark:bg-gray-950',
    gray: 'bg-gray-50 dark:bg-gray-900',
    gradient: 'bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950',
    mesh: 'bg-mesh bg-white dark:bg-gray-950',
    primary: 'bg-gradient-to-br from-indigo-600 to-blue-600 text-white',
  };

  return (
    <section 
      id={id}
      className={`${sizes[size]} ${backgrounds[background]} ${className}`}
    >
      <div className="container-main">
        {children}
      </div>
    </section>
  );
};

export default Section;
