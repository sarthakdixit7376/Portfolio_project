import React, { useState, useEffect } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    const uniqueKey = 'sarthakdixit_portfolio_visitor_count';
    const hasVisited = sessionStorage.getItem('has_visited_session');

    const fetchCount = async (endpoint) => {
      try {
        const response = await fetch(`https://countapi.mileshilliard.com/api/v1/${endpoint}/${uniqueKey}`);
        if (response.ok) {
          const data = await response.json();
          setVisitorCount(data.value);
        }
      } catch (error) {
        console.error('Error fetching visitor count:', error);
      }
    };

    if (hasVisited) {
      // Just get the current count if already visited in this session
      fetchCount('get');
    } else {
      // Increment and set visited
      fetchCount('hit');
      sessionStorage.setItem('has_visited_session', 'true');
    }
  }, []);

  return (
    <footer className="max-w-4xl mx-auto px-6 py-12">
      {/* Horizontal Divider */}
      <hr className="border-neutral-200 mb-8" />

      {/* Footer Content */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-base text-[#737373] font-normal">
        {/* Left Side: Copyright */}
        <p>
          &copy; {currentYear} Sarthak Dixit. All rights reserved.
        </p>

        {/* Right Side: Visitor Counter */}
        <p>
          {visitorCount !== null ? `Visitor #${visitorCount.toLocaleString()}` : 'Visitor --'}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
