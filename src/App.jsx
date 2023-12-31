import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/_Home/Home';
import Menu from './pages/_Menu/Menu';
import About from './pages/_About/About';
import ItemInfo from './pages/_Menu/ItemInfo';
import Cart from './pages/_Cart/Cart';
import Footer from './components/Footer';
import Checkout from './pages/ShopComponents/_Checkout/Checkout';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} >
                        <Route path=":id" element={<ItemInfo />} />
                    </Route>
                    <Route path='checkout' element={<Checkout />} />
                    <Route path="/product/:id?" element={<ItemInfo />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path="/about" element={<About />} />
                </Routes>


            </BrowserRouter>
        </>
    );
};

export default App;