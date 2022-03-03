import type { NextPage, GetStaticProps } from 'next';
import axios, { AxiosError } from 'axios';
import Head from 'next/head';
import parameterize from 'parameterize';

import { ProjectType } from '@/types/types';
import { API_URL } from '@/utils/constants';

interface Props {
  projectData: ProjectType;
}

const Project: NextPage<Props> = ({ projectData }) => {
  console.log({ projectData });
  return (
    <div className="min-h-full flex-1 bg-gray-900">
      <Head>
        <title>{`${projectData.name} | Leeto`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="body-font bg-gray-900 text-gray-400">
        <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
          <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
            <h1 className="title-font mb-4 text-3xl font-medium text-white sm:text-4xl">
              {projectData.name}
            </h1>
            <p className="mb-8 leading-relaxed">
              {projectData.description_short}
            </p>
            <div className="flex justify-center">
              {/* <button className="inline-flex rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none">
                Button
              </button>
              <button className="ml-4 inline-flex rounded border-0 bg-gray-800 py-2 px-6 text-lg text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none">
                Button
              </button> */}
            </div>
          </div>
          <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
            <img
              className="rounded border-2 border-gray-400 object-cover object-center"
              alt={projectData.name}
              src={
                projectData.image
                  ? `${API_URL}/assets/${projectData.image}`
                  : '/laptop.jpg'
              }
            />
          </div>
        </div>
      </section>
      <div>
        <section className="body-font bg-gray-900 text-gray-400">
          <div className="container mx-auto px-5 py-24">
            <div className="mx-auto w-full text-center lg:w-3/4 xl:w-1/2">
              <div
                className="prose prose-slate text-lg leading-relaxed dark:prose-invert"
                dangerouslySetInnerHTML={{
                  __html: projectData.description_long,
                }}
              />
              <span className="mt-8 mb-6 inline-block h-1 w-10 rounded bg-indigo-500" />
              <h2 className="title-font text-sm font-medium tracking-wider text-white">
                {projectData.url}
              </h2>
              {/* <p className="text-gray-500">Senior Product Designer</p> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  try {
    const projectRes = await axios.get(`${API_URL}/items/projects`);

    const paths = projectRes.data.data.map((project: ProjectType) => ({
      params: {
        project: parameterize(project.name),
      },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.response?.data);
    throw new Error(err.response?.data);
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const projectRes = await axios.get(`${API_URL}/items/projects`);

    const project = projectRes.data.data.find(
      (i: ProjectType) =>
        parameterize(i.name) ===
        parameterize(context?.params?.project as string)
    );

    return {
      props: {
        projectData: project,
      },
    };
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.response?.data);
    throw new Error(err.response?.data);
  }
};

export default Project;
