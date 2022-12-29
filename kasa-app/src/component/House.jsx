import React, { useState } from 'react';
import { useParams, Navigate } from "react-router-dom";
import Slider from "./Slider";
import Collapse from "./Collapse"
import Tag from "./Tag"
import RatingStars from "./Rating"

import houses from "../houses";
import '../styles/House.css'


function House() {
    let { id } = useParams();

    const result = houses.filter(
        house => house.id === id);


    const selectedHouse = result[0];

    if (!result.length) {
        return <Navigate to="/404" />;
    }

    return (
        <div className='house-container'>
            <div className='image-slider'>
                <Slider
                    pictures={selectedHouse.pictures}
                />
            </div>

            <div className='title-rating-container'>
                <div className="house-column-title">
                    <div className="title-container">
                        <div className='house-title'>
                            {selectedHouse.title}
                        </div>
                    </div>
                    <div className='house-location'>
                        {selectedHouse.location}
                    </div>
                    <div className="house-tags">
                        {selectedHouse.tags.map((tag) => (
                            <Tag
                                tag={tag}
                            />
                        ))}
                    </div>
                </div>

                <div className="house-rating-column">
                    <div className='house-host'>
                        <img src={selectedHouse.host.picture} alt='Host Profil' className='host-pic' />
                        <p className='host-name'>{selectedHouse.host.name}</p>
                    </div>
                    <div className='house-rating'>
                        <RatingStars
                            rating={selectedHouse.rating} />
                    </div>
                </div>
            </div>
            <div className='description-container'>
                <div className="house-description">
                    <Collapse
                        title="Description"
                        content={selectedHouse.description}
                    />

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
    )

}



export default House;