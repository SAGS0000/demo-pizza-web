import React from 'react';
import './home.scss';
import pizza from '../../assets/pizza-png-19323.png';

const Home = () => {
    return (
        <div className="home_container">
            <div className='home_info'>
                <h1>Pizzeria's Shop</h1>
                <h2>Shop Location</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere vel blanditiis molestiae laboriosam voluptate nostrum rem atque repellat, alias architecto sequi autem ipsam, nesciunt beatae neque amet voluptatibus eius incidunt!</p>
                <button>Buy Now</button>
            </div>
            <div className="circle">
                <img src={pizza} alt="" />
            </div>
        </div>
    );
};

export default Home;