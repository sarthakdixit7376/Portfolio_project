import React from 'react';
import htmlIcon from '../assets/images/icons/html.png';
import cssIcon from '../assets/images/icons/css-3.png';
import jsIcon from '../assets/images/icons/java-script.png';
import tsIcon from '../assets/images/icons/typescript.png';
import reactIcon from '../assets/images/icons/react.png';
import nodeIcon from '../assets/images/icons/node-js.png';
import dbIcon from '../assets/images/icons/database.png';
import gitIcon from '../assets/images/icons/git.png';

const IconCarousel = () => {
  const icons = [
    { src: htmlIcon, alt: 'HTML5' },
    { src: cssIcon, alt: 'CSS3' },
    { src: jsIcon, alt: 'JavaScript' },
    { src: tsIcon, alt: 'TypeScript' },
    { src: reactIcon, alt: 'React' },
    { src: nodeIcon, alt: 'Node.js' },
    { src: dbIcon, alt: 'Database' },
    { src: gitIcon, alt: 'Git' }
  ];

  // Duplicate list to create a seamless loop
  const duplicatedIcons = [...icons, ...icons];

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 md:py-12 overflow-hidden relative">
      {/* Left Blur Overlay */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-36 bg-gradient-to-r from-[#fafafa] to-transparent z-10 pointer-events-none"></div>

      {/* Right Blur Overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-36 bg-gradient-to-l from-[#fafafa] to-transparent z-10 pointer-events-none"></div>

      {/* Scrolling Container */}
      <div className="flex w-max animate-scroll gap-10 md:gap-24 items-center pr-10 md:pr-24">
        {duplicatedIcons.map((icon, idx) => (
          <div key={idx} className="flex-shrink-0">
            <img
              src={icon.src}
              alt={icon.alt}
              className="h-10 md:h-16 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconCarousel;
