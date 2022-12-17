import React, { useReducer, useEffect } from 'react'
import { TYPES } from '../../actions/shoppingActions'
import axios from 'axios'
import { shoppingInitialState, shoppingReducer } from '../../reducer/shoppingReducer'
import CartItem from './CartItem'
import { Product } from './Product'



const ShoppingCart = () => {
  
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)
  
  const {products, cart} = state;

  const updateState = async () => {
    const ENDPOINT = {
      products: "http://localhost:5000/products",
      cart:"http://localhost:5000/cart"
    }
    const resProducts = await axios.get(ENDPOINT.products),
      resCart = await axios.get(ENDPOINT.cart);

    const productsList= resProducts.data,
    cartItems = resCart.data

      dispatch({type: TYPES.READ_STATE, payload: [productsList, cartItems]})
  }

  useEffect(() => {
    updateState()
  }, [])

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
    <br/>
    <h3>Productos - solo ejemplo, luego se borra</h3>
    <br/>
    <div style={{
      height:"100px",
      width:"100vw",
      display:"flex",
      alignContent:"space-around",
      justifyContent:"center",
      flexFlow:"column wrap",
      backgroundColor:"lightgreen"
    }}>{products.map((product)=> <Product key={product.id} product={product} addToCart={addToCart}/>)}</div>
    <h3 >Carrito</h3>
    <br/>
  <div style={{
      width:"100vw",
      minHeight:"100px",
      display:"flex",
      justifyContent:"space-around",
      flexFlow:"column wrap",
      backgroundColor:"#EF8456"
    }}>{cart.map((item, i) => <CartItem key={i} item={item} delFromCart={delFromCart} />)}</div>
    <br/>
  <button onClick={clearCart}>Limpiar carrito</button>
  </>
  )
}

export default ShoppingCart






