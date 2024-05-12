import React from 'react';
import ImageAssets from '../../components/ImgAssets';

function Range() {
    return (
        <div className="range center">
            <div className="header__range">
                <h2 className="header__title">Featured Items</h2>
                <h3 className="header__range__text">Shop for items based on what we featured in this week</h3>
            </div>
            <section className="banners">
                <article className="banner">
                    <img className="banner_img" src={ImageAssets.product11} alt="" />
                    <div className="banner__description">
                        <h3 className="banner__title">ELLERY X M'O CAPSULE</h3>
                        <h4 className="banner__text">Known for her sculptural takes on traditional tailoring, Australian arbiter
                            of cool Kym Ellery teams up with Moda Operandi.</h4>
                        <h4 className="price">$52.00</h4>
                    </div>
                </article>
                <article className="banner">
                    <img className="banner_img2" src={ImageAssets.product22} alt="" />
                    <div className="banner__description">
                        <h3 className="banner__title">ELLERY X M'O CAPSULE</h3>
                        <h4 className="banner__text">Known for her sculptural takes on traditional tailoring, Australian arbiter
                            of cool Kym Ellery teams up with Moda Operandi.</h4>
                        <h4 className="price">$52.00</h4>
                    </div>
                </article>
                <article className="banner">
                    <img className="banner_img" src={ImageAssets.product33} alt="" />
                    <div className="banner__description">
                        <h3 className="banner__title">ELLERY X M'O CAPSULE</h3>
                        <h4 className="banner__text">Known for her sculptural takes on traditional tailoring, Australian arbiter
                            of cool Kym Ellery teams up with Moda Operandi.</h4>
                        <h4 className="price">$52.00</h4>
                    </div>
                </article>
                <article className="banner">
                    <img className="banner_img" src={ImageAssets.product44} alt="" />
                    <div className="banner__description">
                        <h3 className="banner__title">ELLERY X M'O CAPSULE</h3>
                        <h4 className="banner__text">Known for her sculptural takes on traditional tailoring, Australian arbiter
                            of cool Kym Ellery teams up with Moda Operandi.</h4>
                        <h4 className="price">$52.00</h4>
                    </div>
                </article>
                <article className="banner">
                    <img className="banner_img" src={ImageAssets.product55} alt="" />
                    <div className="banner__description">
                        <h3 className="banner__title">ELLERY X M'O CAPSULE</h3>
                        <h4 className="banner__text">Known for her sculptural takes on traditional tailoring, Australian arbiter
                            of cool Kym Ellery teams up with Moda Operandi.</h4>
                        <h4 className="price">$52.00</h4>
                    </div>
                </article>
                <article className="banner">
                    <img className="banner_img" src={ImageAssets.product66} alt="" />
                    <div className="banner__description">
                        <h3 className="banner__title">ELLERY X M'O CAPSULE</h3>
                        <h4 className="banner__text">Known for her sculptural takes on traditional tailoring, Australian arbiter
                            of cool Kym Ellery teams up with Moda Operandi.</h4>
                        <h4 className="price">$52.00</h4>
                    </div>
                </article>
            </section>
            <div className="button">
                <button className="what__is_button">Browse All Product</button>
            </div>
        </div>
    );
}

export default Range;
