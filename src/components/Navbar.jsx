import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';
const Navbar = () => {
    useEffect(() => {
        window.addEventListener('scroll', setNavbarSize);
        return () => {
            window.removeEventListener('scroll', setNavbarSize);
        };
    }, []);

    function setNavbarSize() {
        const navbar = document.getElementById("navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("small");
        } else {
            navbar.classList.remove("small");
        }
    }

    const LINKS = ['Menu', 'Cart', 'About'];
    return (
        <div className='navbar' id='navbar'>
            <h1>Pizzeria</h1>
            <div className="links">
                <NavLink to='/' >
                    Home
                    <div className="dash"></div>
                </NavLink>
                <NavLink to='/menu' >
                    Menu
                    <div className="dash"></div>
                </NavLink>
                <NavLink to='/cart' className='notification'>
                    {/* <p>3</p> */}
                    Cart
                    <div className="dash"></div>
                </NavLink>
                <NavLink to='/about' >
                    Contact
                    <div className="dash"></div>
                </NavLink>

            </div>
        </div>
    );
};

export default Navbar;