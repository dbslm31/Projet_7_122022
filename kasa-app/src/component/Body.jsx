import React from 'react';
import Card from "./Card"
import '../styles/Body.css'
import houses from "../houses"

function createCard(house) {
    return <Card
        key={house.id}
        title={house.title}
        img={house.cover}
    />

}


function Body() {
    return (

        <div className='card-container'>
            {houses.map(createCard)}
        </div>

    )

}

export default Body