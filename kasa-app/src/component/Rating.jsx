import React from 'react';
import '../styles/Rating.css'
import RedStar from "../assets/red-star.svg"

// Create RatingStars with props
function RatingStars(props) {

    //Set rating as a prop
    const { rating } = props;

    //Define the total number of stars to 5
    const totalStars = 5;

    //Initialize an empty array to push the stars elements
    const stars = [];

    //Loop to iterate over the total number of stars
    for (let i = 1; i <= totalStars; i++) {
        // Initialize an empty object to store the style for the star element
        let starStyle = {};
        // If the current iteration number is less than or equal to the rating,
        // set the style to invert the color of the star and turn it red
        // Otherwise, set the style to grayscale and increase the brightness to match the right gray
        if (i <= rating) {
            starStyle = { filter: 'invert(0)' };
        } else {
            starStyle = { filter: 'grayscale(1) brightness(1.4)' };
        }

        //Push the star element with the right style in the star array
        stars.push(
            <img src={RedStar} key={i} className="star" alt="Rating Star" style={starStyle} />
        );
    }

    return <div className="rating" alt="Rating Star">{stars}</div>;
}

export default RatingStars