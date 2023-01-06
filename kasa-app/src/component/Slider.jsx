import React, { useState } from 'react';
import SliderArrow from "../assets/slider-arrow.svg"
import '../styles/Slider.css'


function Slider(props) {

    // Initialize state variables using the useState hook
    const [currentPicture, setCurrentPicture] = useState(0)

    // pictures is an array of picture URLs passed in through props
    const [pictures] = useState(props.pictures)

    function changePicture(value) {
        // If the current picture is the first picture and the value is -1,
        // set the current picture to the last picture in the pictures array
        if (currentPicture === + 0 && value === -1) {
            setCurrentPicture(pictures.length - 1)

            // Otherwise, if the current picture is the last picture and the value is 1,
            // set the current picture to the first picture in the pictures array
        } else if (currentPicture === pictures.length - 1 && value === 1) {
            setCurrentPicture(0)

            // Otherwise, increment the current picture by the value
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