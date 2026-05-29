import type { HeroData } from '../../types';

interface HeroSectionProps {
  data: HeroData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="
        relative flex min-h-screen items-center justify-center overflow-hidden
        bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100
        dark:from-gray-950 dark:via-slate-900 dark:to-indigo-950
      "
    >
      {/* Decorative background blobs */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full
          bg-indigo-300/30 blur-3xl
          dark:bg-indigo-700/20
        "
      />
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full
          bg-blue-300/30 blur-3xl
          dark:bg-blue-700/20
        "
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center animate-fade-in">
        {/* Name */}
        <h1
          className="
            mb-4 text-5xl font-extrabold tracking-tight
            text-gray-900 dark:text-white
            sm:text-6xl lg:text-7xl
          "
        >
          {data.name}
        </h1>

        {/* Professional title */}
        <p
          className="
            mb-6 text-xl font-semibold
            text-indigo-600 dark:text-indigo-400
            sm:text-2xl
          "
        >
          {data.title}
        </p>

        {/* Tagline */}
        <p
          className="
            mb-10 text-lg leading-relaxed
            text-gray-600 dark:text-gray-300
            sm:text-xl
          "
        >
          {data.tagline}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => scrollTo('projects')}
            className="
              inline-flex min-h-[44px] min-w-[44px] items-center justify-center
              rounded-lg px-8 py-3 text-base font-semibold
              bg-indigo-600 text-white shadow-md
              hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2
              focus-visible:outline-offset-2 focus-visible:outline-indigo-600
              active:scale-95 transition-all duration-150
              dark:bg-indigo-500 dark:hover:bg-indigo-400
            "
          >
            View My Work
          </button>

          <button
            type="button"
            onClick={() => scrollTo('contact')}
            className="
              inline-flex min-h-[44px] min-w-[44px] items-center justify-center
              rounded-lg px-8 py-3 text-base font-semibold
              border-2 border-indigo-600 text-indigo-600
              hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2
              focus-visible:outline-offset-2 focus-visible:outline-indigo-600
              active:scale-95 transition-all duration-150
              dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-950
            "
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-400 dark:text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
