import { useRouter } from 'next/router';
import Head from 'next/head';
import BannerProjeto from '../Components/BannerProjeto';
import Header from '../Components/Header';
import { ProjetoContainer } from '../styles/ProjetoStyles';
import LoadingScreen from '../Components/LoadingScreen';
import Footer from '../Components/Footer/Footer';


interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjetoProps {
  projeto: IProjeto;
}

export default function Projeto({ projeto }: ProjetoProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <LoadingScreen />;
  }

  return (
    <ProjetoContainer>
        <Head>
          <title>Construção Intelectual | Qualifik Engenharia e Consultoria</title>
          <meta
            name="description"
            content="Empresa que a mais de 10 anos se destaca em qualidade e confiabilidade"
          />
          <meta property="og:image" content="/ogimage.png" />
          <meta property="og:image:secure_url" content="/ogimage.png" />
          <meta name="twitter:image" content="/ogimage.png" />
          <meta name="twitter:image:src" content="/ogimage.png" />
          <meta
            property="og:description"
            content="Empresa que a mais de 10 anos se destaca em qualidade e confiabilidade"
          />
          </Head>

      <Header />
      <BannerProjeto
          title="Produção de Software" 
          type="Desenvolvimento de Aplicação Web e Desktop"
          imgUrl="https://i.ibb.co/THFzfSf/manualbpf.jpg"
      />
  
      <main >
        <p>A qualifik transforma necessidades de automação de processo em realidade através
          de nossos seviços web e desktop, apresentando soluções sob demanda para clientes de 
          diversas áreas que abrangem desde o pós colheita até a entrega do produto final,
          trazendo confiabilidade, agilidade e qualidade aos processos exigidos.
          <br/>
          <br/>
          Trabalhamos com:
          <br/>
          Landing Pages.
          <br/>
          Base de banco dados acessivel local e web.
          <br/>
          Aplicativos.
          <br/>
          Processamento de Dados.
        </p>
        <button type="button">
          <a href="/">Voltar</a>
        </button>
      </main>
      <Footer/>
    </ProjetoContainer>
    
  );
}
