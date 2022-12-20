import React from "react"
import styled from "styled-components"
import video from "../assets/video/videoHome.mp4"



const VideoHome = () => {
    return (
        <VideoHomeContainer>
            <video src={video} alt="Reight" width="100%" height="100%" controls autoplay loop volumnen="0.5" />
        </VideoHomeContainer>
    )
}

export default VideoHome


const VideoHomeContainer = styled.div`
width: 100%;
max-height: 100vh; 
`



