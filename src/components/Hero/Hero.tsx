import React from 'react';
import { API_URL } from '@/utils/constants';
import { AboutType } from '@/types/types';

type Props = {
  about: AboutType;
};
const Hero = ({ about }: Props): JSX.Element => {
  return (
    <section className="body-font bg-gray-900 text-gray-400" id="home">
      <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
        <div className="mb-10 w-5/6 max-w-xs md:mb-0 md:w-1/2 lg:w-full lg:max-w-sm">
          <img
            className="rounded object-cover object-center"
            alt={about.name}
            src={`${API_URL}/assets/${about.picture}`}
          />
        </div>
        <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
          <h1 className="title-font mb-4 text-3xl font-medium text-white sm:text-4xl">
            {about.name}
          </h1>
          <p className="mb-8 leading-relaxed">{about.title}</p>
          <div className="flex justify-center">
            {/* <button className="inline-flex rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none">
              Button
            </button>
            <button className="ml-4 inline-flex rounded border-0 bg-gray-800 py-2 px-6 text-lg text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none">
              Button
            </button> */}
            <a
              className="mx-2"
              href={about.linkedin}
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="h-10 w-10 fill-current text-slate-700 hover:text-indigo-600 dark:text-slate-200 dark:hover:text-indigo-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z" />
              </svg>
            </a>
            <a
              className="mx-2"
              href={about.github}
              aria-label="Github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="h-10 w-10 fill-current text-slate-700 hover:text-indigo-600 dark:text-slate-200 dark:hover:text-indigo-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
