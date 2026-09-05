import { projectsData } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1a1a1a] mb-10 text-center md:text-left">
        Projects
      </h2>

      <div className="space-y-16">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
