import React from "react";

const Button = ({openCardsModal}) => {
  return (
    <>
        <button style={{
                    color:'white',
                    backgroundColor: 'var(--orange)',
                    padding: '1rem 2rem',
                    borderRadius: '0.5rem',
                    border: 'none',
                    fontSize: '2rem',
                    textTransform: 'uppercase', 
                    width:'70%',
                    }} onClick={openCardsModal}>
            Comprar
        </button>
    </>
  )
}

export default Button