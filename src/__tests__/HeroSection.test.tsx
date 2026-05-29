import { render, screen, within } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import HeroSection from '../components/HeroSection/HeroSection';

describe('HeroSection', () => {
  // Unit tests
  it('renders name, title, and tagline from props', () => {
    const data = {
      name: 'Jane Doe',
      title: 'Full-Stack Developer',
      tagline: 'Building great things.',
    };
    render(<HeroSection data={data} />);
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    expect(screen.getByText('Full-Stack Developer')).toBeInTheDocument();
    expect(screen.getByText('Building great things.')).toBeInTheDocument();
  });

  it('renders a button that scrolls to projects section', () => {
    const data = { name: 'A', title: 'B', tagline: 'C' };
    render(<HeroSection data={data} />);
    expect(screen.getByText('View My Work')).toBeInTheDocument();
  });

  it('renders a button that scrolls to contact section', () => {
    const data = { name: 'A', title: 'B', tagline: 'C' };
    render(<HeroSection data={data} />);
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
  });

  // Property 1: Hero section renders all owner data fields
  // Validates: Requirements 1.2
  it('renders all owner data fields for any valid owner data (Property 1)', () => {
    // Use alphanumeric-only strings (no spaces) to avoid RTL text normalization issues
    const safeString = fc.stringMatching(/^[a-zA-Z0-9]+$/);
    fc.assert(
      fc.property(
        fc.record({
          name: safeString,
          title: safeString,
          tagline: safeString,
        }),
        (ownerData) => {
          const { container, unmount } = render(<HeroSection data={ownerData} />);
          const { getByText } = within(container);
          expect(getByText(ownerData.name)).toBeInTheDocument();
          expect(getByText(ownerData.title)).toBeInTheDocument();
          expect(getByText(ownerData.tagline)).toBeInTheDocument();
          unmount();
        }
      ),
      { numRuns: 100 }
    );
  });
});
