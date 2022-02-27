import React from 'react';
import { AboutType } from '@/types/types';

type Props = {
  about: AboutType;
};
const About = ({ about }: Props): JSX.Element => {
  return (
    <section className="bg-white dark:bg-slate-900" id="about">
      <div className="container mx-auto px-6 py-8">
        <div className="items-center lg:flex">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
              Who I am
            </h2>
            <div
              className="prose prose-slate dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: about.bio }}
            />

            <div className="-mx-2 mt-6 flex items-center"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
