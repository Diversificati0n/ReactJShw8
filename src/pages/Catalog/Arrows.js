import React from 'react';

function Arrows() {
    return (
        <div className="arrows">
            <div className="vector">
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 2L3 7L8 12L7 14L0 7L7 0L8 2Z" fill="#000000" />
                </svg>
                <p className="vector__text">1 2 3 4 5 6.....20</p>
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z" fill="#000000" />
                </svg>
            </div>
        </div>
    );
}

export default Arrows;
