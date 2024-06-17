import React, { useState, useEffect } from 'react';


const Carousel = () => {


    const [index, setIndex] = useState(0);
    const carouselItems = ["EarthSim.png", "KnightsAdventure.png", "SkyCompass.png"];
    const length = 3;
    const IntervalTime = 4000;
    const desc = ["This Is EarthSim, a project i created in OpenGL. ",
        "This Is Knights Adventure, a small console-based tet adventure I created in C++.",
        "This Is SkyCompass, a Full Stack Weather mapping site, mapping global weather."];

    const handlePrev = () => {

        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);

    };

    const handleNext = () => {

        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);

    };

    useEffect(() => {
        const interval = setInterval(handleNext, IntervalTime);

        return () => {
            clearInterval(interval);
        };
    },
        [index]);

    return (

        <div className="carousel">

            <button onClick={handlePrev}>Prev</button>

            <div class="image-wrapper">
                <img src={carouselItems[index]} alt={'Slide ${index}'} />
                <h3 class="desc"> {desc[index]} </h3>
            </div>

            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default Carousel;