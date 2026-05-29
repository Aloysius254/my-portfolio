import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { ThemeProvider } from '../context/ThemeContext';
import Navbar from '../components/Navbar/Navbar';

function renderNavbar() {
  return render(
    <ThemeProvider>
      <Navbar />
    </ThemeProvider>
  );
}

describe('Navbar', () => {
  it('renders all five section links', () => {
    renderNavbar();
    expect(screen.getAllByText('Home').length).toBeGreaterThan(0);
    expect(screen.getAllByText('About').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Skills').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Projects').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Contact').length).toBeGreaterThan(0);
  });

  it('contains a ThemeToggle button', () => {
    renderNavbar();
    // ThemeToggle has an aria-label for switching modes
    const toggleBtn = screen.getByRole('button', { name: /switch to (dark|light) mode/i });
    expect(toggleBtn).toBeInTheDocument();
  });

  it('hamburger button is present in the DOM', () => {
    renderNavbar();
    const hamburgerBtn = screen.getByRole('button', { name: /open menu/i });
    expect(hamburgerBtn).toBeInTheDocument();
  });

  it('hamburger click toggles menu visibility', async () => {
    renderNavbar();
    const hamburgerBtn = screen.getByRole('button', { name: /open menu/i });

    // Initially closed
    expect(hamburgerBtn).toHaveAttribute('aria-expanded', 'false');

    // Click to open
    await userEvent.click(hamburgerBtn);
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument();

    // Click to close
    await userEvent.click(screen.getByRole('button', { name: /close menu/i }));
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument();
  });
});
