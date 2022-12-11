import "../styles/cardsModal.css";

import React from 'react'

const images = require.context("../assets/images", true);

const CardsModal = () => {
return (
<article className="modal is-open">
    <div className="modal-container">
        <button className="modal-close">X</button>
        <h3>Modal</h3>
        <img src={images('./malbec.webp')} alt="Malbec" style={{width:'40rem'}}/>
        <p>Contenido del modal</p>
    </div>
</article>
)
}

export default CardsModal