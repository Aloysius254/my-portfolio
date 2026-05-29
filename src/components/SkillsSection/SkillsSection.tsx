import { skillsData } from '../../data/skills';
import SkillCategory from './SkillCategory';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category) => (
            <SkillCategory key={category.category} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
