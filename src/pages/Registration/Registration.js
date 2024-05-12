import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
import Top from './Top';
import RegistrationBox from './RegistrationBox';
import FooterForm from '../../Footer/FooterForm';
import FooterContacts from '../../Footer/FooterContacts';
import './style.css';

function Registration () {
    return (
        <div>
            <Header />
            <Top />
            <RegistrationBox />
            <FooterForm />
            <FooterContacts />
        </div>
    );
}

export default Registration;