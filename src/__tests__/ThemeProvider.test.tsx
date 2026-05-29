import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import * as fc from 'fast-check';
import { ThemeProvider, ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

// Helper component to expose theme context values
function ThemeConsumer() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}

describe('ThemeProvider', () => {
  beforeEach(() => {
    // Reset localStorage and html class before each test
    localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  it('defaults to light theme when no localStorage or OS preference', () => {
    // matchMedia returns false (light preference)
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });

    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );
    expect(screen.getByTestId('theme').textContent).toBe('light');
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('applies dark class to <html> when dark theme is active', async () => {
    localStorage.setItem('portfolio-theme', 'dark');
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );
    // Wait for useEffect to run
    await act(async () => {});
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('toggleTheme switches from light to dark', async () => {
    localStorage.setItem('portfolio-theme', 'light');
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );
    expect(screen.getByTestId('theme').textContent).toBe('light');
    await userEvent.click(screen.getByText('Toggle'));
    expect(screen.getByTestId('theme').textContent).toBe('dark');
  });

  it('toggleTheme switches from dark to light', async () => {
    localStorage.setItem('portfolio-theme', 'dark');
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );
    expect(screen.getByTestId('theme').textContent).toBe('dark');
    await userEvent.click(screen.getByText('Toggle'));
    expect(screen.getByTestId('theme').textContent).toBe('light');
  });

  it('persists theme selection to localStorage on toggle', async () => {
    localStorage.setItem('portfolio-theme', 'light');
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );
    await userEvent.click(screen.getByText('Toggle'));
    expect(localStorage.getItem('portfolio-theme')).toBe('dark');
  });

  // Property 9: Theme toggle switches between light and dark
  // Validates: Requirements 9.2
  it('toggle always produces the opposite theme (Property 9)', async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.constantFrom('light' as const, 'dark' as const),
        async (initialTheme) => {
          localStorage.setItem('portfolio-theme', initialTheme);
          document.documentElement.classList.remove('dark');

          const { unmount } = render(
            <ThemeProvider>
              <ThemeConsumer />
            </ThemeProvider>
          );

          await act(async () => {});
          expect(screen.getByTestId('theme').textContent).toBe(initialTheme);

          await userEvent.click(screen.getByText('Toggle'));

          const expectedTheme = initialTheme === 'light' ? 'dark' : 'light';
          expect(screen.getByTestId('theme').textContent).toBe(expectedTheme);

          if (expectedTheme === 'dark') {
            expect(document.documentElement.classList.contains('dark')).toBe(true);
          } else {
            expect(document.documentElement.classList.contains('dark')).toBe(false);
          }

          unmount();
          localStorage.clear();
          document.documentElement.classList.remove('dark');
        }
      ),
      { numRuns: 20 }
    );
  }, 30000);
});
