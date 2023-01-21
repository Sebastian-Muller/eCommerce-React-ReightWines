import { getAllByDisplayValue } from "@testing-library/react";
import {useContext} from "react"
import {ProductsContext} from "../../context/ProductsProvider"



const CartItem = ({item}) => {

    const {delFromCart} = useContext(ProductsContext)

    const imagenes = require.context("../../assets/images", true);
    const {nombre, precio, quantity, tipo, image} = item
    
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
                }}><img src={imagenes(`./${image}`)} alt={tipo} style={{ width: '100%' }} />
            </div>
            <h4>{nombre}</h4>
            <h5>{`${precio} x ${quantity} = ${precio*quantity}`}</h5>
            <button onClick={()=>delFromCart(item.id)}>Eliminar uno</button>
            <button onClick={()=>delFromCart(item.id, true)}>Eliminar todos</button>
            </div>
        </>
    )
}

export default CartItem









