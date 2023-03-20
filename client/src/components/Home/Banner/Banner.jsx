import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
import { Link } from "react-scroll";

const Banner = () => {
    return (

        <div className="hero-banner">
            <div className="content">

                <div className="text-content">

                    <h1>SALES</h1>

                    <p>
                        Unlock unbeatable deals and elevate your    shopping experience with our premium products. Shop now and enjoy exclusive discounts!
                    </p>

                    {/* Call to Actions */}
                    <div className="ctas">
                        {/* <div className="banner-cta">Read More</div> */}
                        <div>

                            <Link className="banner-cta" to="products" spy={true} smooth={true} offset={-180} duration={500}>
                                Shop Now
                            </Link>

                        </div>
                    </div>

                </div>

                {/* Banner Image -> Headset Image  */}
                <img className="banner-img" src={BannerImg} alt="" />

            </div>

        </div>

    );
};

export default Banner;
