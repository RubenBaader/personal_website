import React, { Fragment } from "react";
import Carousel from '../Components/Carousel.jsx'
import './Portfolio.css'

function Portfolio () {
    return (
        <Fragment>
            <h1>This is a Portfolio</h1>
            <div className="carousel">
                <Carousel
                    show={1}
                    infiniteLoop
                >
                    <div className="item">I am number 1</div>
                    <div className="item">I am number 2</div>
                    <div className="item">I am number 3</div>
                    <div className="item">I am number 4</div>
                    <div className="item">I am number 5</div>
                </Carousel>
            </div>
        </Fragment>
    );
}

export default Portfolio;