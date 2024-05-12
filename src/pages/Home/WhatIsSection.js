import React from 'react';
import ImageAssets from '../../components/ImgAssets';

function WhatIsSection() {
    return (
        <section className="what__is center">
            <article className="information">
                <img className="img__information" src={ImageAssets.menu1} alt="" />
                <h3 className="information__text">30% OFF</h3>
                <h2 className="information__text2">FOR WOMEN</h2>
            </article>
            <article className="information">
                <img className="img__information" src={ImageAssets.menu2} alt="" />
                <h3 className="information__text">HOT DEAL</h3>
                <h2 className="information__text2">FOR MEN</h2>
            </article>
            <article className="information">
                <img className="img__information" src={ImageAssets.menu3} alt="" />
                <h3 className="information__text">NEW ARRIVALS</h3>
                <h2 className="information__text2">FOR KIDS</h2>
            </article>
            <article className="information 4__inform">
                <img className="img__information img4" src={ImageAssets.menu4} alt="" />
                <h3 className="information__text">LUXIROUS & TRENDY</h3>
                <h2 className="information__text2">ACCESSORIES</h2>
            </article>
        </section>
    );
}

export default WhatIsSection;
