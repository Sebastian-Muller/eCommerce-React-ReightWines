import React from "react";



const CartItem = ({item, delFromCart}) => {
    
    const {id, nombre, precio, quantity} = item
    
    return (
        <>
        <div style={{
            margin:"20px 20px"
        }}>
            <div style={{
                width:"100px",
                height:"100px",
                backgroundColor:"whitesmoke",
                margin:"20px 20px",
                }}><h3>IMAGEN</h3></div>
            <h4>{nombre}</h4>
            <h5>${precio}x {quantity} = ${precio*quantity}</h5>
            <button onClick={()=>delFromCart(id, false)}>Eliminar uno</button>
            <button onClick={()=>delFromCart(id, true)}>Eliminar todos</button>
            </div>
        </>
    )
}

export default CartItem









