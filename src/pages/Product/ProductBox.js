import React from 'react';
import ProductItem from '../../components/ProductItem';
import ImageAssets from '../../components/ImgAssets';

const ProductBoxP = ({ productId }) => {
    return (
        <div className="product-box center">
            
            <ProductItem
                image={ImageAssets.imgproduct1}
                name="ELLERY X M'O CAPSULE" 
                description="Known for her sculptural takes on traditional tailoring, Australian arbiter of
                cool Kym Ellery teams up with Moda Operandi."
                price="$52.00"
            />
            <ProductItem
                image={ImageAssets.imgproduct2}
                name="ELLERY X M'O CAPSULE"
                description="Known for her sculptural takes on traditional tailoring, Australian arbiter of
                cool Kym Ellery teams up with Moda Operandi."
                price="$52.00"
            />
            <ProductItem
                image={ImageAssets.imgproduct3}
                name="ELLERY X M'O CAPSULE"
                description="Known for her sculptural takes on traditional tailoring, Australian arbiter of
                cool Kym Ellery teams up with Moda Operandi."
                price="$52.00"
            />
        </div>
    );
}

export default ProductBoxP;
