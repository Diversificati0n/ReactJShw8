import React from 'react';
import Header from '../../Header/Header';
import Top from './Top';
import WhatIsSection from './WhatIsSection'; 
import Range from './Range';
import FooterShopService from '../../Footer/FooterShopService';
import FooterForm from '../../Footer/FooterForm';
import FooterContacts from '../../Footer/FooterContacts';
import './style.css';

function Home() {
    return (
        <div>
            <Header />
            <Top />
            <WhatIsSection />
            <Range />
            <FooterShopService />
            <FooterForm />
            <FooterContacts />
        </div>
    );
}

export default Home;
