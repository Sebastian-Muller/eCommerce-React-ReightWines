import styled from "styled-components"
import Home from "./Home"
import CardList from "./CardList"
import OwlCarrousel from "./OwlCarrousel"
import Nosotros from "./Nosotros"








const Main = () => {
    return (
        <MainDiv>
        <Home />
        <CardList />
        <Nosotros />
        <OwlCarrousel />
        </MainDiv>
    )
}

export default Main




const MainDiv = styled.main`
max-width:100vw;
`