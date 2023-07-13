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
                <NavLink to='/menu' >
                    Menu
                </NavLink>
                <NavLink to='/cart' className='notification'>
                    <p>3</p>
                    Cart
                </NavLink>
                <NavLink to='/about' >
                    About
                </NavLink>
                {/* {LINKS.map((link, index) => (
                    <NavLink to={`/${link.toLowerCase()}`} key={index}>
                        {link}
                    </NavLink>
                ))} */}
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