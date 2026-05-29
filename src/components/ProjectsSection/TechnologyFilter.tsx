import { projectsData } from '../../data/projects';

interface TechnologyFilterProps {
  activeFilter: string | null;
  onFilterChange: (tech: string | null) => void;
}

export default function TechnologyFilter({ activeFilter, onFilterChange }: TechnologyFilterProps) {
  const techs = Array.from(
    new Set(projectsData.flatMap((p) => p.technologies))
  ).sort();

  return (
    <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter by technology">
      <button
        onClick={() => onFilterChange(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
          activeFilter === null
            ? 'bg-indigo-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
        }`}
      >
        All
      </button>
      {techs.map((tech) => (
        <button
          key={tech}
          onClick={() => onFilterChange(tech)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
            activeFilter === tech
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
          }`}
        >
          {tech}
        </button>
      ))}
    </div>
  );
}
