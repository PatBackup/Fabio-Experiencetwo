import {
    AiOutlineTwitter,
    AiOutlineGithub,
    AiFillLinkedin,
    AiOutlineWhatsApp,
    AiOutlineInstagram,
    AiFillFacebook,
    AiOutlineEnvironment
  } from 'react-icons/ai';
  import { Container } from './styles';
  
  function Footer() {
     function handleRedirect() {
      window.open(url);
    }
  
    function handleScrollTop() {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
    }
  
    return (
      <Container>
        <div className="container">
          <button type="button" onClick={handleScrollTop}>
            <img src="https://i.ibb.co/XJbTxdy/Qualifik-removebg-preview.png" alt="Logo Qualifik" style={{ width: "200px"}} />
          </button>
          <div className="center">
            <AiOutlineEnvironment/> Rua da Agronomia,270 - Montes Claros/MG
          </div>
          <section>
            <AiOutlineTwitter
              onClick={() => handleRedirect('https://twitter.com')}
            />
            <AiOutlineInstagram
              onClick={() => handleRedirect('https://instagram.com')}
            />
            <AiFillLinkedin
              onClick={() => handleRedirect('https://linkedin.com')}
            />
            <AiFillFacebook
              onClick={() => handleRedirect('https://facebook.com')}
            />
          </section>
        </div>
      </Container>
    );
  }
  
  export default Footer;