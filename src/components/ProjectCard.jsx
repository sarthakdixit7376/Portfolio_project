const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-start md:items-center">
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
  );
};

export default ProjectCard;
