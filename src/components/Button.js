import React from "react";

const Button = () => {
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
                    }} >
            Comprar
        </button>
    </>
  )
}

export default Button