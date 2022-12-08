import React from "react";
import Button from "./Button"

const Card = () => {
  return (
    <figure style={{width:'27rem',
    height:'40rem',
    border: '0.15rem solid var(--orange)',
    boxSizing: 'border-box',
    textAlign:'center',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems:'center',
    borderRadius:'1rem',
    overflow:'hidden',
    margin:'4rem',
    paddingBottom:'1rem',
    boxShadow: 'rgba(0, 0, 0, 0.3) 6px 8px 5px',
    }}>
        Imagen de la card
        <figcaption>
            <h3>Nombre</h3>
            <p>Descripcion</p>
            <p>Precio</p>
        </figcaption>
        <Button></Button>
    </figure>
  )
}

export default Card