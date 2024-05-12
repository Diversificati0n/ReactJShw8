import React from 'react';
import Header from '../../Header/Header';
import FooterForm from '../../Footer/FooterForm';
import FooterContacts from '../../Footer/FooterContacts';
import './style.css';
import TopHead from './TopHead';
import Slider from './Slider';
import ProductDescription from './ProductDescription';
import ProductBoxP from './ProductBox';
import { Link, useParams } from 'react-router-dom';

function Product() {
    let { id } = useParams();

    return (
        <div>
            <Header />
            <TopHead />
            <Slider />
            <ProductDescription />
            <ProductBoxP productId={id} />
            <FooterForm />
            <FooterContacts />
        </div>
    );
}

export default Product;
