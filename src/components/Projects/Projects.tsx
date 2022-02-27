import React from 'react';
import { Project } from '@/types/types';

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props): JSX.Element => {
  return (
    <section className="body-font bg-gray-900 text-gray-400">
      <div className="container mx-auto px-5 py-24">
        <h2 className="mb-6 text-3xl font-bold text-gray-800 dark:text-gray-100">
          Featured Projects
        </h2>
        <div className="-m-4 flex flex-wrap">
          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden rounded-lg border-2 border-gray-800">
              <img
                className="w-full object-cover object-center md:h-36 lg:h-48"
                src="https://dummyimage.com/720x400"
                alt="blog"
              />
              <div className="p-6">
                <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-500">
                  CATEGORY
                </h2>
                <h1 className="title-font mb-3 text-lg font-medium text-white">
                  The Catalyzer
                </h1>
                <p className="mb-3 leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div className="flex flex-wrap items-center ">
                  <a className="inline-flex items-center text-indigo-400 md:mb-2 lg:mb-0">
                    Learn More
                    <svg
                      className="ml-2 h-4 w-4"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
                  <span className="mr-3 ml-auto inline-flex items-center border-r-2 border-gray-800 py-1 pr-3 text-sm leading-none text-gray-500 md:ml-0 lg:ml-auto">
                    <svg
                      className="mr-1 h-4 w-4"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx={12} cy={12} r={3} />
                    </svg>
                    1.2K
                  </span>
                  <span className="inline-flex items-center text-sm leading-none text-gray-500">
                    <svg
                      className="mr-1 h-4 w-4"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                    6
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden rounded-lg border-2 border-gray-800">
              <img
                className="w-full object-cover object-center md:h-36 lg:h-48"
                src="https://dummyimage.com/721x401"
                alt="blog"
              />
              <div className="p-6">
                <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-500">
                  CATEGORY
                </h2>
                <h1 className="title-font mb-3 text-lg font-medium text-white">
                  The 400 Blows
                </h1>
                <p className="mb-3 leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div className="flex flex-wrap items-center">
                  <a className="inline-flex items-center text-indigo-400 md:mb-2 lg:mb-0">
                    Learn More
                    <svg
                      className="ml-2 h-4 w-4"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
                  <span className="mr-3 ml-auto inline-flex items-center border-r-2 border-gray-800 py-1 pr-3 text-sm leading-none text-gray-500 md:ml-0 lg:ml-auto">
                    <svg
                      className="mr-1 h-4 w-4"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx={12} cy={12} r={3} />
                    </svg>
                    1.2K
                  </span>
                  <span className="inline-flex items-center text-sm leading-none text-gray-500">
                    <svg
                      className="mr-1 h-4 w-4"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                    6
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden rounded-lg border-2 border-gray-800">
              <img
                className="w-full object-cover object-center md:h-36 lg:h-48"
                src="https://dummyimage.com/722x402"
                alt="blog"
              />
              <div className="p-6">
                <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-500">
                  CATEGORY
                </h2>
                <h1 className="title-font mb-3 text-lg font-medium text-white">
                  Shooting Stars
                </h1>
                <p className="mb-3 leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div className="flex flex-wrap items-center ">
                  <a className="inline-flex items-center text-indigo-400 md:mb-2 lg:mb-0">
                    Learn More
                    <svg
                      className="ml-2 h-4 w-4"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
                  <span className="mr-3 ml-auto inline-flex items-center border-r-2 border-gray-800 py-1 pr-3 text-sm leading-none text-gray-500 md:ml-0 lg:ml-auto">
                    <svg
                      className="mr-1 h-4 w-4"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx={12} cy={12} r={3} />
                    </svg>
                    1.2K
                  </span>
                  <span className="inline-flex items-center text-sm leading-none text-gray-500">
                    <svg
                      className="mr-1 h-4 w-4"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                    6
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
