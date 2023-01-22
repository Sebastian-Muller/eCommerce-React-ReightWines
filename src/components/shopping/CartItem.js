    import {useContext} from "react"
import {ProductsContext} from "../../context/ProductsProvider"
import styled from "styled-components";




const CartItem = ({item}) => {

    const {delFromCart} = useContext(ProductsContext)

    const imagenes = require.context("../../assets/images", true);
    const {nombre, precio, quantity, tipo, image} = item
    
    return (
        <>
            <ProductContainer>
                <ProductItem>
                    <div className="product__img">
                        <img src={imagenes(`./${image}`)} alt={tipo} style={{ width: '100%' }} />
                    </div>

                    <div className="product__info">

                        <div className="product__info--details">
                            <h4>{nombre}</h4>
                            <h5>{`${precio} x ${quantity} = ${precio*quantity}`}</h5>
                        </div>

                        <div className="product__info--btns">
                            <button onClick={()=>delFromCart(item.id)}>Eliminar uno</button>
                            <button onClick={()=>delFromCart(item.id, true)}>Eliminar todos</button>
                        </div>
                    </div>
                </ProductItem>
            </ProductContainer>
        </>
    )
}

export default CartItem

const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 1rem;
`;

const ProductItem = styled.div`
    // border: 1px solid;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-radius: 16px;
    background-color: whitesmoke;

    .product__img{
        max-width: 20rem;
        margin: auto;
    }

    .product__info{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        text-align: center;
    }

    .product__info--details h4{
        font-size: 2.5rem;
        margin-bottom: 1.5rem
    }
    .product__info--details h5{
        font-size: 1.5rem;
    }

    .product__info--btns{
        display: flex;
        justify-content: center;
        gap: 2rem;

        button{
            border: none;
            background-color: transparent;
            font-size: 1.3rem
        }

        button:hover{
            text-decoration: underline;
        }
    }
`;









