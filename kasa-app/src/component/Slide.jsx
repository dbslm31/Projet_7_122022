import React from 'react';



function Slide(props) {
    return (

        <div className='slide'>
            <img src={props.img} alt='House Slide' className='house-slide' />
        </div>

    )

}

export default Slide