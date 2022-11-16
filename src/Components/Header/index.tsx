import { useState, useEffect } from 'react';
import {  AiOutlineWhatsApp } from 'react-icons/ai';
import { Phone, WhatsApp} from "@material-ui/icons";
import NavLink from './NavLink';
import { Container } from './styles';

function Header() {
  
  const [open, setOpen] =  useState(false);

  return (
    <Container>
      <ul>
        <img src="https://i.ibb.co/XJbTxdy/Qualifik-removebg-preview.png" alt="Logo Qualifik" style={{ width: "200px"}} />
        {/*<NavLink title="Qualifik" path="/" />
         <NavLink title="Win" path="/projetos" includes /> */}
      </ul>
      <WhatsApp style={{marginLeft:"100px"}}/> +55 38 99806-7022
    </Container>
  );
}

export default Header;