import React from 'react';
import logo from '../assets/LOGO.svg';
import '../styles/Header.css'

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt='Kasa logo' className='header-logo' />
            </div>
            <div className="nav">
                <ul className="menu">
                    <li className="menu-item"><a href="./public/index.html">Accueil</a></li>
                    <li className="menu-item"><a href="./public/about.html">A Propos</a></li>
                </ul>
            </div>
        </header>
    )

}

export default Header