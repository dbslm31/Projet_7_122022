import React from 'react';
import { useParams } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import houses from "../houses";



function House() {
    let { id } = useParams();
    console.log(id)
    const result = houses.filter(
        house => house.id === id)
    const selectedHouse = result[0]
    return (
        <div className="house-container">
            <div className='house-title'>
                {selectedHouse.title}
            </div>
            <ImageSlider />
        </div>
    )

}



export default House;