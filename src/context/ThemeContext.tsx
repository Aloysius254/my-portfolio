import React, { createContext, useState, useEffect, useCallback } from 'react';
import type { Theme, ThemeContextValue } from '../types';

const STORAGE_KEY = 'portfolio-theme';

export const ThemeContext = createContext<ThemeContextValue>({
  theme: 'light',
  toggleTheme: () => {},
});

function getInitialTheme(): Theme {
  // 1. Check localStorage first
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
  } catch {
    // localStorage unavailable (e.g. sandboxed iframe) — fall through
  }

  // 2. Fall back to OS preference
  try {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  } catch {
    // matchMedia unavailable — fall through
  }

  // 3. Default to light
  return 'light';
}

function applyThemeToDocument(theme: Theme): void {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Apply the class to <html> whenever theme changes
  useEffect(() => {
    applyThemeToDocument(theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next: Theme = current === 'light' ? 'dark' : 'light';

      // Persist the manual selection
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Ignore write errors (private browsing, quota exceeded, etc.)
      }

      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
