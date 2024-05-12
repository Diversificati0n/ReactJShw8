import React from 'react';
import './style.css';

const CartProduct = ({ id, image, name, price, quantity, updateQuantity }) => {
    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value);
        if (!isNaN(newQuantity) && newQuantity >= 1) {
            updateQuantity(id, newQuantity);
        }
    };

    return (
        <div className="cart-box__product1">
            <img className="img-cart" src={image} alt="" />
            <div className="cart-box__description">
                <p className="cart-box__head">{name}</p>
                <ul>
                    <li className="cart-box__text">Price: <span className="price">{price}</span></li>
                    <li className="cart-box__text">Quantity:
                        <input type="number" className="quantity" value={quantity} onChange={handleQuantityChange} />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default CartProduct;
