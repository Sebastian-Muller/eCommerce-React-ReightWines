import React from "react";
import Card from "./Card";

const x=[1,2,3,4];
 
const CardList = () => {
return (
    <section style={{
        display: 'flex',
        flexWrap: 'wrap',
        width:'150rem',
    }}>
        {x.map((el)=> (<Card></Card>))} 
    </section>
)
}

export default CardList