import { ownerData } from '../../data/owner';

export default function AboutSection() {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = 'images/placeholder.webp';
  };

  return (
    <section
      id="about"
      className="py-20 px-6 bg-white dark:bg-gray-900"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Profile photo */}
          <div className="flex-shrink-0">
            <picture>
              <source srcSet={ownerData.photoUrl} type="image/webp" />
              <img
                src={ownerData.photoUrl}
                alt={`Profile photo of ${ownerData.name}`}
                loading="lazy"
                onError={handleImageError}
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg ring-4 ring-indigo-500 dark:ring-indigo-400"
              />
            </picture>
          </div>

          {/* Bio + contact + resume */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1">
                {ownerData.name}
              </h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-4">
                {ownerData.title}
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-prose mb-4">
                {ownerData.bio}
              </p>

              {/* Education */}
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                🎓 B.Sc. Information Technology — Zetech University, Nairobi (2022 – Present)
              </p>

              {/* Contact links */}
              <div className="flex flex-col sm:flex-row gap-3 items-center md:items-start">
                <a
                  href={`mailto:${ownerData.email}`}
                  className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  ✉ {ownerData.email}
                </a>
                <a
                  href={`tel:${ownerData.phone}`}
                  className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  📞 {ownerData.phone}
                </a>
                <a
                  href={ownerData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href={ownerData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <a
              href={ownerData.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold transition-colors duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
