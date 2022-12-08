import React from "react";
import Button from "./Button"

const Card = ({vinos}) => {

    const {nombre, tipo, precio, image} = vinos

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
            <img src={image} alt="Vino" style={{width:'100%'}}/>
            <figcaption style={{width:'100%', display: 'flex', flexDirection:'column', alignItems:'center', fontWeight:'bold', paddingBottom:'1rem'}}>
            <h3 style={{color:'var(--dark)'}}>{nombre}</h3>
            <p>{tipo}</p>
            <p style={{color:'var(--orange)'}}>${precio}.-</p>
        </figcaption>
            <Button></Button>
        </figure>
    )
}

export default Card