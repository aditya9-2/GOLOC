import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
// import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";

import "./Header.scss";

const Header = () => {

    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const { cartCount } = useContext(Context);
    const navigate = useNavigate()

    // Scroll-Behaviour
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {

            setScrolled(true);
        }
        else {
            setScrolled(false)
        }
    };

    // First Time Render (Hook)
    useEffect(() => {

        window.addEventListener("scroll", handleScroll)

    }, []);


    return (

        <>

            <header className={`main-header ${scrolled ? 'sticky-header' : ''}`}>

                {/* Main Header content including left, right, center */}
                <div className="header-content">

                    {/* Left Divition */}
                    <ul className="left">
                        <li onClick={() => navigate("/")}>Home</li>
                        <li>About</li>
                        <li onClick={() => navigate("/login")}>Login</li>
                    </ul>

                    {/* middle Divition */}
                    <div className="center" onClick={() => navigate("/")}>GOLOC.</div>

                    {/* Right divition */}
                    <div className="right">

                        <TbSearch onClick={() => setShowSearch(true)} />

                        {/* <AiOutlineHeart /> // Heart Shape*/}

                        <span className="cart-icon"
                            onClick={() => setShowCart(true)}
                        >
                            <CgShoppingCart />

                            {/* Add Cart Number */}
                            {!!cartCount && <span>
                                {cartCount}
                            </span>}

                        </span>

                    </div>

                </div>

            </header>

            {showCart && <Cart setShowCart={setShowCart} />}
            {showSearch && <Search setShowSearch={setShowSearch} />}

        </>
    );
};

export default Header;
