import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Error404 from "./Error404";
import House from "./House";

function Router() {
    return (

        <section>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/a-propos" element={<About />} />
                <Route path="/*" element={<Error404 />} />
                <Route path="/logement/:id" element={<House />} />
            </Routes>
        </section>

    );
}

export default Router;