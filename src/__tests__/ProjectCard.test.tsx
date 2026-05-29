import { render, screen, within } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import ProjectCard from '../components/ProjectsSection/ProjectCard';
import type { Project } from '../types';

const baseProject: Project = {
  id: 'test-1',
  title: 'Test Project',
  description: 'A test project description.',
  technologies: ['React', 'TypeScript'],
  thumbnailUrl: '/images/placeholder.webp',
  liveUrl: 'https://example.com',
  repoUrl: 'https://github.com/owner/repo',
  date: '2024-01-01',
};

describe('ProjectCard', () => {
  it('renders project title', () => {
    render(<ProjectCard project={baseProject} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  it('renders project description', () => {
    render(<ProjectCard project={baseProject} />);
    expect(screen.getByText('A test project description.')).toBeInTheDocument();
  });

  it('renders all technologies', () => {
    render(<ProjectCard project={baseProject} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('renders thumbnail image with non-empty alt text', () => {
    render(<ProjectCard project={baseProject} />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('alt');
    expect(img.getAttribute('alt')).not.toBe('');
  });

  it('thumbnail image has loading="lazy"', () => {
    render(<ProjectCard project={baseProject} />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('loading', 'lazy');
  });

  it('renders live link with target="_blank" and rel="noopener noreferrer"', () => {
    render(<ProjectCard project={baseProject} />);
    const liveLink = screen.getByText('Live Demo').closest('a');
    expect(liveLink).toHaveAttribute('href', 'https://example.com');
    expect(liveLink).toHaveAttribute('target', '_blank');
    expect(liveLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders repo link with target="_blank" and rel="noopener noreferrer"', () => {
    render(<ProjectCard project={baseProject} />);
    const repoLink = screen.getByText('Source Code').closest('a');
    expect(repoLink).toHaveAttribute('href', 'https://github.com/owner/repo');
    expect(repoLink).toHaveAttribute('target', '_blank');
    expect(repoLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('does not render live link when liveUrl is absent', () => {
    const project = { ...baseProject, liveUrl: undefined };
    render(<ProjectCard project={project} />);
    expect(screen.queryByText('Live Demo')).not.toBeInTheDocument();
  });

  it('does not render repo link when repoUrl is absent', () => {
    const project = { ...baseProject, repoUrl: undefined };
    render(<ProjectCard project={project} />);
    expect(screen.queryByText('Source Code')).not.toBeInTheDocument();
  });

  // Property 3: Project card renders all required fields
  // Validates: Requirements 5.2
  it('renders all required fields for any valid project data (Property 3)', () => {
    // Use alphanumeric-only strings (no spaces) to avoid RTL text normalization issues
    const safeString = fc.stringMatching(/^[a-zA-Z0-9]+$/);
    fc.assert(
      fc.property(
        fc.record({
          id: safeString,
          title: safeString,
          description: safeString,
          technologies: fc.array(safeString, { minLength: 1 }),
          thumbnailUrl: fc.constant('/images/placeholder.webp'),
          date: fc.constant('2024-01-01'),
        }),
        (project) => {
          const { container, unmount } = render(<ProjectCard project={project} />);
          const { getByText, getAllByText, getByRole } = within(container);
          expect(getByText(project.title)).toBeInTheDocument();
          expect(getByText(project.description)).toBeInTheDocument();
          for (const tech of project.technologies) {
            expect(getAllByText(tech).length).toBeGreaterThan(0);
          }
          const img = getByRole('img');
          expect(img).toBeInTheDocument();
          unmount();
        }
      ),
      { numRuns: 100 }
    );
  });

  // Property 4: Project card links are conditional and open in new tab
  // Validates: Requirements 5.3, 5.4
  it('renders links conditionally and with correct attributes (Property 4)', () => {
    const safeString = fc.stringMatching(/^[a-zA-Z0-9]+$/);
    fc.assert(
      fc.property(
        fc.record({
          id: safeString,
          title: safeString,
          description: safeString,
          technologies: fc.array(safeString, { minLength: 1 }),
          thumbnailUrl: fc.constant('/images/placeholder.webp'),
          date: fc.constant('2024-01-01'),
          liveUrl: fc.option(fc.webUrl(), { nil: undefined }),
          repoUrl: fc.option(fc.webUrl(), { nil: undefined }),
        }),
        (project) => {
          const { container, unmount } = render(<ProjectCard project={project} />);
          const { queryByText } = within(container);

          const liveLinkEl = queryByText('Live Demo');
          if (project.liveUrl) {
            expect(liveLinkEl).not.toBeNull();
            const liveLink = liveLinkEl!.closest('a');
            expect(liveLink).toHaveAttribute('target', '_blank');
            expect(liveLink).toHaveAttribute('rel', 'noopener noreferrer');
          } else {
            expect(liveLinkEl).toBeNull();
          }

          const repoLinkEl = queryByText('Source Code');
          if (project.repoUrl) {
            expect(repoLinkEl).not.toBeNull();
            const repoLink = repoLinkEl!.closest('a');
            expect(repoLink).toHaveAttribute('target', '_blank');
            expect(repoLink).toHaveAttribute('rel', 'noopener noreferrer');
          } else {
            expect(repoLinkEl).toBeNull();
          }

          unmount();
        }
      ),
      { numRuns: 100 }
    );
  });
});
