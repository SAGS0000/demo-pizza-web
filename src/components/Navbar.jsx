import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';
const Navbar = () => {
    const LINKS = ['Menu', 'Cart', 'About'];
    return (
        <div className='navbar'>
            <h1>Pizzeria</h1>
            <div className="links">
                <NavLink to='/' >
                    Home
                </NavLink>
                {LINKS.map((link, index) => (
                    <NavLink to={`/${link.toLowerCase()}`} key={index}>
                        {link}
                    </NavLink>
                ))}
                {/* <a href='/'>Home</a>
                <a href='/menu'>Menu</a>
                <a href='/cart'>Cart</a>
                <a href='/checkout'>Checkout</a>
                <a href='/about'>About</a> */}
            </div>
        </div>
    );
};

export default Navbar;