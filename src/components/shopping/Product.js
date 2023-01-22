










export const Product = ({ product, addToCart }) => {

    const { id, nombre, precio} = product;

    return <div>
        <h4>{nombre}</h4>
        <h5>${precio}</h5>
        <button onClick={() => addToCart(id)}>Agregar</button>
    </div>

}





