import { useContext } from "react";
import { ProductsContext } from "../context/ProductsProvider";
import styled from "styled-components";



const Button = ({product, bgColorBoton}) => {

  const {addToCart} = useContext(ProductsContext);

  const {id} = product;

const handleAddtoCart = () => {
  addToCart(product.id)
}

  return (
    <>
      <BotonCard bgColorBoton={bgColorBoton = "#7A7A78"}>
      Agregar al Carrito
      </BotonCard>
    </>
  )
}

export default Button

const BotonCard = styled.button`
  color:white;
  background-color: ${props => props.bgColorBoton};
  padding: 1rem 2rem;
  position: relative;
  top: -10px;
  border-radius: 0.5rem;
  border: none;
  font-family: 'Righteous', cursive;
  font-size: 15px;
  text-transform: uppercase;
  width:70%;
  box-shadow: 0 8px 8px 0 rgba(0,0,0,0.2), 0 6px 12px 0 rgba(0,0,0,0.19);

  @media screen and (min-width: 1024px){
  &:hover{background-color: #999898 !important;}}

  &:active {
    background-color: var(--orange) !important;
    box-shadow: none;
    transform: translateY(4px);}
    display: flex;
`
