import React from 'react';
import { useParams } from "react-router-dom";
import houses from "../houses";
import SliderItem from "./SliderItem"

import '../styles/Slider.css'




function Slider({ picture }) {

    let { id } = useParams();

    const result = houses.filter(
        house => house.id === id);

    const selectedHouse = result[0];

    return (

        <div className='slider-inner'>
            {selectedHouse.pictures.map((picture, index) => (
                <SliderItem picture={picture} key={index} />
            ))}
        </div>

    )

}

export default Slider;