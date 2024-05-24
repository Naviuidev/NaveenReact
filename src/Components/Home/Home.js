import React, { useState } from "react";
import Slider from "../Sliders/Slider";
import Clints from "../Clints/Clints";
import Marquee from "../Marquee/Marquee";
import Simple from "../Simple/Simple";
import ReviewUi from "../ReviewUi.js/ReviewUi";

const Home = () => {
    const [categorySelected, setCategorySelected] = useState(true); // Initialize to true

    return (
        <div>
            <Slider />
            <Clints setCategorySelected={setCategorySelected} /> {/* Pass setCategorySelected as a prop */}
            {categorySelected && <Marquee />} {/* Render Marquee by default */}
            <Simple/>
            
        </div>
    );
};

export default Home;
