import React, { useState } from 'react';
import Header from '../../Header/Header';
import TopHead from './TopHead';
import FilterSort from './FilterSort';
import ProductBoxC from './ProductBoxC';
import Arrows from './Arrows';
import FooterShopService from '../../Footer/FooterShopService';
import FooterForm from '../../Footer/FooterForm';
import FooterContacts from '../../Footer/FooterContacts';
import './style.css';

function Catalog() {
    const [selectedSizes, setSelectedSizes] = useState([]);

    const handleSizeChange = (size) => {
        if (selectedSizes.includes(size)) {
            setSelectedSizes(selectedSizes.filter(s => s !== size));
        } else {
            setSelectedSizes([...selectedSizes, size]);
        }
        console.log("Selected Sizes in Catalog:", selectedSizes);
    };

    return (
        <div>
            <Header />
            <TopHead />
            <FilterSort handleSizeChange={handleSizeChange} />
            <ProductBoxC selectedSizes={selectedSizes} />
            <Arrows />
            <FooterShopService />
            <FooterForm />
            <FooterContacts />
        </div>
    );
}

export default Catalog;
