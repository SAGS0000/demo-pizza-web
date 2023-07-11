import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';
const Navbar = () => {
    return (
        <div className='navbar'>
            <h1>Pizzeria</h1>
            <div className="links">
                <NavLink
                    to='/'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >Home</NavLink>
                <NavLink
                    to='/menu'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >Menu</NavLink>
                <NavLink
                    to='/about'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >About</NavLink>
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