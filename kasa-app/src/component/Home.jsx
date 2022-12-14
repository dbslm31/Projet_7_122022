import React from 'react';
import Banner from "./Banner";
import BannerIndex from "../assets/BANNER-INDEX.png"
import CardContainer from "./CardContainer";



function Home() {
    return (
        <div className="Home">
            <Banner
                img={BannerIndex}
            />
            <CardContainer />
        </div>
    );
}


export default Home;