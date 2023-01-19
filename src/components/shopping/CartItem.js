import useContext from "react"
import ProductsContext from "../../context/ProductsProvider"



const CartItem = ({item}) => {

    
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
                }}><h3>IMAGEN</h3>
            </div>
            <h4>{nombre}</h4>
            <h5>{`${precio} x ${quantity} = ${precio*quantity}`}</h5>
            <button>Eliminar uno</button>
            <button>Eliminar todos</button>
            </div>
        </>
    )
}

export default CartItem









