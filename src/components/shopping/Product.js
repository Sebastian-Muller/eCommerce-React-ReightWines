










export const Product = ({ product, addToCart }) => {

    const { id, name, price} = product;

    return <div>
        <h4>{name}</h4>
        <h5>${price}</h5>
        <button onClick={() => addToCart(id)}>Agregar</button>
    </div>

}





