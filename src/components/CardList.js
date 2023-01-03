import Card from "./Card";
import CardsModal from "./CardsModal";
import "../styles/cardsStyles.css";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios"

import Fish from "../assets/images/malbec.webp"
import Ros from "../assets/images/rosado.webp"
import Sauv from "../assets/images/sauvBlanc.webp"
import Walker from "../assets/images/jonniewalker.webp"
import Chivas from "../assets/images/chivas.webp"
import Veuve from "../assets/images/veuveClicquot.webp"
import Mumm from "../assets/images/ghMumm.webp"
import Vista from "../assets/images/altaVista.webp"



const vinos = [
    {
        nombre: "Sexy Fish",
        tipo: "Malbec",
        precio: 2100,
        src: `${Fish}`,
        href: "#",
        target: "_blank",
    },
    {
        nombre: "Pedriel",
        tipo: "Rosado de Malbec",
        precio: 3600,
        src: `${Ros}`,
        href: "#",
        target: "_blank",
    },
    {
        nombre: "Antigal Uno",
        tipo: "Sauvignon Blanc",
        precio: 3000,
        src: `${Sauv}`,
        href: "#",
        target: "_blank",
    },
    {
        nombre: "Jonnie Walker",
        tipo: "Double Black Whisky",
        precio: 11300,
        src: `${Walker}`,
        href: "#",
        target: "_blank",
    },
    {
        nombre: "Chivas Regal 12",
        tipo: "Blended Scotch Whisky",
        precio: 11000,
        src: `${Chivas}` ,
        href: "#",
        target: "_blank",
    },
    {
        nombre: "Veuve Clicquot",
        tipo: "Champagne Rosé",
        precio: 45900,
        src: `${Veuve}`,
        href: "#",
        target: "_blank",
    },
    {
        nombre: "G. H. Mumm Cordon",
        tipo: "Champagne Rouge Brut",
        precio: 12800,
        src: `${Mumm}`,
        href: "#",
        target: "_blank",
    },
    {
        nombre: "Atemporal G. Elevage",
        tipo: "Champagne Brut Nature",
        precio: 15600,
        src: `${Vista}`,
        href: "#",
        target: "_blank",
        
    },
];


const CardList = () => {








    // const productsList = async () =>{
    //     const productsEndpoint = "http://localhost:5000/products"
    //     const endpointCall = await axios.get(productsEndpoint)
    //     const winesList = await endpointCall.data
    //     return winesList
    // }

    // const [id, nombre, tipo, precio] = productsList();

    const [modalOpen, setModalOpen] = useState(false);

    return (
    <CardsContainer>
        {vinos.map(({nombre, tipo, precio, src, href, target}, index) => (
        <CardsModal key={index} nombre={nombre} tipo={tipo} precio={precio} src={src} href={href} target={target} modalOpen={modalOpen} setModalOpen={setModalOpen}></CardsModal>))}
        
        {vinos.map(({nombre, tipo, precio, src}, index) => (
        <Card key={index} nombre={nombre} tipo={tipo} precio={precio} src={src} modalOpen={modalOpen} setModalOpen={setModalOpen} ></Card>))}
    </CardsContainer>
)}

export default CardList


const CardsContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
`;
