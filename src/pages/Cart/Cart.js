import React from 'react';
import Header from '../../Header/Header';
import TopHead from './TopHead';
import FooterForm from '../../Footer/FooterForm';
import FooterContacts from '../../Footer/FooterContacts';
import CartBoxCart from './CartBoxCart';
import './style.css';

function Cart() {
    return (
        <div>
            <Header />
            <TopHead />
            <CartBoxCart />
            <FooterForm />
            <FooterContacts />
        </div>
    );
}

export default Cart;
