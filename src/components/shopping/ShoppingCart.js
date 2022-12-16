import React, { useReducer } from 'react'
import { TYPES } from '../../actions/shoppingActions'
import { shoppingInitialState, shoppingReducer } from '../../reducer/shoppingReducer'
import CartItem from './CartItem'
import { Product } from './Product'



const ShoppingCart = () => {
  
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)
  
  const {products, cart} = state;


  const addToCart = (id) => {
    dispatch({type:TYPES.ADD_TO_CART, payload: id})
  }

  const delFromCart = (id, all) => {
    if(all){
      dispatch({type: TYPES.REMOVE_ALL_PRODUCTS, payload:id})
    } else {
      dispatch({type: TYPES.REMOVE_ONE_PRODUCT, payload:id})
    }
  };

  const clearCart = () => {
    dispatch({type: TYPES.CLEAR_CART})
    
  }
  

  return (
    <>
    <h2>Carrito de compras</h2>
    <h3>Productos</h3>
    <div>{products.map((product)=> <Product key={product.id} product={product} addToCart={addToCart}/>)}</div>
    <h3>Carrito</h3>
  <div>{cart.map((item, i) => <CartItem key={i} item={item} delFromCart={delFromCart} />)}</div>
  <button onClick={clearCart}>Limpiar carrito</button>
  </>
  )
}

export default ShoppingCart






