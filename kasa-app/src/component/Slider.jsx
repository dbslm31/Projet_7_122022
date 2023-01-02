import React, { useState } from 'react';
import SliderArrow from "../assets/slider-arrow.svg"
import '../styles/Slider.css'


function Slider(props) {


    const [currentPicture, setCurrentPicture] = useState(0)
    const [pictures] = useState(props.pictures)

    function changePicture(value) {

        if (currentPicture === + 0 && value === -1) {
            setCurrentPicture(pictures.length - 1)
        } else if (currentPicture === pictures.length - 1 && value === 1) {
            setCurrentPicture(0)
        } else {
            setCurrentPicture(currentPicture + value)
        }
    }


    return (
        <div className="slider">

            <img src={SliderArrow} alt='Slider Arrow Right' className='arrow-right' onClick={() => changePicture(-1)} />

            <div className='slider-inner'>


                <img src={pictures[currentPicture]} className="slider-picture" alt="Carrousel Accomodation" />



            </div>

            <img src={SliderArrow} alt='Slider Arrow Left' className='arrow-left' onClick={() => changePicture(1)} />
        </div>

    )

}

export default Slider;