import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import Slider from "./Slider";
import Collapse from "./Collapse"
import Tag from "./Tag"
import Rating from "./Rating"
import SliderArrow from "../assets/slider-arrow.svg"
import houses from "../houses";
import '../styles/House.css'


function House() {
    let { id } = useParams();

    const result = houses.filter(
        house => house.id === id);

    const selectedHouse = result[0];


    return (
        <div className='house-container'>
            <div className='image-slider'>
                <img src={SliderArrow} alt='Slider Arrow Left' className='arrow-left' />

                <Slider />

                <img src={SliderArrow} alt='Slider Arrow Right' className='arrow-right' />
            </div>

            <div className='house-columns'>
                <div className="house-left-column">
                    <div className='house-title'>
                        {selectedHouse.title}
                    </div>
                    <div className='house-location'>
                        {selectedHouse.location}
                    </div>
                    <div className="house-tags">
                        {selectedHouse.tags.map((tag, index) => (
                            <Tag
                                tag={tag}
                            />
                        ))}
                    </div>
                    <div className="house-description">
                        <Collapse
                            title="Description"
                            content={selectedHouse.description}
                        />

                    </div>
                </div>

                <div className="house-right-column">
                    <div className='house-host'>
                        <img src={selectedHouse.host.picture} alt='Host Profil' className='host-pic' />
                        <p className='host-name'>{selectedHouse.host.name}</p>
                    </div>
                    <div className='house-rating'>
                        <Rating />
                    </div>
                    <div className="house-equipments">
                        <Collapse
                            title="Équipements"
                            content={selectedHouse.equipments.map(equipment => (
                                <p>{equipment}</p>
                            ))}
                        />

                    </div>
                </div>
            </div>


        </div>
    )

}



export default House;