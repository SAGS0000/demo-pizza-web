import React from 'react';
import './about.scss';
import { FaLocationDot } from 'react-icons/fa6';
import { HiMail } from 'react-icons/hi';
import { BsTelephoneFill } from 'react-icons/bs';
import MessageForm from './MessageForm';
import Footer from '../../components/Footer';
const About = () => {
    return (
        <div className="container">
            <div className="header">
                <h1>Contact Us <div className="dash"></div></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum et, quos quis porro sit iure nemo laboriosam pariatur a sapiente voluptatem debitis non. Hic nostrum ea aspernatur distinctio asperiores dolorum.</p>
            </div>
            <div className="contacts">
                <div className="g1">
                    <FaLocationDot className='icons' />
                    <div className="info">
                        <h3>Location</h3>
                        <p>123 Pizza Street <br />Metro Manila, Philippines</p>
                    </div>
                </div>
                <div className="g2">
                    <HiMail className='icons' />
                    <div className="info">
                        <h3>Email Address</h3>
                        <p>pizzeria@gmail.com</p>
                    </div>
                </div>
                <div className="g3">
                    <BsTelephoneFill className='icons' />
                    <h3>Phone Number</h3>
                    <p>(123) 456-7890</p>
                </div>
            </div>
            <MessageForm />
            <Footer />
        </div>
    );
};

export default About;