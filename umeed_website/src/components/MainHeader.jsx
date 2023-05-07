import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mainHeaderCarouseldata } from '../data';

const MainHeader = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentItem = mainHeaderCarouseldata[currentIndex];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % mainHeaderCarouseldata.length);
        }, 10000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <header className="main__header">
            <div className="container main__header-container">
                <div className="main__header-left">
                    <h4>#{currentItem.hashtag}</h4>
                    <h1>{currentItem.title}</h1>
                    <p>{currentItem.subtext}</p>
                    <Link to="/contact" className="btn lg">
                        Join Us
                    </Link>
                </div>
                <div className="main__header-right">
                    <div className="main__header-circle"></div>
                    <div className="main__header-image">
                        <img src={currentItem.image} alt={currentItem.title} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default MainHeader;
