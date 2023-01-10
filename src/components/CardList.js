import styled from "styled-components";
import Card from "./Card";

import axios from "axios";
import { useReducer, useEffect } from "react";
import { TYPES } from "../actions/shoppingActions";
import {shoppingInitialState, shoppingReducer} from "../reducer/shoppingReducer";


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

        const productsList = await resProducts.data,
            cartItems = await resCart.data;

        dispatch({type: TYPES.READ_STATE, payload: [productsList, cartItems] });
    };

    useEffect(() => {
        updateState();
    }, []);

    
    
    return (
        <CardsContainer>
            {products.map((product) =>(
            <Card key={product.id} product={product} /> ))}
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
