import React from "react";

import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn
} from 'react-icons/fa'

import "./Newsletter.scss";


const Newsletter = () => {
    return (

        <div className="newsletter-section">

            <div className="newsletter-content">

                <span className="small-text">Newsletter</span>

                <span className="big-text">Sign Up for latest updates and offers</span>

                <div className="form">

                    <input type="text" placeholder="Email Address" />
                    <button>Subscribe</button>

                </div>

                <div className="text">Will be used in accordance with our Privacy Policy</div>

                <div className="social-icons">

                    <div className="icon">

                        <a href={"https://facebook.com/"} target={"_blank"} rel={"noreferrer"}>

                            <FaFacebookF size={14} color={"white"} />

                        </a>
                    </div>

                    <div className="icon">

                        <a href={"https://instagram.com/"} target={"_blank"} rel={"noreferrer"}>

                            <FaInstagram size={14} color={"white"} />

                        </a>
                    </div>

                    <div className="icon">

                        <a href={"https://www.linkedin.com/"} target={"_blank"} rel={"noreferrer"}>

                            <FaLinkedinIn size={14} color={"white"} />

                        </a>
                    </div>

                    <div className="icon">

                        <a href={"https://twitter.com/"} target={"_blank"} rel={"noreferrer"}>

                            <FaTwitter size={14} color={"white"} />

                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
