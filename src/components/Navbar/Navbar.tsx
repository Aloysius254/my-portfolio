import { NavLinks } from './NavLinks';
import { HamburgerMenu } from './HamburgerMenu';
import { ThemeToggle } from './ThemeToggle';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="text-lg font-bold text-indigo-600 dark:text-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          Portfolio
        </a>
        <nav className="hidden md:flex items-center gap-1">
          <NavLinks />
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
}
