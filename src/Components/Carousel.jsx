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

    useEffect(() => {
        if (isRepeating) {
            if (currentIndex === show || currentIndex === length) {
                setTransitionEnabled(true)
            }
        }
    }, [currentIndex, isRepeating, show, length])

    const handleTransitionEnd = () => {
        if (isRepeating) {
            if (currentIndex <= 0) {
                setTransitionEnabled(false)
                setcurrentIndex(length)
            } else if (currentIndex >= length + show) {
                setTransitionEnabled(false)
                setcurrentIndex(show)
            }
        }
    }
    
    const next = () => {
        if (isRepeating || currentIndex < (length - show)) {
            setcurrentIndex(prevState => prevState + 1)
            handleTransitionEnd()
        }
    }
    const prev = () => {
        if (isRepeating || currentIndex > 0) {
            setcurrentIndex(prevState => prevState - 1)
            handleTransitionEnd()
        }
    }

    // touch screen functionality - scrol carousel based on relative touch movement
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

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
            next();
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
                    <button onClick={prev} className='left-arrow' >
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
                            transition: !transitionEnabled ? 'none' : undefined
                        }}
                        // onTransitionEnd={() => handleTransitionEnd()}
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
                    <button onClick={next} className='right-arrow'>
                        &gt;
                    </button>
                }
            </div>
        </div>
    )
};

export default Carousel;