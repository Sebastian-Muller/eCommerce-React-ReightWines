import styled from "styled-components";
import { useState } from "react";
import Ingresar from "../components/Ingresar.js";
import Registrate from "./Registrate.js";



const Login = () => {


const [login, setLogin] = useState (true)



  return (
   <Contenedor>
      {login ? <Ingresar login={login} setLogin={setLogin}/> : <Registrate login={login} setLogin={setLogin}/>} 
    </Contenedor>
  )
}

export default Login


const Contenedor = styled.div`
width: 100%;
`