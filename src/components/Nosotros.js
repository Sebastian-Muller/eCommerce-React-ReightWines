import styled from "styled-components"
import atardecer from "../assets/images/atardecerSol.webp"






const Nosotros = () => {
  return (
    <NosotrosContenedor>
      <img src={atardecer} alt="viñedo" height="100%" width="100%"/>
    </NosotrosContenedor>
    )
}

export default Nosotros


const NosotrosContenedor = styled.div`
width: 100%
height: 85vh
`