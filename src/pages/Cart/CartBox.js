import React from 'react';
import CartProduct from './CartProduct';
import CartForm from './CartForm';
import CartPurchase from './CartPurchase';
import './style.css';

const CartBox = ({ products, updateQuantity, totalPrice }) => {
    return (
        <div className="cart-box">
            {products.map(product => (
                <CartProduct
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    quantity={product.quantity}
                    updateQuantity={updateQuantity}
                />
            ))}
            <CartForm />
            <CartPurchase totalPrice={totalPrice} />
        </div>
    );
};

export default CartBox;
