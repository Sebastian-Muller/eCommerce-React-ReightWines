import { NavLink } from "react-router-dom"
import { useState } from "react"
import styled from "styled-components"
import logoNav from "../assets/images/logoNav.webp"
import BotonHamburguesa from "./BotonHamburguesa"



const Navegacion = () => {
  
  const [expand, setExpand] = useState(false)



  return (
    <NavContenedor>

      <LogoContenedor>
        <NavLink to="/" className="navItem" onClick={()=> setExpand (!expand)}>
          <img src={logoNav} alt="Reight" height="90px" width="100px" /></NavLink>
      </LogoContenedor>
      
      <LinksContenedor open={expand}>
        <NavLink to="/bebidas" className="navItem" onClick={()=> setExpand (!expand)}>Bebidas</NavLink>
        <NavLink to="/nosotros" className="navItem" onClick={()=> setExpand (!expand)}>Nosotros</NavLink>
        <NavLink to="/gift" className="navItem" onClick={()=> setExpand (!expand)}>Gift</NavLink>
        <NavLink to="/contacto" className="navItem" onClick={()=> setExpand (!expand)}>Contacto</NavLink>

      </LinksContenedor>
  

      <IconosContenedor >
        <NavLink to="/login"><i class="fa-solid fa-user"></i></NavLink>
        <NavLink to="/carro"><i class="fa-solid fa-cart-shopping"></i></NavLink>

        <div onClick={()=> setExpand (!expand)}>

          <BotonHamburguesa />
        </div>
      </IconosContenedor>
      
    </NavContenedor>
  )
}

export default Navegacion

const NavContenedor = styled.nav`
  background-color: var(--orange);
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1%;
  position: relative;
`

const LogoContenedor = styled.div`
padding-top: 1%;
width:15%;
`

const LinksContenedor = styled.div`

    background-color: var(--orange);
    position: absolute;
    left: ${({open}) => (open ? "0" : "-100%")};
    width: 100%;
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap:10px;
    padding: 10% 0;
    transition: 0.5s all ease;
    z-index:9999;
    
    @media screen and (min-width: 768px){
      position: initial;
      height: 15vh;
      flex-direction: row;
      justify-content: space-evenly;
      padding: 1rem;
      top: 0vh;
    }
    
    }
  `

const IconosContenedor = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--dark);
  `
