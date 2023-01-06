import styled from "styled-components";

import Card from "./Card";

import axios from "axios";
import { useReducer, useEffect } from "react";
import { TYPES } from "../actions/shoppingActions";
import {
    shoppingInitialState,
    shoppingReducer,
} from "../reducer/shoppingReducer";


const CardList = () => {
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

    const { products, cart } = state;

    const updateState = async () => {
        const ENDPOINT = {
            products: "http://localhost:5000/products",
            cart: "http://localhost:5000/cart",
        };
        const resProducts = await axios.get(ENDPOINT.products),
            resCart = await axios.get(ENDPOINT.cart);

        const productsList = resProducts.data,
            cartItems = resCart.data;

        dispatch({ type: TYPES.READ_STATE, payload: [productsList, cartItems] });
    };

    useEffect(() => {
        updateState();
    }, []);

    const addToCart = (id) => {
        dispatch({ type: TYPES.ADD_TO_CART, payload: id });
    };

    return (
        <CardsContainer>
            {products.map(({ nombre, tipo, precio, image }, index) => (
                <Card
                    key={index}
                    nombre={nombre}
                    tipo={tipo}
                    precio={precio}
                    image={image}
                    addToCart={addToCart}
                    products={products}
                ></Card>
            ))}
        </CardsContainer>
    );
};

export default CardList;

const CardsContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
`;
