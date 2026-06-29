import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import meImg from '../assets/images/me.jpg';
import linkedinIcon from '../assets/images/icons/linkedin.png';
import instagramIcon from '../assets/images/icons/instagram.png';

const Hero = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-20 pb-12">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
        {/* Left Column: Profile Picture */}
        <div className="flex-shrink-0">
          <img
            src={meImg}
            alt="Sarthak Dixit"
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl grayscale-[20%] hover:grayscale-0 transition-all duration-500"
          />
        </div>

        {/* Right Column: Hero Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1a1a1a]">
            Sarthak Dixit
          </h1>

          <p className="text-xl md:text-2xl font-normal italic text-[#737373] mt-2 min-h-[36px]">
            <TypeAnimation
              sequence={[
                'Fullstack Developer',
                2000,
                'Backend Developer',
                2000,
                'Engineer',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </p>

          {/* Social Icons */}
          <div className="flex items-center justify-center md:justify-start gap-3 mt-4">
            {/* GitHub */}
            <a
              href="https://github.com/sarthakdixit7376"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded border border-[#fce803] bg-[#fce803]/10 text-[#1a1a1a] hover:bg-[#fce803] hover:text-black transition-all duration-300"
              title="GitHub"
            >
              <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sarthakdixit7376/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded border border-[#fce803] bg-[#fce803]/10 text-[#1a1a1a] hover:bg-[#fce803] hover:text-black transition-all duration-300"
              title="LinkedIn"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5 object-contain" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/sarthak_144p/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded border border-[#fce803] bg-[#fce803]/10 text-[#1a1a1a] hover:bg-[#fce803] hover:text-black transition-all duration-300"
              title="Instagram"
            >
              <img src={instagramIcon} alt="Instagram" className="w-5 h-5 object-contain" />
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com/sarthak144p"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded border border-[#fce803] bg-[#fce803]/10 text-[#1a1a1a] hover:bg-[#fce803] hover:text-black transition-all duration-300"
              title="X"
            >
              <svg className="w-[18px] h-[18px] fill-currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

          <p className="mt-6 text-lg md:text-[1.1rem] leading-relaxed text-[#262626] font-normal">
            I'm Sarthak, a developer exploring Backend Development and AI. Whether it's designing an API, building a full-stack application, or experimenting with new ideas, I enjoy the process of learning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
