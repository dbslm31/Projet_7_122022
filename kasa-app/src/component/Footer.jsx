import React from 'react';
import '../styles/Footer.css'
import logoWhite from '../assets/WHITE-LOGO.svg';

function Footer() {
    return (

        <div className='footer'>
            <img src={logoWhite} alt='Kasa white logo' className='footer-logo' />
            <p className="footer-copyright">© 2020 Kasa. All rights reserved</p>
        </div>

    )

}

export default Footer

