import React, { useState } from 'react';
import Slide from "./Slide";
import houses from "../houses"




function createSlide(house) {
    return <Slide
        key={house.id}
        img={house.pictures}

    />

}


function ImageSlider() {
    const [current, setCurrent] = useState(0);
    return (
        <div className='card-container'>
            {houses.map(createSlide)};
        </div>
    )

}

export default ImageSlider;