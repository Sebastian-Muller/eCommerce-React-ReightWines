import React, { useReducer, useEffect } from 'react'
import styled from 'styled-components'
import { TYPES } from '../../actions/shoppingActions'
import { shoppingInitialState, shoppingReducer } from '../../reducer/shoppingReducer'
import axios from 'axios'
import CartItem from './CartItem'
import vino from "../../assets/images/cabernet.webp"



const ShoppingCart = () => {
  
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)
  
  
  const {products, cart } = state;

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
    <CarritoContainer>
        <FondoBlanco>
          <Titulo>
            <h1>Carrito de compras</h1>
          </Titulo>
            <ItemCarrito>
              <Image>
                <img src={vino} alt="vino" height="100px" width="120px"/>
              </Image>
              <Item>
                <p>Veuve Clicquot - Rosado de champagne 750ml</p>
              </Item>
              <Precio>$45.900</Precio>
              <CounterContainer>
                <ButtonMenos>-</ButtonMenos>
                <ButtonCero>0</ButtonCero>
                <ButtonMas>+</ButtonMas>
              </CounterContainer>
            </ItemCarrito>

            <ItemCarrito>
              <Image>
                <img src={vino} alt="vino" height="100px" width="120px"/>
              </Image>
              <Item>
                <p>Veuve Clicquot - Rosado de champagne 750ml</p>
              </Item>
              <Precio>$45.900</Precio>
              <CounterContainer>
                <ButtonMenos>-</ButtonMenos>
                <ButtonCero>0</ButtonCero>
                <ButtonMas>+</ButtonMas>
              </CounterContainer>
            </ItemCarrito>
          
              <div>
                 {cart.map((item, i) => <CartItem key={i} item={item} delFromCart={delFromCart} />)}
              </div>

              <ButtonsContainer>
                  <ButtonLimpiarCarro onClick={clearCart}>Limpiar Carrito</ButtonLimpiarCarro>

                  <ButtonFinalizarCompra>Finalizar Compra</ButtonFinalizarCompra>
              </ButtonsContainer>
            
        </FondoBlanco>
      </CarritoContainer>
  )
}

export default ShoppingCart

const CarritoContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
background: rgb(251,243,232);
gap: 50px;
`


const FondoBlanco = styled.div`
width: 80vw;
height: 90%;
background: rgb(255, 255, 255);
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
border-radius: 10px;
border-color: aqua;
box-shadow: 0 3px 5px 0 rgba(31, 38, 135, 0.37);
display: flex;
flex-direction: column;
align-items: center;
color: rgb(0, 0, 0);
backdrop-filter: blur(8.5px);
gap: 8px;
margin-bottom: 10%;
margin-top: 10%;
`

const Titulo = styled.div`
  width: 90%;
  height: 10%;
  border-bottom: 1px solid grey;
  margin-bottom: 0.1rem;
  padding: 4%;

h1{
  text-align: center;
  color: var(--dark);
  font-size: 3rem;
  font-weight: 700;
  font-family:  var(--title-font);
  color: var(--orange);
}
`
const ItemCarrito = styled.div`
width: 90%;
height: 80%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
border-bottom: 1px solid grey;
margin-bottom: 0.1rem;
padding: 3%;

@media screen and (min-width: 1200px){
  flex-direction: row;
  justify-content: space-evenly;
}
`

const Image = styled.div`
width: 20%;
height: 20%;
padding-right: 30%;

@media screen and (min-width: 768px){
  padding-right: 25%;
}
`

const Item = styled.div`
width: 80%;
height: 20%;
padding-top: 20px;

@media screen and (min-width: 1200px){
  padding-right: 15%;
} 

p{
  color: (var(--dark));
  font-family: var(--text-font);
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
}
`

const Precio = styled.div`
width: 20%;
height: 15%;
color: (var(--dark));
font-family: var(--text-font);
font-size: 2rem;
font-weight: bold;
padding-top: 35px;

@media screen and (min-width: 1200px){
  padding-top: 25px;
  padding-right: 5%;
} 
`

const CounterContainer = styled.div`
height: 20%;
text-align: center;
display: flex;
flex-direction: row;
justify-content: center;
gap: 0.3px;
padding-top: 15px;
`

const ButtonMenos = styled.button`
width: 50px;
height: 50px;
color: var(--dark);
font-size: 3rem;
background: rgb(255, 255, 255);
border-radius: 15%;
color: var(--orange);
`

const ButtonCero = styled.button`
width: 50px;
height: 50px;
color: var(--dark);
font-size: 2rem;
background: rgb(255, 255, 255);
border-radius: 15%;
font-family: var(--text-font);
font-weight: 600;
`

const ButtonMas = styled.button`
width: 50px;
height: 50px;
color: var(--dark);
font-size: 3rem;
background: rgb(255, 255, 255);
border-radius: 15%;
color: var(--orange);
`
const ButtonsContainer = styled.div`
height: 30%;
text-align: center;
display: flex;
flex-direction: row;
justify-content:space-evenly;
gap: 20px;
padding-top: 5px;
margin-bottom: 25px;

@media screen and (min-width: 1200px){
  gap: 150px;
}
`
const ButtonLimpiarCarro = styled.button`
width: 200px;
height: 55px;
color: var(--orange);
font-size: 2rem;
background: rgb(255, 255, 255);
border-radius: 1rem;
font-family: var(--text-font);
font-weight: 400;
margin-top: 10px;
`

const ButtonFinalizarCompra = styled.button`
width: 200px;
height: 55px;
background: var(--orange);
color: white;
font-size: 2rem;
border-radius: 1rem;
font-family: var(--text-font);
font-weight: 700;
margin-top: 10px;
`