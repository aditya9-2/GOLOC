import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import About from "./components/About/about";
import Login from "./components/Login/login";
import AppContext from "./utils/context";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [firstName, setFirstName] = useState("");

    const handleLogin = (name) => {
        setLoggedIn(true);
        setFirstName(name);
    };

    const handleLogout = () => {
        setLoggedIn(false);
        setFirstName("");
    };

    return (
        <BrowserRouter>
            <AppContext>
                <Header loggedIn={loggedIn} firstName={firstName} onLogout={handleLogout} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login onLogin={handleLogin} />} />
                </Routes>
                <Newsletter />
                <Footer />
            </AppContext>
        </BrowserRouter>
    );
}

export default App;