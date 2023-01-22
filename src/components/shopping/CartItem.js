// import { getAllByDisplayValue } from "@testing-library/react";
import {useContext} from "react"
import {ProductsContext} from "../../context/ProductsProvider"
import styled from 'styled-components'
import { Link } from "react-router-dom"


const CartItem = ({item}) => {

  

    const imagenes = require.context("../../assets/images", true);
    const {nombre, precio, quantity, tipo, image} = item


    return (
        <ItemCarrito>
            <Image>
                <img src={imagenes(`./${image}`)} alt={tipo} height="110px" width="auto"/>
            </Image>
            <Text>
                <Nombre><Text>{nombre} </Text></Nombre>
                <Tipo><Text>{tipo} 750ml</Text></Tipo>
            </Text>
            <Precio>
                <div>${`${precio} x ${quantity}`}</div>
                <div> Total ${`${precio*quantity}`}</div>
            </Precio>
            <CounterContainer>
                <ButtonContainer>
                    <ButtonMenos>-</ButtonMenos>
                    <ButtonCero>0</ButtonCero>
                    <ButtonMas>+</ButtonMas>
                </ButtonContainer>
                <Link to="/carro" className="modCart">
                    <ButtonClear>
                        Eliminar Todos
                    </ButtonClear>
                </Link>
            </CounterContainer>

        </ItemCarrito>
    )    
    // return (
    //     <>
    //     <div style={{
    //         margin:"20px 20px"
    //     }}>
    //         <div style={{
    //             width:"100px",
    //             height:"100px",
    //             backgroundColor:"whitesmoke",
    //             margin:"20px 20px",
    //             }}><img src={imagenes(`./${image}`)} alt={tipo} style={{ width: '100%' }} />
    //         </div>
    //         <h4>{nombre}</h4>
    //         <h5>{`${precio} x ${quantity} = ${precio*quantity}`}</h5>
    //         <button onClick={()=>delFromCart(item.id)}>Eliminar uno</button>
    //         <button onClick={()=>delFromCart(item.id, true)}>Eliminar todos</button>
    //         </div>
    //     </>
    // )
}

export default CartItem

const ItemCarrito = styled.div`
  width: 53vw;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid grey;
  margin-bottom: 0.1rem;
  padding: 3%;
  position: relative;
  bottom: 35px;
  @media screen and (min-width: 1200px){
    flex-direction: row;   
    justify-content: space-evenly; 
  }
`

 const Image = styled.div`
  width: 25%;
  height: 25%;
  padding-right: 30%;
  @media screen and (min-width: 768px){
    padding-right: 25%;
  }
 `

const Text = styled.p`
    text-align: center;
    color: var(--dark65);
    position: relative;
    left: -25px;
`
const Nombre = styled.h3`
padding-top: 25px;
color: var(--dark);
font-family: 'Carter One', cursive;
font-size: 21px;
`

const Tipo = styled.p`
color: var(--dark);
font-family:'Satisfy', cursive;
font-size: 18px;
font-weight: 200;
`
const Precio = styled.p`
font-family:'EB Garamond', serif;
font-size: 18px;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
position: relative;
top: 10px;
color: var(--dark65);

div {
position: relative;
width: 150px;
font-weight: 600;
}
`
const CounterContainer = styled.div`
  height: 20%; 
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.3px;
  padding-top: 15px;

  div {
    display: flex;
    flex-direction: row;
  }
`
const ButtonContainer = styled.div`
    position: relative;
    left: 35px;
    display: flex;
    align-items: baseline;
   
`
const ButtonMenos = styled.button`
    background: transparent;
    color: var(--orange);
    font-size: 2rem;
    width: 25px;
    height: 25px;
    margin: 5px;
    border-radius: 0.5rem;
    border: solid 2px  var(--dark80) ;
    font-family: "Nunito", sans-serif;
    font-size: 15px;
    text-align: center;
    font-weight: bold;
    position: relative;
    top: 15px;
`

const ButtonCero = styled.button`
    background: transparent;
    color: var(--orange);
    font-size: 2rem;
    width: 25px;
    height: 25px;
    margin: 5px;
    border-radius: 0.5rem;
    border: solid 2px  var(--dark80) ;
    font-family: "Nunito", sans-serif;
    font-size: 15px;
    text-align: center;
    font-weight: bold;
    position: relative;
    top: 15px;
`

const ButtonMas = styled.button`
    background: transparent;
    color: var(--orange);
    font-size: 2rem;
    width: 25px;
    height: 25px;
    margin: 5px;
    border-radius: 0.5rem;
    border: solid 2px  var(--dark80) ;
    font-family: "Nunito", sans-serif;
    font-size: 15px;
    text-align: center;
    font-weight: bold;
    position: relative;
    top: 15px;
`
const ButtonClear = styled.div`
    color:white;
    background-color: var(--orange);
    margin: 10px;
    padding: 5px;
    position: relative;
    top: 25px;
    left: 35px;
    border-radius: 0.5rem;
    border: none;
    font-family: "Nunito", sans-serif;
    font-size: 12px;
    text-align: center;
    width:auto;
    height: 28px;
    box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 5px 5px 0 rgba(0,0,0,0.19);

  @media screen and (min-width: 1024px){
  &:active {
    background-color: var(--orange) !important;
    color: var(--beige);
    box-shadow: none;
    transform: translateY(4px);
    transition: 0.15s;
    }
  }
`






