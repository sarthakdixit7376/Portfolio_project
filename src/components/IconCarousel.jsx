import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

import htmlIcon from '../assets/images/icons/html.png';
import cssIcon from '../assets/images/icons/css-3.png';
import jsIcon from '../assets/images/icons/java-script.png';
import tsIcon from '../assets/images/icons/typescript.png';
import reactIcon from '../assets/images/icons/react.png';
import nextIcon from '../assets/images/icons/nextjs.png';
import nodeIcon from '../assets/images/icons/node-js.png';
import postgresIcon from '../assets/images/icons/postgreSQL.png';
import dbIcon from '../assets/images/icons/database.png';
import gitIcon from '../assets/images/icons/git.png';
import figmaIcon from '../assets/images/icons/figma.svg';
import tailwindIcon from '../assets/images/icons/Tailwind CSS.svg';

const IconCarousel = () => {
  const icons = [
    { src: htmlIcon, alt: 'HTML5' },
    { src: cssIcon, alt: 'CSS3' },
    { src: jsIcon, alt: 'JavaScript' },
    { src: tsIcon, alt: 'TypeScript' },
    { src: reactIcon, alt: 'React' },
    { src: nextIcon, alt: 'Next.js' },
    { src: nodeIcon, alt: 'Node.js' },
    { src: postgresIcon, alt: 'PostgreSQL' },
    { src: dbIcon, alt: 'Database' },
    { src: gitIcon, alt: 'Git' },
    { src: figmaIcon, alt: 'Figma' },
    { src: tailwindIcon, alt: 'Tailwind CSS' }
  ];

  const sliderRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Calculate translation distance (half of total width for duplicated elements)
    const tl = gsap.to(slider, {
      xPercent: -50,
      ease: 'none',
      duration: 20, // base speed duration
      repeat: -1
    });

    animationRef.current = tl;

    // ScrollTrigger to speed up animation based on scroll velocity
    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        const velocity = Math.abs(self.getVelocity());
        const speedMultiplier = 1 + velocity / 200; // adjust sensitivity here
        
        // Dynamically scale timeline timeScale (speed factor)
        gsap.to(tl, {
          timeScale: speedMultiplier,
          duration: 0.5,
          overwrite: 'auto'
        });
      }
    });

    // Reset speed multiplier when scrolling stops
    const scrollStopListener = () => {
      gsap.to(tl, {
        timeScale: 1,
        duration: 0.5,
        overwrite: 'auto'
      });
    };

    window.addEventListener('scrollend', scrollStopListener);

    return () => {
      tl.kill();
      trigger.kill();
      window.removeEventListener('scrollend', scrollStopListener);
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 md:py-12 overflow-hidden relative">
      {/* Left Blur Overlay */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-36 bg-gradient-to-r from-[#fafafa] to-transparent z-10 pointer-events-none"></div>

      {/* Right Blur Overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-36 bg-gradient-to-l from-[#fafafa] to-transparent z-10 pointer-events-none"></div>

      {/* Scrolling Container */}
      <div className="flex w-max items-center">
        <div ref={sliderRef} className="flex">
          {/* First block of icons */}
          <div className="flex gap-10 md:gap-24 pr-10 md:pr-24 flex-shrink-0">
            {icons.map((icon, idx) => (
              <div key={`first-${idx}`} className="flex-shrink-0">
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="h-10 md:h-16 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
          {/* Second identical block of icons */}
          <div className="flex gap-10 md:gap-24 pr-10 md:pr-24 flex-shrink-0">
            {icons.map((icon, idx) => (
              <div key={`second-${idx}`} className="flex-shrink-0">
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="h-10 md:h-16 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconCarousel;
