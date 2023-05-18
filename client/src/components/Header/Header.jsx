import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";
import { signOut } from 'firebase/auth';
import { auth } from "../misc/firebase";

import "./Header.scss";

const Header = ({ onLogout }) => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const { cartCount } = useContext(Context);
    const navigate = useNavigate();

    const closeMobileMenu = () => {
        setShowMobileMenu(false);
    };

    const handleMenuItemClick = (path) => {
        closeMobileMenu();
        navigate(path);
    };

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                onLogout();
                setShowCart(false);
                setShowSearch(false);
                navigate("/");
            })
            .catch((error) => {
                console.error(error);
            });

        setShowMobileMenu(false);

    };

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <header className={`main-header ${scrolled ? 'sticky-header' : ''}`}>
                <div className="header-content">
                    <ul className={`left ${showMobileMenu ? 'show-mobile-menu' : ''}`}>
                        {showMobileMenu && (
                            <FaTimes
                                size={30}
                                className="close-icon"
                                onClick={() => setShowMobileMenu(false)}
                            />
                        )}
                        <li onClick={() => handleMenuItemClick("/")}>Home</li>
                        <li onClick={() => handleMenuItemClick("/about")}>About</li>
                        {auth.currentUser ? (
                            <li onClick={handleLogout}>Logout</li>
                        ) : (
                            <li>
                                {/* <Link to="/login">Login</Link>
                                  // this is causing issue for login it gives underline */}
                                <li onClick={() => handleMenuItemClick("/login")}> Login</li>
                            </li>
                        )}
                    </ul>

                    <div className="center" onClick={() => navigate("/")}>
                        GOLOC.
                    </div>

                    <div className="right">
                        <FaSearch onClick={() => setShowSearch(true)} />

                        <span className="cart-icon" onClick={() => setShowCart(true)}>
                            <FaShoppingCart />
                            {!!cartCount && <span>{cartCount}</span>}
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