import React from 'react';
import ImageAssets from '../components/ImgAssets';

function FooterShopService() {
    return (
        <section className="footer__shop__service center">
            <article className="footer_service">
                <img className="forma__img" src={ImageAssets.formashop1} alt="" />
                <h3 className="footer__shop_title">Free Delivery</h3>
                <p className="footer__shop_text">Worldwide delivery on all. Authorit tively morph next-generation innovation with extensive models.</p>
            </article>
            <article className="footer_service">
                <img className="forma__img" src={ImageAssets.formashop2} alt="" />
                <h3 className="footer__shop_title">Sales & discounts</h3>
                <p className="footer__shop_text">Worldwide delivery on all. Authorit tively morph next-generation innovation with extensive models.</p>
            </article>
            <article className="footer_service">
                <img className="forma__img" src={ImageAssets.formashop3} alt="" />
                <h3 className="footer__shop_title">Quality assurance</h3>
                <p className="footer__shop_text">Worldwide delivery on all. Authorit tively morph next-generation innovation with extensive models.</p>
            </article>
        </section>
    );
}

export default FooterShopService;
