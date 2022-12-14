import styled from "styled-components"
import VideoHome from "./VideoHome"

import videoReight from "../assets/images/videoReight.mp4"


const Home = () => {
  return (
    <HomeSection>
      <VideoHome />
    </HomeSection>
  )
}

export default Home







const HomeSection = styled.div`
width: 100%;
max-width: 100vw;
display:flex;
`