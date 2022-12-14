import React from 'react';
import Banner from "./Banner";
import BannerAbout from "../assets/BANNER-ABOUT.png"
import Accordion from "./Accordion"

function About() {
    return (
        <div className="Home">
            <Banner
                img={BannerAbout}
            />
            <Accordion />

        </div>
    );
}

export default About;