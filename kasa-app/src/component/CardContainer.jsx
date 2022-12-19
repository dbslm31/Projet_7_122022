import React from 'react';
import Card from "./Card"
import '../styles/Card-Container.css'
import houses from "../houses"

function createCard(house) {
    return <Card
        key={house.id}
        id={house.id}
        title={house.title}
        img={house.cover}
    />

}


function cardContainer() {
    return (

        <div className='card-container'>
            {houses.map(createCard)}
        </div>

    )

}

export default cardContainer;