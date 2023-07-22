import React, { useEffect } from 'react';
import './home.scss';
import pizza from '../../assets/pizza-png-19323.png';
import { BsCart } from 'react-icons/bs';
import Footer from '../../components/Footer';
import pizza101 from '../../assets/pizza101.png';
import TopItems from './TopItems';
const Home = () => {
    useEffect(() => {
        function isInViewport(el) {
            const rect = el.getBoundingClientRect();
            const offset = 0;
            return (
                rect.top >= -offset &&
                rect.left >= -offset &&
                rect.bottom <= 900 &&
                // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 200 &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth) + offset
            );
        }
        function handleScroll() {
            const divElements = document.querySelectorAll(".animate-on-scroll");
            console.log(divElements.length);

            divElements.forEach((divElement) => {
                if (divElement.classList.contains("show")) {
                    return;
                }
                if (isInViewport(divElement)) {
                    divElement.classList.add("show");
                }
            });
        }
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

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
            <div className="animate-on-scroll adds">
                <img src={pizza101} alt="" className='from-left' />
                <h2 className='from-right'>Your Pizza Adventure Awaits!

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odio fugit, deleniti voluptatum cumque similique? Eos, consequuntur est rerum sed dolorem placeat omnis ipsum maiores officia nesciunt illo voluptatibus molestias.</p>

                </h2>
            </div>
            <TopItems />
            <Footer />
        </div>
    );
};

export default Home;