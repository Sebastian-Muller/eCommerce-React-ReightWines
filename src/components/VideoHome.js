import styled from "styled-components"








const VideoHome = () => {
    return (
        <VideoHomeContainer>
            <video src="#" alt="Cómo abrir un espumoso" width="100%" height="100%" controls autoplay />
        </VideoHomeContainer>
    )
}

export default VideoHome






const VideoHomeContainer = styled.div`
width: 100%;
max-height: 100vh;
`