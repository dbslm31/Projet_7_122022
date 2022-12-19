import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Card.css'


function Card(props) {
    return (

        <Link to={"/logement/" + props.id}><div className='card'>
            <img src={props.img} alt='House Cover' className='card-cover' />
            <div className="card-overlay"></div>
            <p className="card-title">{props.title}</p>
        </div></Link>

    )

}

export default Card