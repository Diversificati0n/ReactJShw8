import React from 'react';

const ProductItem = ({ image, name, description, price, size }) => {
    return (
        <article className="product">
            <img className="product__img" src={image} alt="" />
            <div className="product__content">
                <a href="#" className="product__name">{name}</a>
                <p className="product__text">{description}</p>
                <p className="product__price">{price}</p>
                {size && (
                    <p className="product__size">Size: {size}</p>
                )}
            </div>
        </article>
    );
}

export default ProductItem;
