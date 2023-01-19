

const CartItem = ({item}) => {

    const imagenes = require.context("../../assets/images", true);
    const {newItem} = item
    const {nombre, precio, quantity, tipo, image} = newItem
    
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
            <button>Eliminar uno</button>
            <button>Eliminar todos</button>
            </div>
        </>
    )
}

export default CartItem









