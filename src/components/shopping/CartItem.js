
















import React from 'react'

const CartItem = ({item, delFromCart}) => {
    
    const {id, name, price, quantity} = item
    
    return (
        <div>
            <h4>{name}</h4>
            <h5>${price}x {quantity} = ${price*quantity}</h5>
            <button onClick={()=>delFromCart(id, false)}>Eliminar uno</button>
            <button onClick={()=>delFromCart(id, true)}>Eliminar todos</button>
        </div>
    )
}

export default CartItem









