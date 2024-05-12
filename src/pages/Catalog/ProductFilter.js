import React, { useState } from 'react';
import CheckboxWithSquare from './CheckboxWithSquare';
import ProductBoxC from './ProductBoxC';

const ProductFilter = () => {
    const [selectedSizes, setSelectedSizes] = useState([]);

    const handleSizeChange = (size) => {
        if (selectedSizes.includes(size)) {
            setSelectedSizes(selectedSizes.filter(s => s !== size));
        } else {
            setSelectedSizes([...selectedSizes, size]);
        }
    };

    const products = [
        { id: 1, name: 'ELLERY X M\'O CAPSULE', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: '$52.00', size: 'M', image: ImageAssets.product1 },
        { id: 2, name: 'ELLERY X M\'O CAPSULE', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: '$52.00', size: 'L', image: ImageAssets.product2 },
        { id: 3, name: 'ELLERY X M\'O CAPSULE', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: '$52.00', size: 'S', image: ImageAssets.product3 },
        { id: 4, name: 'ELLERY X M\'O CAPSULE', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: '$52.00', size: 'XS', image: ImageAssets.product4 },
    ];

    return (
        <div className="product-filter">
            <div className="filter-options">
                <span className="filter-heading">SIZE</span>
                <div className="filter-items">
                    <CheckboxWithSquare size="XS" handleSizeChange={handleSizeChange} selectedSizes={selectedSizes} />
                    <CheckboxWithSquare size="S" handleSizeChange={handleSizeChange} selectedSizes={selectedSizes} />
                    <CheckboxWithSquare size="M" handleSizeChange={handleSizeChange} selectedSizes={selectedSizes} />
                    <CheckboxWithSquare size="L" handleSizeChange={handleSizeChange} selectedSizes={selectedSizes} />
                </div>
            </div>
            <div className="product-list">
                <ProductBoxC products={products} handleSizeChange={handleSizeChange} selectedSizes={selectedSizes} />
            </div>
        </div>
    );
};

export default ProductFilter;
