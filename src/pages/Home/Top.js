import React from 'react';
import ImageAssets from '../../components/ImgAssets';

function Top() {
    return (
        <div className="top">
            <div className="top__info">
                <img className="top__img" src={ImageAssets.top__img} alt="" />
                <h2 className="top__text">
                    <span className="icon">
                        <svg className="top_info_logo" width="12" height="93" viewBox="0 0 12 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0.900879H0V92.9009H12V0.900879Z" fill="#F16D7F" />
                        </svg>
                    </span>
                    <span className="text">
                        <span className="brand">THE BRAND</span>
                        <span className="additional">OF LUXERIOUS <span className="fashion">FASHION</span></span>
                    </span>
                </h2>
            </div>
        </div>
    );
}

export default Top;
