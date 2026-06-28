import React from 'react';
import project1Img from '../assets/images/project_images/project_1.png';
import reactIcon from '../assets/images/icons/react.png';
import nodeIcon from '../assets/images/icons/node-js.png';
import mongoIcon from '../assets/images/icons/database.png';
import expressIcon from '../assets/images/icons/express-js.svg';
import tailwindIcon from '../assets/images/icons/Tailwind CSS.svg';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'Sparrow',
      description: [
        "Built a real-time AI voice tutoring app using React and Vapi AI, allowing users to hold spoken practice conversations directly in the browser.",
        "Developed a Node.js/Express REST API backend to orchestrate voice session lifecycle, process LLM scoring results, and persist data in MongoDB.",
        "Designed MongoDB schemas for conversation transcripts and performance metrics, enabling per-user progress tracking and actionable feedback delivery.",
      ],
      image: project1Img,
      techStack: [
        { name: 'React', icon: reactIcon },
        { name: 'Node.js', icon: nodeIcon },
        { name: 'MongoDB', icon: mongoIcon },
        { name: 'Express.js', icon: expressIcon },
        { name: 'Tailwind CSS', icon: tailwindIcon }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-left">
      <h1 className="text-4xl font-semibold tracking-tight text-[#1a1a1a] mb-10">
        Projects
      </h1>

      <div className="space-y-16">
        {projectsData.map((project) => (
          <div key={project.id} className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-start md:items-center">
            {/* Left Column: Project details */}
            <div className="flex-col text-left max-w-xl flex-grow">
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] tracking-tight">
                {project.title}
              </h3>
              <ul className="mt-4 list-disc pl-5 space-y-2 text-[1rem] sm:text-[1.1rem] leading-relaxed text-[#262626] font-normal">
                {project.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

              <h4 className="mt-6 text-lg sm:text-xl font-semibold text-[#1a1a1a] tracking-tight">
                Tech Stack
              </h4>

              {/* Tech Badges */}
              <div className="flex flex-wrap items-center gap-3 mt-3">
                {project.techStack.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#fce803] bg-[#fce803]/10 text-xs text-[#1a1a1a] font-normal"
                  >
                    <img src={tech.icon} alt={tech.name} className="w-4 h-4 object-contain" />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Project Image */}
            <div className="w-full max-w-sm md:max-w-none md:w-[320px] flex-shrink-0 mx-auto md:mx-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto aspect-square object-cover rounded-[32px] shadow-md border border-neutral-100"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
