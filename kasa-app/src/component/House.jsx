import React from 'react';
import { useParams } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import Collapse from "./Collapse"
import Tag from "./Tag"
import houses from "../houses";
import '../styles/House.css'


function House() {
    let { id } = useParams();

    const result = houses.filter(
        house => house.id === id)

    const selectedHouse = result[0]

    return (
        <div className='house-container'>
            <div className='image-slider'>
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
                        {selectedHouse.tags.map(tag => (
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
                        {selectedHouse.rating}
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