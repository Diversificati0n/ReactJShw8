import React from 'react';
import './style.css';

const CartPurchase = ({ totalPrice }) => {
    return (
        <div className="cart__purchase">
            <p className="purchase__text1">SUB TOTAL <span className="price">{totalPrice}</span></p>
            <p className="purchase__text2">GRAND TOTAL<span className="price">{totalPrice}</span></p>
            <svg className="cart__svg" width="275" height="1" viewBox="0 0 275 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H275V1H0V0Z" fill="#E2E2E2" />
            </svg>
            <button className="clear-button1">PROCEED TO CHECKOUT</button>
        </div>
    );
};

export default CartPurchase;
