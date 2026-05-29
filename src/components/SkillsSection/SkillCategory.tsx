import type { SkillCategory as SkillCategoryType } from '../../types';
import SkillBadge from './SkillBadge';

interface SkillCategoryProps {
  category: SkillCategoryType;
}

export default function SkillCategory({ category }: SkillCategoryProps) {
  return (
    <div className="rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
        {category.category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <SkillBadge key={skill.label} skill={skill} />
        ))}
      </div>
    </div>
  );
}
