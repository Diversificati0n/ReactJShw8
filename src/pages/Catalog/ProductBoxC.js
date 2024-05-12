import React from 'react';
import { Link } from 'react-router-dom';
import ProductItem from '../../components/ProductItem';
import ImageAssets from '../../components/ImgAssets';

const ProductBoxC = ({ selectedSizes }) => {

    const products = [
        {
            id: 1,
            image: ImageAssets.product1,
            name: "ELLERY X M'O CAPSULE",
            description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            price: "$52.00",
            size: "M"
        },
        {
            id: 2,
            image: ImageAssets.product2,
            name: "ELLERY X M'O CAPSULE",
            description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            price: "$52.00",
            size: "L"
        },
        {
            id: 3,
            image: ImageAssets.product3,
            name: "ELLERY X M'O CAPSULE",
            description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            price: "$52.00",
            size: "S"
        },
        {
            id: 4,
            image: ImageAssets.product4,
            name: "ELLERY X M'O CAPSULE",
            description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            price: "$52.00",
            size: "XS"
        },
        {
            id: 5,
            image: ImageAssets.product5,
            name: "ELLERY X M'O CAPSULE",
            description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            price: "$52.00",
            size: "XS"
        },
        {
            id: 6,
            image: ImageAssets.product6,
            name: "ELLERY X M'O CAPSULE",
            description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            price: "$52.00",
            size: "XS"
        },
        {
            id: 7,
            image: ImageAssets.product7,
            name: "ELLERY X M'O CAPSULE",
            description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            price: "$52.00",
            size: "XS"
        },
        {
            id: 8,
            image: ImageAssets.product8,
            name: "ELLERY X M'O CAPSULE",
            description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            price: "$52.00",
            size: "XS"
        },
        {
            id: 9,
            image: ImageAssets.product9,
            name: "ELLERY X M'O CAPSULE",
            description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            price: "$52.00",
            size: "XS"
        }
    ];


    const filteredProducts = selectedSizes.length > 0 ? products.filter(product => selectedSizes.includes(product.size)) : products;

    console.log("Filtered Products:", filteredProducts);

    return (
        <div className="product-box center">
            {filteredProducts.map(product => (
                <Link key={product.id} to={`/product/${product.id}`}>
                    <ProductItem
                        key={product.id}
                        image={product.image}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        size={product.size}
                    />
                </Link>
            ))}
        </div>
    );
}

export default ProductBoxC;
