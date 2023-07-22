import React from 'react';
import './home.scss';
import pizza from '../../assets/pizza-png-19323.png';
import { BsCart } from 'react-icons/bs';
import Footer from '../../components/Footer';
import pizza101 from '../../assets/pizza101.png';
const Home = () => {
    return (
        <div className="home_container">
            <div className='header'>
                <div className='home_info'>
                    <h1>Every Slice,<br /> a Taste of Heaven!<div></div></h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere vel blanditiis molestiae laboriosam voluptate nostrum rem atque repellat,</p>
                    <button><BsCart />Order Now</button>
                </div>
                <img src={pizza} alt="" />
                <div className="circle"></div>
            </div>
            <div className="adds">
                <img src={pizza101} alt="" />
                <h2>Your Pizza Adventure Awaits!

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odio fugit, deleniti voluptatum cumque similique? Eos, consequuntur est rerum sed dolorem placeat omnis ipsum maiores officia nesciunt illo voluptatibus molestias.</p>

                </h2>
            </div>
            <Footer />
        </div>
    );
};

export default Home;