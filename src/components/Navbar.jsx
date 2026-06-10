import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' }
  ];

  return (
    <nav className="w-full py-5 bg-[#fafafa]/70 backdrop-blur-md sticky top-0 z-50 flex justify-center border-b border-neutral-100 px-4">
      <ul className="flex items-center gap-6 sm:gap-16 m-0 p-0 list-none">
        {navItems.map((item) => (
          <li key={item.name} className="flex items-center relative">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `text-[1rem] sm:text-[1.1rem] font-medium transition-colors duration-300 tracking-wide hover:text-black ${isActive ? 'text-black' : 'text-[#737373]'
                }`
              }
            >
              {({ isActive }) => (
                <div className="relative flex items-center">
                  {isActive && (
                    <span className="absolute -left-4 sm:-left-5 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#fce803] rounded-full animate-[blink_1.5s_infinite]"></span>
                  )}
                  {item.name}
                </div>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
