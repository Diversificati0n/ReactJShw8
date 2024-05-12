import React from 'react';

const CheckboxWithSquare = ({ size, handleSizeChange }) => {
    const toggleCheckbox = () => {
        handleSizeChange(size);
    };

    return (
        <div className="sort__check" onClick={toggleCheckbox}>
            <div className="checkbox-container">
                <input id={`sort__check${size}`} type="checkbox" onChange={() => {}} />
                <span className="checkmark"></span>
            </div>
            <label htmlFor={`sort__check${size}`}>{size}</label>
        </div>
    );
};

export default CheckboxWithSquare;
