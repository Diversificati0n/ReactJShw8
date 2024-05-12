import React, { useState, useEffect } from 'react';
import ImageAssets from '../../components/ImgAssets';

function Slider() {
    const slides = [
        ImageAssets['slide'], 
        ImageAssets['slide'],
        ImageAssets['slide'] 
    ];
    const slideCount = slides.length;
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slideCount);
        }, 3000);

        return () => {
            clearInterval(intervalId);
        };
    }, [slideCount]);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slideCount);
    };

    return (
        <div className="slider center">
            <div className="slider-inner">
                {slides.map((slide, index) => (
                    <img
                        key={index}
                        src={slide}
                        alt={`Slide ${index + 1}`}
                        className={`slide ${index === currentSlide ? '' : 'hidden'}`}
                        style={index === currentSlide ? { maxWidth: '597px', maxHeight: '724px', display: 'block', margin: 'auto' } : null}
                    />
                ))}
            </div>
        </div>
    );
}

export default Slider;
