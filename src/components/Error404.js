import styled from "styled-components";
import imgError from "../assets/images/error.png";
import { NavLink } from "react-router-dom"
import { useState } from "react";


const Error404 = () => {

  const [expand, setExpand] = useState(false)
  
  return (
    <ErrorContainer>
      <ErrorImg src={imgError} />
      <ErrorText>
        <Title>¡Buscamos esta página por todos lados!</Title>{" "}
        <Error>Error(404)</Error>
        <Text>
          Pero no hemos conseguido encontrar lo que estás buscando. <br /> Vamos a
          llevarte a un lugar mejor para tí.
        </Text>
        <div>
          <NavLink to="/" className="navItem" onClick={()=> setExpand (!expand)} style={{ textDecoration: 'none' }}>
            <TextBoton>Inicio Reight Wines</TextBoton> 
          </NavLink>
        </div>
      </ErrorText>
    </ErrorContainer>
  );
};

export default Error404;

const ErrorContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ErrorImg = styled.img`
  height: 70%;
  width: auto;
  object-fit: cover;
`
const ErrorText= styled.div`
  display: flex;
  flex-direction: column;
  color: #846565;
`
const Title= styled.h2`
  font-family: "Carter One", cursive;
  font-size: 30px;
`
const Error = styled.p`
  font-family: "Nunito", sans-serif;
`
const Text = styled.p`
  font-family: "Nunito", sans-serif;
  font-size: 15px;
`
const TextBoton = styled.p`
  font-family: "Nunito", sans-serif;
  font-size: 12px;
  border-radius: 5px;
  background-color: #EE4D58;
  color: white;
  padding: 5px;
  width: 25%;
  box-shadow: 0 5px 8px 0 #00000044, 0 6px 8px 0 rgba(0,0,0,0.19);
  text-align: center;

  @media screen and (min-width: 1024px){
  &:hover{color: rgb(233, 199, 199) !important; }}

  &:active {
    background-color: #846565 !important;
    box-shadow: none;
    transform: translateY(4px);}
`



