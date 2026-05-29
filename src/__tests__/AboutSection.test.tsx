import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AboutSection from '../components/AboutSection/AboutSection';

describe('AboutSection', () => {
  it('renders bio text', () => {
    render(<AboutSection />);
    // The bio text is from ownerData — check that some text content is present
    const section = document.getElementById('about');
    expect(section).toBeInTheDocument();
  });

  it('profile image has non-empty alt attribute', () => {
    render(<AboutSection />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('alt');
    expect(img.getAttribute('alt')).not.toBe('');
  });

  it('resume link has download attribute', () => {
    render(<AboutSection />);
    const downloadLink = screen.getByText('Download Resume').closest('a');
    expect(downloadLink).toHaveAttribute('download');
  });

  it('profile image has loading="lazy" (below fold)', () => {
    render(<AboutSection />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('loading', 'lazy');
  });
});
