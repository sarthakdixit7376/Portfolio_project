import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'Preva care',
      role: 'Fullstack Intern',
      duration: 'June 2025 - July 2025',
      location: 'Delhi, India (Remote)'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1a1a1a] mb-10 text-center md:text-left">
        Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2"
          >
            {/* Left side: Company & Role */}
            <div className="text-left">
              <h3 className="text-xl font-semibold text-[#1a1a1a]">
                {exp.company}
              </h3>
              <p className="text-lg italic text-[#737373] mt-1 lowercase">
                {exp.role}
              </p>
            </div>

            {/* Right side: Duration & Location */}
            <div className="text-left sm:text-right text-lg text-[#737373] italic">
              <p>{exp.duration}</p>
              <p className="mt-1">{exp.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
