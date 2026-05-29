import type { Skill } from '../../types';

interface SkillBadgeProps {
  skill: Skill;
}

const MAX_PROFICIENCY = 5;

export default function SkillBadge({ skill }: SkillBadgeProps) {
  const { label, proficiency } = skill;

  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-700/50">
      {label}
      {proficiency !== undefined && (
        <span className="flex items-center gap-0.5" aria-label={`Proficiency ${proficiency} out of ${MAX_PROFICIENCY}`}>
          {Array.from({ length: MAX_PROFICIENCY }, (_, i) => (
            <span
              key={i}
              className={`w-1.5 h-1.5 rounded-full ${
                i < proficiency
                  ? 'bg-indigo-600 dark:bg-indigo-400'
                  : 'bg-indigo-200 dark:bg-indigo-700'
              }`}
            />
          ))}
        </span>
      )}
    </span>
  );
}
