

import styled from "styled-components"
import { NavLink } from "react-router-dom"
import logoNav from "../assets/images/logoNav.webp"
import BotonHamburguesa from "./BotonHamburguesa"






const Navegacion = () => {
  return (
    <nav className="navegacion">

      <div className="logo">
        <NavLink to="/" className="navItem"><img src={logoNav} alt="Reight" height="90px" width="100px" /></NavLink>
      </div>
      <LinksDiv className="navLinks">
        <NavLink to="/bebidas" className="navItem">Bebidas</NavLink>

        <NavLink to="/nosotros" className="navItem">Nosotros</NavLink>

        <NavLink to="/gift" className="navItem">Gift</NavLink>

        <NavLink to="/contacto" className="navItem">Contacto</NavLink>
      </LinksDiv>
      <div className="iconos">
        <NavLink to="/login"><i class="fa-solid fa-user"></i></NavLink>
        <NavLink to="/carro"><i class="fa-solid fa-cart-shopping"></i></NavLink>
        <BotonHamburguesa />
      </div>

    </nav>
  )
}

export default Navegacion







const LinksDiv = styled.div`
width:75%;
height:20vh;
display:flex;
justify-content: space-evenly;
align-items:center;

`