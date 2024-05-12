import React from 'react';

const TopHead = () => {
    return (
        <div className="top-head center">
            <a href="#" className="top-head__heading">NEW ARRIVALS</a>
            <nav className="breadcrumbs">
                <ul className="breadcrumbs__ul">
                    <li className="breadcrumbs__li"><a href="#" className="breadcrumbs__link">HOME</a></li>
                    <li className="breadcrumbs__li"><a href="#" className="breadcrumbs__link">MEN</a></li>
                    <li className="breadcrumbs__li"><a href="#" className="breadcrumbs__link">NEW ARRIVALS</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default TopHead;
