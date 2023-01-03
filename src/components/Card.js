import React from "react";
import styled from "styled-components";
import { useReducer } from "react";
import TYPES from "../actions/shoppingActions"



const Card = ({key, nombre, tipo, precio, src, modalOpen, setModalOpen}) => {

    // const handleModal = () => {dispatch({type: TYPES.OPEN_MODAL})}
    return (

        

        <CardContenedor key={key}>
            <Favorito>
                <svg>
                    <path d="M30.4 16q1.5-1.3 2-2.6t.6-3q0-1.4-.7-3T30.6 5q-1.4-1.2-2.4-1.6T25.8 3q-1.5 0-3 .6t-2.6 2l-2 2-2.3-2q-1.8-1.4-3-2T10.2 3t-2.6.4T5.3 5q-1 .7-1.6 2.4t-.7 3q0 1.4.6 3T5.4 16L18 28l12.4-12zM0 10.5q0-1.7.8-4t2.6-3.8Q5 1.2 6.7.7t3.6-.7q2 0 3.8.8t4 2.7q2-2 4-2.7t4-.8 3.4.6 3.3 2Q34.3 4 35 6.3t1 4-.6 4-3 4L18 32 3.4 18.2Q1 16 .4 13.7T0 10.4z" ></path>
                </svg>
            </Favorito>
            
            <CardFigcaption onClick={"ACA AGREGA EL USESTATE POR AHORA HASTA QUE HAGAS BIEN EL REDUCTOR"}>
                <img src={src} alt={tipo} style={{width:'100%'}}/>
                <Nombre>{nombre}</Nombre>
                <Tipo>{tipo}</Tipo>
                <Precio>${precio}</Precio>
            </CardFigcaption>
            {/* <Button openCardsModal={openCardsModal}></Button> */}
        </CardContenedor>
    )
}
export default Card


const CardContenedor= styled.figure`
    width:28rem;
    height:45rem;
    border: 0.15rem solid var(--orange);
    box-sizing: border-box;
    text-align:center;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items:center;
    border-radius:1rem;
    overflow:hidden;
    margin:4rem;
    padding-top: 1rem;
    padding-bottom:4rem;
    box-shadow:rgba(0, 0, 0, 0.3) 6px 8px 5px;
`

const CardFigcaption = styled.figcaption`
position: relative;
top:-20px;
width:100%;
display: flex;
flex-direction: column;
align-items: center;
font-weight: bold;
padding-bottom: 0.1rem;
`
const Favorito = styled.div`
    fill: transparent;
    cursor: pointer;
    height: 45px;
    width: 45px;
    padding-top: 10px;
    position: relative;
    left: 100px;
    top: 30px;
    z-index: 30;

    :hover {
        fill: var(--orange);
        transition: fill .2s;}
        
    :active {
        transform: scale(1.25, 1.25);
        transition: transform .2s;
}
`
const Nombre = styled.h3`
    padding-top: 25px;
    color: var(--dark);
    font-family: var(--title-font);
    font-weight: bold;
    font-size: 20px;
`
const Tipo = styled.p`
    color: var(--dark);
    font-family: var(--title-font);
    font-size: 15px;
`

const Precio = styled.p`
    color: var(--orange);
    font-size: 20px;
`