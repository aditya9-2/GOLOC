import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa"
import Payment from "../../assets/payments.png";

import "./Footer.scss";
const Footer = () => {


    return (

        <footer className="footer">

            <div className="footer-content">

                <div className="col">

                    <div className="title">About</div>

                    <div className="text">
                        Discover a world of quality products that cater to all your needs. Our vast collection of items, from fashion to tech, ensures you'll find what you're looking for. Shop confidently with our secure payment methods and hassle-free returns.

                    </div>

                </div>

                <div className="col">

                    <div className="title">Contact</div>

                    <div className="c-item">

                        <FaLocationArrow />

                        <div className="text">

                            Silver Rocks',TC 9/2170 (1), Edavacode, Sreekariyam, Kallampally-Edavacode Rd, Edavacode, Thiruvananthapuram, Kerala

                        </div>

                    </div>

                    <div className="c-item">

                        <FaMobileAlt />

                        <div className="text">

                            Phone: 696 969 6969
                        </div>

                    </div>

                    <div className="c-item">

                        <FaEnvelope />

                        <div className="text">

                            Email: bikem23761@galcake.com

                        </div>

                    </div>

                </div>

                <div className="col">

                    <div className="title">Categories</div>

                    <span className="text">Fish, Chicken & Meat</span>
                    <span className="text">Fruits & Vegetables</span>
                    <span className="text">Helath & Hygiene</span>
                    <span className="text">Pet care</span>


                </div>

                <div className="col">

                    <div className="title">Pages</div>

                    <span className="text">
                        Home


                    </span>
                    <span className="text">
                        About

                    </span>

                    <span className="text">Contact Us</span>

                </div>

            </div>

            <div className="bottom-bar">

                <div className="bottom-bar-content">

                    <div className="text">

                        GOLOC  | &copy;2023 CREATED BY  ~ ADITYA & PROJATA | MAJOR PROJECT.

                    </div>

                    <img src={Payment} alt="Payment" />

                </div>

            </div>

        </footer>
    );
};

export default Footer;

