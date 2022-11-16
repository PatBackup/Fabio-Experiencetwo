import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjetosProps {
  projetos: IProjeto[];
}

function Projetos({ projetos }: ProjetosProps) {
  return (
    <Container>
      <SectionTitle title="Areas de Atuação" />

      <section>
        <ProjetoItem 
          title="Gestão de Projetos" 
          type="Diagnósticos, Treinamentos e Consultoria" 
          img="https://i.ibb.co/1QSd3bc/cervejaria.jpg"
          slug="/GestaoProjetos"
        />
        <ProjetoItem 
          title="Registro no M.A.P.A."  
          type="Plantas, Alvarás, POP's e PPHO's"  
          img="https://i.ibb.co/8xR3DPX/linhas-de-massas.jpg"
          slug="/RegistroMAPA" 
        />
        <ProjetoItem 
          title="Construção Intelectual" 
          type="Elaboração de Embalagem e Rotulagem"  
          img="https://i.ibb.co/s1C1jnL/Getty-Images-1091215168.jpg"
          slug="/ConstrucaoIntelectual"
        />
        <ProjetoItem 
          title="Produção de Software" 
          type="Desenvolvimento de Aplicação Web e Desktop" 
          img="https://i.ibb.co/hWqHcPz/entenda-como-funciona-o-chao-de-frabica.png"
          slug="/ProducaoSoftware"
        />
      </section>

    </Container>
  );
}

export default Projetos;