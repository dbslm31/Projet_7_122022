import React from 'react';
import '../styles/Tag.css'
import houses from "../houses";
import RedStar from "../assets/red-star.svg";
import GrayStar from "../assets/gray-star.svg"


function Rating(props) {

    return (
        <div className='rating-container'>
            <img src={props.img} alt='Rating Star' className='rating-red-star' />
        </div>

    )

}

export default Rating