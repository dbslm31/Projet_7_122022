import React from 'react';
import Banner from "./Banner";
import BannerIndex from "../assets/BANNER-INDEX.png"
import CardContainer from "./CardContainer";



function Home() {
    return (
        <div className="Home">
            <Banner
                img={BannerIndex}
                title="Chez vous, partout et ailleurs"
            />
            <CardContainer />
        </div>
    );
}


export default Home;