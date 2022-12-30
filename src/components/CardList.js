import Card from "./Card";
import CardsModal from "./CardsModal";
import "../styles/cardsStyles.css";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const CardList = async () => {
    const winesApi = await axios.get("http://localhost:5000/products");
    const winesList = await winesApi.data;

    const initialState = false;
    const [cardsModalOpen, setCardsModalOpen] = useState(initialState);

    const openCardsModal = () => setCardsModalOpen(true);

    const closeCardsModal = () => setCardsModalOpen(false);

    return (
        <CardsSection>
            <CardsModal
                cardsModalOpen={cardsModalOpen}
                closeCardsModal={closeCardsModal}
            ></CardsModal>
            {winesList.map((vino) => (
                <Card key={vino.id} vinos={vino} openCardsModal={openCardsModal}></Card>
            ))}
        </CardsSection>
    );
};

export default CardList;

const CardsSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
`;
