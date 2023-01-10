import styled from "styled-components"
import atardecerFondo from "../assets/images/atardecerFondo.webp"
import logo from "../assets/images/logoGrandeConFondo.webp"






const Nosotros = () => {
  return (
    <NosotrosContenedor>
      <Logo>
        <img src={logo} alt="Reight" width="100%" height="100%" />
      </Logo>

      <FraseContainer>
        <p>Brindamos el servicio de enólogia a destacados Hoteles y Restaurants de Argentina. <br></br>
           A través de nuestra página web les acercamos una variedad de bebidas, accesorios y delicatessen que fueron seleccionados especialmente para que puedan disfrutarlos.
        </p>
      </FraseContainer>
      
    </NosotrosContenedor>
    )
  }

export default Nosotros


const NosotrosContenedor = styled.div`
width: 100%;
height: 60vh;
background-image: url(${atardecerFondo});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
gap: 30px;

  @media screen and (min-width: 768px){
    height: 70vh;
    gap: 80px;
  }
`

const Logo = styled.div`
width: 200px;
height: 200px;

  @media screen and (min-width: 768px){
    width: 240px;
    height: 240px;
    }

    @media screen and (min-width: 1200px){
    width: 260px;
    height: 260px;
    }
  `

const FraseContainer = styled.div`
width: 98%;
height: 35%;
background: rgb(251, 243, 232, 51%);
border-radius: 10px;


  @media screen and (min-width: 768px){
    width: 90%;
    height: 20%;
    }

    @media screen and (min-width: 1200px){
      width: 65%;
    }

  p{
    text-align: center;
    color: var(--dark);
    font-size: 1.6rem;
    font-family: var(--text-font);
    font-weight: 600;
    padding: 1rem;
  
  }
    @media screen and (min-width: 768px){
    p{
      font-size: 1.6rem;

    }
    }

    @media screen and (min-width: 1200px){
    p{
      font-size: 1.8rem;
      padding: 0.5rem;
    }
  }
  `
