import React from 'react';

function RegistrationBox() {
    return (
        <div className="registration-box center">
            <div className="snape-box">
                <p className="snape-box__head">Your Name</p>
                <input type="text" placeholder="First Name" className="snape-box__input" />
                <input type="text" placeholder="Last Name" className="snape-box__input" />
                <div className="gender-selection">
                    <label className="gender-option">
                        <input type="radio" name="gender" value="male" />
                        <div className="gender-circle male"></div> Male
                    </label>
                    <label className="gender-option">
                        <input type="radio" name="gender" value="female" />
                        <div className="gender-circle female"></div> Female
                    </label>
                </div>
                <p className="snape-box__header">Login details</p>
                <input type="email" placeholder="Email" className="snape-box__input" />
                <input type="password" placeholder="Password" className="snape-box__input" />
                <p className="snape-box__text">Please use 8 or more characters, with at least 1 number and a mixture of
                    uppercase and lowercase letters</p>
                <button className="snape-box__button">JOIN NOW
                    <svg className="button__arrow" width="18" height="10" viewBox="0 0 18 10" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.54 0.2C11.6 0.14 11.68 0.08 11.77 0.05C11.85 0.01 11.94 0 12.04 0C12.13 0 12.22 0.01 12.31 0.05C12.39 0.08 12.47 0.14 12.54 0.2L16.79 4.45C16.85 4.52 16.91 4.6 16.94 4.68C16.98 4.77 17 4.86 17 4.95C17 5.05 16.98 5.14 16.94 5.23C16.91 5.31 16.85 5.39 16.79 5.46L12.54 9.71C12.41 9.84 12.22 9.91 12.04 9.91C11.85 9.91 11.67 9.84 11.54 9.71C11.4 9.57 11.33 9.39 11.33 9.2C11.33 9.02 11.4 8.84 11.54 8.7L15.28 4.95L11.54 1.21C11.47 1.14 11.42 1.06 11.38 0.98C11.35 0.89 11.33 0.8 11.33 0.7C11.33 0.61 11.35 0.52 11.38 0.43C11.42 0.35 11.47 0.27 11.54 0.2Z"
                            fill="#F16D7F" fillOpacity="1.000000" fillRule="evenodd" />
                        <path
                            d="M0 4.95C0 4.77 0.07 4.59 0.2 4.45C0.34 4.32 0.52 4.25 0.7 4.25L15.58 4.25C15.77 4.25 15.95 4.32 16.08 4.45C16.21 4.59 16.29 4.77 16.29 4.95C16.29 5.14 16.21 5.32 16.08 5.46C15.95 5.59 15.77 5.66 15.58 5.66L0.7 5.66C0.52 5.66 0.34 5.59 0.2 5.46C0.07 5.32 0 5.14 0 4.95Z"
                            fill="#F16D7F" fillOpacity="1.000000" fillRule="evenodd" />
                    </svg>
                </button>
            </div>
            <div className="bonus-box">
                <p className="bonus-box__head">LOYALTY HAS ITS PERKS</p>
                <p className="bonus-box__text">Get in on the loyalty program where you can earn points and unlock serious perks.
                    Starting with
                    these as soon as you join:</p>
                <ul className="bonus-box__list">
                    <li className="bonus-box__link">15% off welcome offer</li>
                    <li className="bonus-box__link">Free shipping, returns and exchanges on all orders</li>
                    <li className="bonus-box__link">$10 off a purchase on your birthday</li>
                    <li className="bonus-box__link">Early access to products</li>
                    <li className="bonus-box__link">Exclusive offers & rewards</li>
                </ul>
            </div>
        </div>
    );
}

export default RegistrationBox;
