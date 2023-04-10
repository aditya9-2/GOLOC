import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
// import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";

import "./Header.scss";

const Header = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const { cartCount } = useContext(Context);
    const navigate = useNavigate()

    const closeMobileMenu = () => {
        setShowMobileMenu(false);
    };

    const handleMenuItemClick = (path) => {
        closeMobileMenu();
        navigate(path);
    };

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
                    <ul className={`left ${showMobileMenu ? 'show-mobile-menu' : ''}`}>
                        <li onClick={() => handleMenuItemClick("/")}>Home</li>
                        <li onClick={() => handleMenuItemClick("/about")}>About</li>
                        <li onClick={() => handleMenuItemClick("/login")}>Login</li>
                        {showMobileMenu && (
                            <li className="close-icon" onClick={() => setShowMobileMenu(false)}>
                                <FaTimes />
                            </li>
                        )}
                    </ul>

                    {/* middle Divition */}
                    <div className="center" onClick={() => navigate("/")}>GOLOC.</div>

                    {/* Right divition */}
                    <div className="right">

                        <FaSearch onClick={() => setShowSearch(true)} />

                        {/* <AiOutlineHeart /> // Heart Shape*/}

                        <span className="cart-icon"
                            onClick={() => setShowCart(true)}
                        >
                            <FaShoppingCart />

                            {/* Add Cart Number */}
                            {!!cartCount && <span>
                                {cartCount}
                            </span>}

                        </span>

                        <GiHamburgerMenu
                            size={30}
                            className="mobile-toggler"
                            onClick={() => setShowMobileMenu(true)}
                        />

                    </div>
                </div>
            </header>

            {showCart && <Cart setShowCart={setShowCart} />}
            {showSearch && <Search setShowSearch={setShowSearch} />}

        </>
    );
};

export default Header;