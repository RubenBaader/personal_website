import React, { useEffect, useState } from "react";
import './Carousel.css'

export const CarouselItem = ({ children, width, id }) => {
    return (
        <div className="carousel-item" id={ id } style={ {width: width} }>
            {children}
        </div>
    );
};

const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) { // overflow left

            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) { // overflow right
            /* children.push(children[0])
            children.shift() */
            newIndex = 0;
        }
        console.log(children)
        setActiveIndex(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
            updateIndex(activeIndex + 1);
            }
        }, 3000)
        
        return () => {
            if (interval) {clearInterval(interval);}
        };
    });

    return (
        <div 
        className="carousel"
        onMouseEnter={ () => setPaused(true) }
        onMouseLeave={ () => setPaused(false) }
        >
            <div 
            className="inner" 
            style={ {transform: `translateX(-${activeIndex * 30}%)`} }>
                {React.Children.map(children, (child, index) => {
                    console.log(children.length);
                    return React.cloneElement(child, { width: "30%", id: index } )
                })};
            </div>
            <div className="indicators">
                <button onClick={() => {updateIndex(activeIndex - 1);}}>
                    Prev
                </button>

                {React.Children.map(children, (child, index) => {
                    return (
                        <button 
                            className={`${index === activeIndex ? 'active' : ''}`}
                            onClick={() => {updateIndex(index);}}>
                                {index + 1}
                        </button>
                    );
                })}

                <button onClick={() => {updateIndex(activeIndex + 1);}}>
                    Next
                </button>
            </div>
        </div>
    );
};

function Portfolio () {
    return (
        <div>
            <h1>This is a Portfolio</h1>
            <Carousel>
                <CarouselItem>Item 1</CarouselItem>
                <CarouselItem>Item 2</CarouselItem>
                <CarouselItem>Item 3</CarouselItem>
            </Carousel>
        </div>
    );
}

export default Portfolio;