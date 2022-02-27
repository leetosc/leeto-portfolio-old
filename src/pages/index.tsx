import type { NextPage, GetStaticProps } from 'next';
import axios, { AxiosError } from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';

import { Project } from '@/types/types';

interface Props {
  about: any[];
  projects: Project[];
}

const Home: NextPage<Props> = (props) => {
  console.log(props);
  const { about, projects } = props;
  return (
    <div className="">
      <Head>
        <title>Leeto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <About />
      <Projects projects={projects} />
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const aboutRes = await axios.get(
      'https://portfolioapi.leeto.dev/items/About'
    );
    const projectRes = await axios.get(
      'https://portfolioapi.leeto.dev/items/projects'
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
