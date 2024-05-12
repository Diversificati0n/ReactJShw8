import React, { useState, useEffect } from 'react';
import ImageAssets from '../../components/ImgAssets';
import CartProduct from './CartProduct';
import CartForm from './CartForm';
import CartPurchase from './CartPurchase';
import './style.css'; 

const CartBoxCart = () => {
    const [products, setProducts] = useState([
        { id: 1, image: ImageAssets.boxProduct, name: 'MANGO PEOPLE T-SHIRT', price: 300, quantity: 1 },
        { id: 2, image: ImageAssets.boxProduct2, name: 'MANGO PEOPLE T-SHIRT', price: 300, quantity: 1 }
    ]);
    

    const [totalPrice, setTotalPrice] = useState(0);

    const updateQuantity = (id, newQuantity) => {
        setProducts(prevProducts => {
            return prevProducts.map(product => {
                if (product.id === id) {
                    return { ...product, quantity: newQuantity };
                }
                return product;
            });
        });
    };

    useEffect(() => {
        const newTotalPrice = products.reduce((total, product) => {
            return total + (product.price * product.quantity);
        }, 0).toFixed(2);
        setTotalPrice(newTotalPrice);
    }, [products]);

    return (
        <div className="cart-box center">
            <div className="cart-box__product-column">
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
            </div>
            <div className="cart-box__application-column">
                <CartForm />
                <CartPurchase totalPrice={`$${totalPrice}`} />
            </div>
        </div>
    );
};

export default CartBoxCart;
