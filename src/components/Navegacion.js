import { NavLink } from "react-router-dom"
import { useState } from "react"
import styled from "styled-components"
import logoNav from "../assets/images/logoNav.webp"
import BotonHamburguesa from "./BotonHamburguesa"



const Navegacion = () => {

  const [clicked, setClicked] = useState (false)


  return (
    <NavContenedor>

      <LogoContenedor>
        <NavLink to="/" className="navItem"><img src={logoNav} alt="Reight" height="90px" width="100px" /></NavLink>
      </LogoContenedor>

      <LinksContenedor open={setClicked}> 
          <NavLink to="/bebidas" className="navItem">Bebidas</NavLink>
          <NavLink to="/nosotros" className="navItem">Nosotros</NavLink>
          <NavLink to="/gift" className="navItem">Gift</NavLink>
          <NavLink to="/contacto" className="navItem">Contacto</NavLink>
      </LinksContenedor>

      <IconosContenedor>
        <NavLink to="/login"><i class="fa-solid fa-user"></i></NavLink>
        <NavLink to="/carro"><i class="fa-solid fa-cart-shopping"></i></NavLink>
        <BotonHamburguesa onClick={()=>setClicked(!clicked)}/>
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
  padding: 3%;
  position: relative;
 
`

const LogoContenedor = styled.div`
padding-top: 1%;
`

const LinksContenedor = styled.div`
   
    background-color: var(--orange);
    position: absolute;
    top: 15vh;
    left: 0;
    width: 100%;
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap:10px;
    padding: 10% 0;
    

    @media screen and (min-width: 768px){
      position: initial;
      height: 15vh;
      flex-direction: row;
      justify-content: space-evenly;
      padding: 1rem;
      top: 0vh;
     
    
    }
  `

  const IconosContenedor = styled.div`
  display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    gap: 60px;
  `




