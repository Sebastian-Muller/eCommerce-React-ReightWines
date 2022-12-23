import Home from "./Home"
import Carrousel from "./Carrousel"
import styled from "styled-components"








const Main = () => {
    return (
        <main>
        <Home />
        <Carrousel />
        </main>
    )
}

export default Main




const MainContenedor = styled.div`
estilos del contenedor
`;