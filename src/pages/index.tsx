import Head from 'next/head';
import { useEffect, useState } from 'react';
import Aos from 'aos';
import Header from '../Components/Header'
import HomeHero from '../Components/HomeHero';
import Experiencias from '../Components/Experiencias';
import Projetos from '../Components/Projetos';
import Footer from '../Components/Footer/Footer';
import FormContato from '../Components/FormContato';
import { HomeContainer } from '../styles/HomeStyles';
import 'aos/dist/aos.css';



interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface HomeProps {
  projetos: IProjeto[];
}

export default function Home({ projetos }: HomeProps) {

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div>
      <HomeContainer>
        <Head>
          <title>Home | Qualifik Engenharia e Consultoria</title>
          <meta
            name="description"
            content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
          />
          <meta property="og:image" content="/ogimage.png" />
          <meta property="og:image:secure_url" content="/ogimage.png" />
          <meta name="twitter:image" content="/ogimage.png" />
          <meta name="twitter:image:src" content="/ogimage.png" />
          <meta
            property="og:description"
            content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
          />
          </Head>
          <Header />
          <HomeHero/>
          <Experiencias />
          <Projetos projetos={projetos} />
          <FormContato />
          <Footer />
      </ HomeContainer>
    </div>
  );
}
