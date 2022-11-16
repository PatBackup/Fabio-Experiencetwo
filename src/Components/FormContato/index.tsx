import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container } from './styles';

function FormContato() {
  return (
    <Container>
      <SectionTitle
        title={
          <>
            Precisa dos
            <br />
            nossos serviços?
          </>
        }
        description={
          <>
            Preencha o formulário abaixo que
            <br />
            retornaremos em breve
          </>
        }
      />

      <Form />
    </Container>
  );
}

export default FormContato;