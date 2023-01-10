import React from 'react'
import { useState } from 'react';
import styled from "styled-components";
import loginFondo from "../assets/images/loginFondo.webp"
import ButtonLogin from "./ButtonLogin";
import fb from "../assets/icons/loginFb.svg";
import ig from "../assets/icons/loginIg.svg";
import twitter from "../assets/icons/loginTwitter.svg";
import linkedin from "../assets/icons/iconoLinkedin.svg"
import gmail from "../assets/icons/iconoGmail.svg"
import { Link } from 'react-router-dom';



const Ingresar = ({login, setLogin}) => {

  const [usuario, setUsuario] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
  }



  return (
  

    <LoginContainer>
      <FondoBlanco>
        <InputContainer onSubmit={handleSubmit}>
            <Input value={usuario} onChange={(e) => setUsuario(e.target.value)} type="text" placeholder="Usuario"/>
            <Input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Contraseña"/>
        </InputContainer>  
          <ButtonContainer>
                <ButtonLogin type="submit" content="Ingresar"/>
          </ButtonContainer>
            <IngresarConRedes>o Ingresá con</IngresarConRedes>
              <LineaHorizontal/>
                <IconosContainer>
                  <div className="iconosRedes">
                    <div>
                      <img src={fb} alt="facebook" width="40px" height="40px"/>
                    </div>
                    
                    <div>
                      <img src={ig} alt="instagram" width="40px" height="40px"/>
                    </div>
                    
                    <div>
                      <img src={twitter} alt="twitter" width="40px" height="40px"/>
                    </div>
                    
                    <div>
                      <img src={linkedin} alt="likedin" width="40px" height="40px" />
                    </div>
                    
                    <div className="gmail">
                      <img src={gmail} alt="gmail" width="40px" height="40px" />
                    </div>
                  </div>
                </IconosContainer>
                <LinkRegistrate> 
                    <p>¿No tenés cuenta?  <Link onClick={()=>{setLogin(false)}} className="link">Registrate</Link></p>                
                </LinkRegistrate>
      </FondoBlanco>
    </LoginContainer>
  )
}

export default Ingresar


const LoginContainer = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-image: url(${loginFondo});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
`

const FondoBlanco = styled.div`
width: 80vw;
height: 80vh;
background: rgb(251,243,232, 60%);
box-shadow: 0 8px 32 px 0 rgba(31, 38, 135, 0.37);
border-radius: 10px;
border-color: aqua;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: rgb(0, 0, 0);
backdrop-filter: blur(8.5px);
gap: 15px;


@media screen and (min-width: 768px){
  gap: 7px;
}

@media screen and (min-width: 1200px){
gap: 0px;
}

`;

const InputContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
height: 30%;
width: 100%;
gap: 25px;
font-family: var(--text-font);
padding-top: 10%;

@media screen and (min-width: 768px){
  padding-top: 6%;
  height: 40%;
}

@media screen and (min-width: 1200px){
  padding-top: 0%;
}
`;

const Input = styled.input`
background: rgb(2, 2, 2, 20%);
box-shadow: 0 3px 5px 0 rgba(31, 38, 135, 0.37);
border-radius: 2rem;
width: 80%;
height: 6rem;
padding: 1.5rem;
border: none;
outline: none;
color: rgb(0, 0, 0, 100%);
font-size: 1.5rem;
font-weight: 100;

&:focus{
    display: inline-block;
    box-shadow: 0 0 0 0.1rem rgb(255, 255, 255);
    border-radius: 1rem;
}
&::placeholder{
    color: rgb(0, 0, 0, 50%);
    font-weight: 100;
    font-size: 1.5rem;
}
`

const ButtonContainer = styled.div`
margin: 1rem 0 2 rem 0;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
font-size: 2rem;
font-family: var(--text-font);
padding-top: 10%;

@media screen and (min-width: 768px){
  padding-top: 8%;

}

@media screen and (min-width: 1200px){
  padding-top: 3%;

}

@media screen and (min-width: 1400px){
  padding-top: 2%;
}
`;

const IngresarConRedes = styled.h5`
cursor: pointer;
color: rgb(0, 0, 0, 70%);
font-size: 1.7rem;
padding-top: 10%;
font-family: var(--text-font);

@media screen and (min-width: 768px){
  padding-top: 9%;
}

@media screen and (min-width: 1200px){
  font-size: 2.2rem;
  padding-top: 3%;
}

@media screen and (min-width: 1400px){
  padding-top: 2%;
}
`;

const LineaHorizontal = styled.hr`
width: 90%;
height: 0.3rem;
border-radius: 0.8rem;
border: none;
margin: 0 0 1rem 0;
background: rgb(0, 0, 0, 90%);
backdrop-filter: blur(25px);
`;

const IconosContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
margin: 2rem 0 3 rem 0;
width: 80%;
height: 5%;

.iconosRedes{
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 30px;
  cursor: pointer;
}

.gmail{
  margin-bottom: 15%;
}
`;

const LinkRegistrate = styled.div`
width: 100%;
color: rgb(0, 0, 0);
font-size: 2rem;
letter-spacing: 3px;
font-family: var(--text-font);
text-align: center;
padding-top: 10%;


.link{
  color: rgb(0, 0, 0);
  font-family: var(--text-font);
  font-size: 2rem;
  text-decoration: none;
  font-weight: bold;
}


@media screen and (min-width: 1200px){
  padding-top: 7%;
}


`