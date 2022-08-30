// import React, { Fragment } from "react";
import Carousel from '../Components/Carousel.jsx'
import './Portfolio.css'

function Portfolio () {
    return (
        <main className="page-wrapper">
            <h1>Portfolio</h1>
            <p className="main-text">Here is a collection of projects which I've completed. There's a definite possibility that my main motivaiton for this seciton was to learn how to make a nice carousel effect.</p>
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
        </main>
    );
}

export default Portfolio;