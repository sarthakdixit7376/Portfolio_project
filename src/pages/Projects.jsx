import { projectsData } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-left">
      <h1 className="text-4xl font-semibold tracking-tight text-[#1a1a1a] mb-10">
        Projects
      </h1>

      <div className="space-y-16">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
