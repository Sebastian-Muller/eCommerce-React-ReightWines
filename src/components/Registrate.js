import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import loginFondo from "../assets/images/loginFondo.webp"
import ButtonRegistrate from './ButtonRegistrate';
import { Link } from 'react-router-dom';


const Registrate = ({login, setLogin}) => {

  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confirmarPass, setConfirmarPass] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();


  }

  return (

    <LoginContainer>
        <FondoBlanco>
            <InputContainer onSubmit={handleSubmit}>
                <Input value={usuario} onChange={(e) => setUsuario(e.target.value)} type="text" placeholder="Crear Usuario"/>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="E-mail"/>
                <Input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Crear Contraseña"/>
                <Input value={confirmarPass} onChange={(e) => setConfirmarPass(e.target.value)} type="password" placeholder="Repetir contraseña"/>
            </InputContainer>
            <ButtonContainer>
               <ButtonRegistrate type="submit"/>
            </ButtonContainer>
            <LinkLogin>
            <p>¿Tenés cuenta?  <Link onClick={()=>setLogin(true)} className="link">Ingresá aquí</Link></p> 
            </LinkLogin>

        </FondoBlanco>
    </LoginContainer>
  )
}

export default Registrate


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
box-shadow: 0 3px 5px 0 rgba(31, 38, 135, 0.37);
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
  gap: 5px;
}

@media screen and (min-width: 1200px){
  padding-top: 0%;

}
`;

const InputContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
height: 70%;
width: 100%;
gap: 25px;
font-family: var(--text-font);
padding-top: 5%;

@media screen and (min-width: 1200px){
  padding-top: 3%;
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
    box-shadow: 0 0 0 0.2rem rgb(255, 255, 255);
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
padding-top: 5%;

@media screen and (min-width: 1200px){
  padding-top: 3%;
}
`;

const LinkLogin = styled.div`
width: 100%;
color: rgb(0, 0, 0);
font-size: 2rem;
letter-spacing: 3px;
font-family: var(--text-font);
text-align: center;
padding-top: 5%;

.link{
  color: rgb(0, 0, 0);
  font-family: var(--text-font);
  font-size: 2rem;
  text-decoration: none;
  font-weight: bold;
}
`;