import "../styles/cardsModal.css";
import React from 'react'
import Button from "./Button";
import styled from "styled-components";



const CardsModal = ({key, nombre, tipo, precio, src, href, target, modalOpen, setModalOpen}) => {

    return (
    <ModalArticle className={`modal ${modalOpen && "is-open"}`}>
        <ModalContainer key={key} >
            <ModalClose onClick={()=>setModalOpen(!modalOpen)}>X</ModalClose>
            <img src={src} alt={tipo} width= "400px"/>
            <h3>{nombre}</h3>
            <p>{tipo}</p>
            <Precio>${precio}</Precio>
            <h3>Viñedos</h3>
            <p>Edad: 15 años<br/> Rendimiento: 120 qq/ha<br/>Fermentacion: Tanques de acero inoxidable<br/> Conservación : En vasijas de concreto.</p>
            <Button href={href} target={target}></Button>
        </ModalContainer>
    </ModalArticle>
    )}

export default CardsModal

const ModalArticle = styled.article`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
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
    width: 40rem;
    height: 90vh;
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

const Precio = styled.p`
    color: var(--orange);
    font-family: var(--title-font);
    font-weight: 600;
    font-size: 20px;
    padding-top: 10px;
`