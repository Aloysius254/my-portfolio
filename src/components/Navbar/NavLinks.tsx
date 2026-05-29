interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

interface NavLinksProps {
  onLinkClick?: () => void;
  className?: string;
}

export function NavLinks({ onLinkClick, className = '' }: NavLinksProps) {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    onLinkClick?.();
  };

  return (
    <ul
      className={`flex items-center gap-1 ${className}`}
      role="list"
    >
      {NAV_LINKS.map(({ label, href }) => (
        <li key={href}>
          <a
            href={href}
            onClick={(e) => handleClick(e, href)}
            className="
              px-3 py-2 rounded-md text-sm font-medium
              text-gray-700 dark:text-gray-300
              hover:text-indigo-600 dark:hover:text-indigo-400
              hover:bg-gray-100 dark:hover:bg-gray-700
              focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500
              focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900
              transition-colors duration-200
            "
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
