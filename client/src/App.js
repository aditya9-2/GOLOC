import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import About from "./components/About/about";
import Login from "./components/Login/login";
import AppContext from "./utils/context";


// import firebase from "./misc/firebase";

function App() {

    return (
        <BrowserRouter>

            <AppContext>

                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                    {/* Created Login page */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/about" element={<About />} />

                </Routes>

                <Newsletter />

                <Footer />

            </AppContext>

        </BrowserRouter>
    );
}

export default App;
