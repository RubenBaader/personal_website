import React, { Fragment, useEffect, useState } from "react";
import Carousel from '../Components/Carousel.jsx'


function Portfolio () {
    return (
        <Fragment>
            <h1>This is a Portfolio</h1>
            <Carousel
                show={1}
                infiniteLoop
            >
                <div>I am number 1</div>
                <div>I am number 2</div>
                <div>I am number 3</div>
                <div>I am number 4</div>
                <div>I am number 5</div>
            </Carousel>
        </Fragment>
    );
}

export default Portfolio;