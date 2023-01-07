import styled from "styled-components"
import login from "../assets/images/login.webp"







const Login = () => {
  return (
   
      <FondoBlanco>
        <div>
          <h1>Bienvenidos</h1>
        </div>

             


      </FondoBlanco>
    
   





     
    
  )
}

export default Login

const LoginContainer = styled.div`
width: 100%;
height: 100%;
background-image: url(${login});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
padding-left: 135%;
display: flex;
align-items: center;
justify-content: center;
z-index: -1;

`

const FondoBlanco = styled.div`
width: 30vw;
height: 80vh;
background: rgb(251,243,232, 60%);
border-radius: 10px;
border-color: aqua;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: rgb(0, 0, 0);
backdrop-filter: blur(8.5px);
gap: 15px;
position: absolute;

`;

const InputContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
z-index: 9999;
`