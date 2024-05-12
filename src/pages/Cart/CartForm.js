import React from 'react';
import './style.css';

const CartForm = () => {
    return (
        <div className="cart__application">
            <p className="cart__head">SHIPPING ADDRESS</p>
            <input type="text" placeholder="Bangladesh" className="input-field" />
            <input type="text" placeholder="State" className="input-field" />
            <input type="text" placeholder="Postcode / Zip" className="input-field" />
            <button className="cart__button">GET A QUOTE</button>
        </div>
    );
};

export default CartForm;
