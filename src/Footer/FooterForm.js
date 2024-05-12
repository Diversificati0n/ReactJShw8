import React from 'react';
import ImageAssets from '../components/ImgAssets';

function FooterForm() {
    return (
        <section className="footer__form center">
            <img className="footer__imgf" src={ImageAssets.footer_img} alt="" />
            <div className="reviews">
                <img className="footer__form__img" src={ImageAssets.Intersect} alt="" />
                <a className="footer__form__text">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum“</a>
            </div>
            <div className="footer__subscribe">
                <h3 className="footer__subscribe__text">SUBSCRIBE</h3>
                <h5 className="footer__subscribe__text2">FOR OUR NEWSLETTER AND PROMOTIONS</h5>
                <div className="wrapper_inpt">
                    <input type="text" placeholder="Enter Your Email" />
                    <div className="btn_area">
                        Subscribe
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FooterForm;