import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="10 Anos" description="de experiência" />

      <section>
        <ExperienciaItem
          year="Missão"
          title=""
          description="Prestamos assessoria personalizada no ramo de consultoria 
          para a agroindústria e demais empresas que atuam no ramo da produção 
          de alimentos, visando atender com compromisso aos prazos demandados e 
          as necessidades de nossos clientes de forma clara e objetiva, 
          priorizando assim um resultado por produtos e/ou serviços com alto 
          padrão de qualidade."
        />
        <ExperienciaItem
          year="Visão"
          title=""
          description="Ser uma empresa de consultoria referência em tecnologia 
          de alimentos por meio de serviços que atestem o nosso nível de 
          comprometimento e profissionalismo junto aos nossos clientes, 
          visando o desenvolvimento sustentável e agindo com responsabilidade 
          social, perante todos os stakeholders da cadeia produtiva."
        />
        <ExperienciaItem
          year="Valores"
          title=""
          description="A Qualifik preza por uma prestação de serviço eficaz 
          seguindo todas as normas vigentes e legais onde a mesma é executada 
          com qualidade, competência, transparência, compromisso para com o 
          trabalho realizado, desde a gestão, parceiros e colaboradores."
        />
      </section>
    </Container>
  );
}

export default Experiencias;