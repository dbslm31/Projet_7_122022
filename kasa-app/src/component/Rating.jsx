import React, { useState } from 'react';
import '../styles/Tag.css'
import RedStar from "../assets/red-star.svg"


function RatingStars(props) {
    const { rating } = props;

    const totalStars = 5;
    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
        let starStyle = {};
        if (i <= rating) {
            starStyle = { filter: 'invert(0)' };
        } else {
            starStyle = { filter: 'grayscale(1) brightness(1.4)' };
        }
        stars.push(
            <img src={RedStar} key={i} className="star" style={starStyle} />
        );
    }

    return <div className="rating">{stars}</div>;
}

export default RatingStars