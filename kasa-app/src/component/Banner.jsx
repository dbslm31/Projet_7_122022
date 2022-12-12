import React from 'react';
import banner from '../assets/BANNER-IMG.png';
import '../styles/Banner.css'

function Banner() {
    return (
        <div className="banner-container">
            <div className='img-container'>
                <img src={banner} alt='Home Page Banner' className='banner' />
                <div className="color-overlay"></div>
                <p className="banner-overlay">Chez vous, partout et ailleurs</p>

            </div>
        </div>
    )

}

export default Banner