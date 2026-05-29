import { render, screen, within } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import SkillCategory from '../components/SkillsSection/SkillCategory';
import SkillBadge from '../components/SkillsSection/SkillBadge';
import type { SkillCategory as SkillCategoryType } from '../types';

describe('SkillBadge', () => {
  it('renders skill label', () => {
    render(<SkillBadge skill={{ label: 'TypeScript' }} />);
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('renders proficiency indicator when provided', () => {
    render(<SkillBadge skill={{ label: 'React', proficiency: 4 }} />);
    expect(screen.getByLabelText(/Proficiency 4 out of 5/i)).toBeInTheDocument();
  });

  it('does not render proficiency indicator when not provided', () => {
    render(<SkillBadge skill={{ label: 'CSS' }} />);
    expect(screen.queryByLabelText(/Proficiency/i)).not.toBeInTheDocument();
  });
});

describe('SkillCategory', () => {
  it('renders category heading and skill labels', () => {
    const category: SkillCategoryType = {
      category: 'Languages',
      skills: [{ label: 'TypeScript' }, { label: 'Python' }],
    };
    render(<SkillCategory category={category} />);
    expect(screen.getByText('Languages')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Python')).toBeInTheDocument();
  });
});

// Property 2: Skills section reflects data source
// Validates: Requirements 4.1, 4.2, 4.3
describe('SkillsSection property tests', () => {
  it('renders every category name and skill label for any valid skills data (Property 2)', () => {
    // Use alphanumeric-only strings (no spaces) to avoid RTL text normalization issues
    const safeString = fc.stringMatching(/^[a-zA-Z0-9]+$/);
    fc.assert(
      fc.property(
        fc.array(
          fc.record({
            category: safeString,
            skills: fc.array(
              fc.record({ label: safeString }),
              { minLength: 1 }
            ),
          }),
          { minLength: 1 }
        ),
        (skillsData) => {
          // Use index as key to avoid duplicate-key warnings when categories share the same name
          const { container, unmount } = render(
            <div>
              {skillsData.map((cat, i) => (
                <SkillCategory key={i} category={cat} />
              ))}
            </div>
          );
          const { getAllByText } = within(container);

          // Every category name should appear
          for (const cat of skillsData) {
            expect(getAllByText(cat.category).length).toBeGreaterThan(0);
          }

          // Every skill label should appear
          for (const cat of skillsData) {
            for (const skill of cat.skills) {
              expect(getAllByText(skill.label).length).toBeGreaterThan(0);
            }
          }

          unmount();
        }
      ),
      { numRuns: 50 }
    );
  }, 30000);
});
