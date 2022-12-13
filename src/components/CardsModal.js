import "../styles/cardsModal.css";

import React from 'react'
import Button from "./Button";

const images = require.context("../assets/images", true);

const CardsModal = ({cardsModalOpen, closeCardsModal}) => {
return (
<article className={`modal ${cardsModalOpen && "is-open"}`}>
    <div className="modal-container">
        <button style={{width:'3rem', height:'3rem'}} className="modal-close" onClick={closeCardsModal}>X</button>
        <img src={images('./malbec.webp')} alt="Malbec" style={{width:'40rem'}}/>
        <h3>Sexy Fish</h3>
        <p>Malbec</p>
        <p style={{color: 'var(--orange)'}}>$2100.-</p>
        <br />
        <h3>Viñedos</h3>
        <p>Edad: 15 años<br/> Rendimiento: 120 qq/ha<br/>Fermentacion: Tanques de acero inoxidable<br/> Conservación : En vasijas de concreto.</p>
        <Button></Button>
    </div>
</article>
)
}

export default CardsModal
