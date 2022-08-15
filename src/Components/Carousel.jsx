import React, { useEffect, useState } from "react";
import './Carousel.css'

const Carousel = (props) => {
    const {children, show, infiniteLoop} = props;

    // index: which item to show (relative to show); length: length of carousel item array
    const [currentIndex, setcurrentIndex] = useState(infiniteLoop ? show : 0);
    const [length, setLength] = useState(children.length);

    // isRepeating: infinite scrolling y/n; transitionEnabled: transition animation y/n;
    const [isRepeating, setIsRepeating] = useState (infiniteLoop && children.length > show);
    const [transitionEnabled, setTransitionEnabled] = useState(true);
    // paused: animation on pause y/n
    const [paused, setPaused] = useState(false);

    const [touchPosition, setTouchPosition] = useState(null);

    useEffect(() => {
        setLength(children.length)
        setIsRepeating(infiniteLoop && children.length > show)
    }, [children, infiniteLoop, show]);

    /* track carousel direction and reset conditions */
    const DIRECTION = {
        LEFT: "LEFT",
        RIGHT: "RIGHT"
    };
    const [direction, setDirection] = useState(DIRECTION.LEFT);
    
    const resetIndex = () => {
        if (direction === DIRECTION.RIGHT) {
            setcurrentIndex(show)
        } else if (direction === DIRECTION.LEFT) {
            setcurrentIndex(length)
        }
    }
    
    const checkTransition = () => {
        if (currentIndex < length + show || currentIndex > 0) {
            setTransitionEnabled(true)
        }
    }
    const handleTransitionEnd = () => {
        if (currentIndex >= length + show || currentIndex <= 0) {
            setTransitionEnabled(false)
            resetIndex()
        }
    }


    const prev = () => {
        if (isRepeating || currentIndex > 0) {
            setcurrentIndex(prevState => prevState - 1)
            setDirection(DIRECTION.LEFT)
            handleTransitionEnd() //prevents item array from going out of bounds on button spam
        }
    }
    const next = () => {
        if (isRepeating || currentIndex < (length - show)) {
            setcurrentIndex(prevState => prevState + 1)
            setDirection(DIRECTION.RIGHT)
            handleTransitionEnd() //prevents item array from going out of bounds on button spam
        }
    }

    // touch screen functionality - scroll based on relative touch movement
    const handleTouchStart = (event) => {
        const touchDown = event.touches[0].clientX
        setTouchPosition(touchDown)
    }
    const handleTouchMove = (event) => {
        const touchDown = touchPosition

        if (touchDown === null) {
            return
        }

        const currentTouch = event.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 5) {
            next()
        }

        if (diff < -5) {
            prev()
        }

        setTouchPosition(null)
    }
    // enable infinite scrolling effect by adding clones equal to show items at either end of the item list
    const renderExtraPrev = () => {
        let output = []
        for (let index = 0; index < show; index++) {
            output.push(children[length - 1 - index])
        }
        output.reverse()
        return output
    }
    const renderExtraNext = () => {
        let output = []
        for (let index = 0; index < show; index++) {
            output.push(children[index])
        }
        return output
    }
    // enable autoscrolling
    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
            next();
            checkTransition();
            }
        }, 3000)
        
        return () => {
            if (interval) {clearInterval(interval);}
        };
    });

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {
                    (isRepeating || currentIndex > 0) &&
                    <button onClick={() => {prev(); checkTransition();}} className='left-arrow' >
                        &lt;
                    </button>
                }
                <div
                    className="carousel-content-wrapper"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onMouseEnter={ () => setPaused(true) }
                    onMouseLeave={ () => setPaused(false) }
                >
                    <div
                        className={`carousel-content show-${show}`}
                        style={{
                            transform: `translateX(-${currentIndex * (100 / show)}%)`,
                            transition: `all ${transitionEnabled ? 450 : 0}ms linear`
                        }}
                        onTransitionEnd={() => handleTransitionEnd()} //this check smoothes scrolling at the end of the item array
                    >
                        {
                            (length > show && isRepeating) &&
                            renderExtraPrev()
                        }
                        {children}
                        {
                            (length > show && isRepeating) &&
                            renderExtraNext()
                        }
                    </div>
                </div>
                {
                    (isRepeating || currentIndex < (length - show)) &&
                    <button onClick={() => {next(); checkTransition();}} className='right-arrow'>
                        &gt;
                    </button>
                }
            </div>
        </div>
    )
};

export default Carousel;