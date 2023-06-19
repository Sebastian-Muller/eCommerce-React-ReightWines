import React from "react"
import styled from "styled-components"
import video from "../assets/video/videoHome.mp4"



const VideoHome = () => {
    return (
        <VideoHomeContainer>
            <video src={video} alt="Reight" width="100%" height="100%"  autoPlay loop muted />
        </VideoHomeContainer>
    )
}

export default VideoHome


const VideoHomeContainer = styled.section`
width: inherit;
max-width:100vw;
height: inherit; 
max-height: inherit;
position: relative;
`



