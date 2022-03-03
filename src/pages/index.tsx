import type { NextPage, GetStaticProps } from 'next';
import axios, { AxiosError } from 'axios';
import Head from 'next/head';
import About from '../components/Sections/AboutSection/AboutSection';
import Hero from '../components/Sections/HeroSection/HeroSection';
import Projects from '../components/Sections/ProjectsSection/ProjectsSection';

import { AboutType, ProjectType } from '@/types/types';
import { API_URL } from '@/utils/constants';

interface Props {
  about: AboutType;
  projects: ProjectType[];
}

const Home: NextPage<Props> = ({ about, projects }) => {
  console.log({ about, projects });
  return (
    <div className="">
      <Head>
        <title>Leeto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero about={about} />
      <About about={about} />
      <Projects projects={projects} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const aboutRes = await axios.get(`${API_URL}/items/About`);
    const projectRes = await axios.get(
      `${API_URL}/items/projects?filter[is_featured][_eq]=true`
    );

    return {
      props: {
        about: aboutRes.data.data,
        projects: projectRes.data.data,
      },
    };
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.response?.data);
    throw new Error(err.response?.data);
  }
};

export default Home;
