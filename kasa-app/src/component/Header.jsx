import React from 'react';
import { Link } from 'react-router-dom';
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
                    <li className="menu-item"><Link to="/">Accueil</Link></li>
                    <li className="menu-item"><Link to="/a-propos">À propos</Link></li>
                </ul>
            </div>
        </header>
    )

}

export default Header