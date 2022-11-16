/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/pessoa.webp';

function HomeHero() {
  return (
    <Container >
      <img src="https://i.ibb.co/6B6XnN2/linha-de-produ-o.jpg" alt="Minha foto" style={{ width: "100%", height: "135%"}} data-aos="zoom-in"/>
      <div >
        <TextContainer data-aos="fade-up">
          <h1>Qualifik Engenharia</h1>
          <h2>Soluções e Implementação</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="comment"></span>
            <span className="white">Engeheiro Responsável</span> {/* {'\u007B'} */}
            <div>
               <span className="blue">José Fabio Soares</span>
            </div>
            <div>
               <span className="blue"></span>
            </div>
            {/* {'\u007D'} */}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className="purple"></span> {/* {'\u007B'} */}
            <div>
            Localidade:<span className="blue">  Montes Claros - MG</span>
            </div>
            <div>
               <span className="blue"></span>
            </div>
           {/*  {'\u007D'} */}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;