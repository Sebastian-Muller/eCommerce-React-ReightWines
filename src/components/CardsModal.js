import "../styles/cardsModal.css";

import React from 'react'

const images = require.context("../assets/images", true);

const CardsModal = ({cardsModalOpen, closeCardsModal}) => {
return (
<article className={`modal ${cardsModalOpen && "is-open"}`}>
    <div className="modal-container">
        <button className="modal-close" onClick={closeCardsModal}>X</button>
        <h3>Modal 1</h3>
        <img src={images('./malbec.webp')} alt="Malbec" style={{width:'40rem'}}/>
        <p>Contenido del modal 1</p>
    </div>
</article>
)
}

export default CardsModal
