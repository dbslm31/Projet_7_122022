import React from 'react';
import '../styles/Card.css'


function Card(props) {
    return (

        <div className='card'>
            <img src={props.img} alt='House Cover Picture' className='card-cover' />
            <div className="card-overlay"></div>
            <p className="card-title">{props.title}</p>
        </div>

    )

}

export default Card