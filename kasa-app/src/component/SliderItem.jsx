import React from 'react';
import '../styles/SliderItem.css'

const SliderItem = ({ picture }) => {
    return (
        <div className='slider-item'>
            <img src={picture} alt='Slider Item' className='slider-img' />
        </div>
    )
}

export default SliderItem
