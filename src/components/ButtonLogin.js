import React from 'react'
import styled from 'styled-components'

const ButtonLogin = () => {
  return (
    <StyledButton>Ingresar</StyledButton>
  )
}

export default ButtonLogin


const StyledButton = styled.button`
background: rgb(239, 132, 86);
text-transform: uppercase;
letter-spacing: 0.2rem;
width: 45%;
height: 5rem;
border: none;
color: rgb(251,243,232);
border-radius: 2rem;
font-family: var(--text-font);
cursor: pointer;

@media screen and (min-width: 1200px){
  width: 30%;
}

`