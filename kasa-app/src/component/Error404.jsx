import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Error.css'

function Error404() {
    return (
        <div className="error-container">
            <p className="error-title">404</p>
            <p className="error-txt">Oups! La page que vous demandez n'existe pas.</p>
            <div className="home-link"><Link to="/">Retourner sur la page d’accueil</Link></div>
        </div>
    )

}

export default Error404;