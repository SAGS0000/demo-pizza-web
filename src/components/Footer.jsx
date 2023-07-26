import React from 'react';
import './footer.scss';
import twitter from '../assets/twitter.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';



const Footer = () => {
    return (
        <div className="animate-on-scroll footer">
            <div className="info " >
                <div className="g1">
                    <h4>Pizzeria</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore voluptatum sed cum ducimus officia aperiam velit necessitatibus repellat.</p>
                </div>
                <div className="g2">
                    <h4>LINKS</h4>
                    <ul>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/faq">FAQ</a></li>
                    </ul>
                </div>
                <div className="g3">
                    <h4>CONTACT</h4>
                    <ul>
                        <li>123 Pizza Street, NY, USA</li>
                        <li>Email: info@pizzashop.com</li>
                        <li>Phone: (123) 456-7890</li>
                    </ul>
                </div>
                <div className="g4">
                    <h4>SOCIAL MEDIA</h4>
                    <ul>
                        <li><a href="http://facebook.com" target='_blank' rel='noreferrer'><img src={facebook} alt="Facebook" /></a></li>
                        <li><a href="http://twitter.com" target='_blank' rel='noreferrer'><img src={twitter} alt="Twitter" /></a></li>
                        <li><a href="http://instagram.com" target='_blank' rel='noreferrer'><img src={instagram} alt="Instagram" /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;