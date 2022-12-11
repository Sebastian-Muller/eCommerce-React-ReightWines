import React from 'react'
import styled from 'styled-components'
import logoNav from "../assets/images/logoNav.webp"
import Rutas from "../routes/Rutas.js"




const NavBar = () => {
  return (
    <>
    <NavContenedor>
        <LinksContenedor>
            <IconoLogo>
              <img src= {logoNav} alt="Reight" width="85px" height= "80px"/>
            </IconoLogo>
            <Menu>
              <Rutas/>
              
            </Menu>

        </LinksContenedor>
    </NavContenedor>
    </>
  )
}

export default NavBar


const NavContenedor = styled.div`
width: 100%;
height: 80px;
position: sticky;
top: 0;
z-index: 99;
background-color: var(--orange);`;

const LinksContenedor = styled.div`
margin: auto;
width: 100%;
max-width: 1300px;
height: 100%;
align-items: center;
display: flex;
flex-wrap: wrap;
justify-content: space-between;`;

const IconoLogo = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
align-item: center;`;

const Menu = styled.div`
height: 100%;
display: flex;
justify-content: center;
align-items: center;`;













