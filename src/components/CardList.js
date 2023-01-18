import styled from "styled-components";
import Card from "./Card";



import { useContext } from "react";

import { ProductsContext } from "../context/ProductsProvider"


const CardList = () => {

    const { products } = useContext(ProductsContext);



    return (
        <CardsContainer>
            {products.map((product) => (
                <Card key={product.id} product={product} />))}
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
