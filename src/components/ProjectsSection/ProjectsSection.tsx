import { useState } from 'react';
import { projectsData } from '../../data/projects';
import ProjectCard from './ProjectCard';
import TechnologyFilter from './TechnologyFilter';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const sorted = [...projectsData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const filtered = activeFilter
    ? sorted.filter((p) => p.technologies.includes(activeFilter))
    : sorted;

  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Projects
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
          A selection of things I've built.
        </p>
        <TechnologyFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        {filtered.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400 py-12">
            No projects match the selected filter.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
