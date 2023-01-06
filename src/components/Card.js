import React from "react";
import Button from "./Button";
import styled from "styled-components";
import { useReducer } from "react";
import { TYPES } from "../actions/shoppingActions";
import { shoppingInitialState, shoppingReducer } from "../reducer/shoppingReducer";



const Card = ({key, nombre, tipo, precio, image, modalOpen, }) => {

    const imagenes = require.context("../assets/images", true);

    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)
    const handleModalOpen = () => {dispatch({type: TYPES.OPEN_CARD_MODAL})};
    const handleModalClose = () => {dispatch({type: TYPES.CLOSE_CARD_MODAL})}
    return (

        

        <CardContenedor key={key}>
            <Favorito>
                <svg>
                    <path d="M30.4 16q1.5-1.3 2-2.6t.6-3q0-1.4-.7-3T30.6 5q-1.4-1.2-2.4-1.6T25.8 3q-1.5 0-3 .6t-2.6 2l-2 2-2.3-2q-1.8-1.4-3-2T10.2 3t-2.6.4T5.3 5q-1 .7-1.6 2.4t-.7 3q0 1.4.6 3T5.4 16L18 28l12.4-12zM0 10.5q0-1.7.8-4t2.6-3.8Q5 1.2 6.7.7t3.6-.7q2 0 3.8.8t4 2.7q2-2 4-2.7t4-.8 3.4.6 3.3 2Q34.3 4 35 6.3t1 4-.6 4-3 4L18 32 3.4 18.2Q1 16 .4 13.7T0 10.4z" ></path>
                </svg>
            </Favorito>
            
            <CardFigcaption onClick={handleModalOpen}>
                <img src={imagenes(`./${image}`)} alt={tipo} style={{width:'100%'}}/>
                <Nombre>{nombre}</Nombre>
                <Tipo>{tipo}</Tipo>
                <Precio>${precio}</Precio>
            </CardFigcaption>
            
            <ModalArticle className={`modal ${state.openCardModal && "is-open"}`}>
                <ModalContainer key={key} /*style={{ backgroundColor:{bgColor} }}*/ >
                    <ModalClose onClick={handleModalClose}>X</ModalClose>
                    <Img src={imagenes(`./${image}`)} alt={tipo} />
                    <h3>{nombre}</h3>
                    <p>{tipo}</p>
                    <PrecioModS>$ {precio}</PrecioModS> 
                    <h3>Viñedos</h3>
                    <p>Edad: 15 años<br/> Rendimiento: 120 qq/ha<br/>Fermentacion: Tanques de acero inoxidable<br/> Conservación : En vasijas de concreto.</p>
                    <Button /*href={href}*/></Button>
                </ModalContainer>
            </ModalArticle>
        </CardContenedor>
    )
}
export default Card


/**** Styles Cards ****/
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


/**** Styles Modal *****/
const ModalArticle = styled.article`
    position: fixed;
    z-index: 999;
    /* top: 0; */
    /* left: 0; */
    width: 100%;
    min-height: 100vh;
    background-color: var(--dark25);
    display: none;
    justify-content: center;
    align-items: center;
`

const ModalContainer = styled.div`
    position: relative;
    background-color: white;
    box-sizing: content-box;
    width: 35rem;
    height: 80vh;
    padding: 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 0.15rem solid var(--orange);
    border-radius: 1rem;
    justify-content: space-evenly;
    
`

const ModalClose = styled.button`
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 2rem;
    height: 2rem;
    background-color: transparent;
    border-radius: 5px;
    border-color: var(--orange75);
    color: var(--orange75);
    font-weight: bold;
`
const Img = styled.img`
    width: 300px;
    height: 70%;

`
const PrecioModS = styled.p`
    color: var(--orange);
    font-family: var(--title-font);
    font-weight: 600;
    font-size: 20px;
    padding-top: 10px;
    /* display: flex;
    align-items: center; */
`
// const PrecioMod = styled.p`
//     color: var(--orange);
//     font-family: var(--price-font);
//     font-weight: 600;
//     font-size: 30px;
//     padding-top: 10px;
//     display: flex;
//     align-items: center;

// `