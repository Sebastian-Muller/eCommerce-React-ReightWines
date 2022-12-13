import React from "react";
import Button from "./Button";


const Card = ({vinos, openCardsModal}) => {

    const {nombre, tipo, precio, image} = vinos;

    return (
        <figure style={{width:'28rem',
                        height:'45rem',
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
                        paddingTop: '1rem',
                        paddingBottom:'4rem',
                        boxShadow: 'rgba(0, 0, 0, 0.3) 6px 8px 5px',
                        }}>

            <div className="favorite">
                <svg>
                    <path d="M30.4 16q1.5-1.3 2-2.6t.6-3q0-1.4-.7-3T30.6 5q-1.4-1.2-2.4-1.6T25.8 3q-1.5 0-3 .6t-2.6 2l-2 2-2.3-2q-1.8-1.4-3-2T10.2 3t-2.6.4T5.3 5q-1 .7-1.6 2.4t-.7 3q0 1.4.6 3T5.4 16L18 28l12.4-12zM0 10.5q0-1.7.8-4t2.6-3.8Q5 1.2 6.7.7t3.6-.7q2 0 3.8.8t4 2.7q2-2 4-2.7t4-.8 3.4.6 3.3 2Q34.3 4 35 6.3t1 4-.6 4-3 4L18 32 3.4 18.2Q1 16 .4 13.7T0 10.4z" ></path>
                </svg>
            </div>
            <div className="heart"></div>
            <figcaption onClick={openCardsModal} style={{position:'relative', top:'-20px',width:'100%', display: 'flex', flexDirection:'column', alignItems:'center', fontWeight:'bold', paddingBottom:'0.1rem'}}>
            <img src={image} alt="Vino" style={{width:'100%'}}/>
                <h3 style={{color:'var(--dark)'}}>{nombre}</h3>
                <p>{tipo}</p>
                <p style={{color:'var(--orange)'}}>${precio}.-</p>
            </figcaption>
            <Button openCardsModal={openCardsModal}></Button>
        </figure>
    )
}

export default Card