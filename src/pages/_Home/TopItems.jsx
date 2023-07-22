import React from 'react';
import './home.scss';
import { BsFillStarFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { ITEM } from '../_Menu/items';
import useScrollAnimation from './useScrollAnimation';
const TopItems = () => {
    const navigate = useNavigate();
    // useScrollAnimation('animate-on-scroll');

    return (
        <div className='animate-on-scroll top-items-container'>
            <h6>Top Items
                <div className="dash"></div>
            </h6>
            <div className="top-items">
                {ITEM.map(item =>
                    <div
                        key={item.id}
                        className="menu-item"
                        onClick={() => { navigate(`/product/${item.id}?`, { state: { item } }); }}
                    >
                        <div className="pic">
                            <img src={item.picture} alt="" />
                        </div>
                        <div className='about'>
                            <h5>{item.name} <span>₱{item.price}</span></h5>
                            <div className="star-rating">
                                <BsFillStarFill />
                                <BsFillStarFill />
                                <BsFillStarFill />
                                <BsFillStarFill />
                                <BsFillStarFill />
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        {/* <button><BsCart size={25} />Order Now</button> */}
                    </div>)}
            </div>
        </div>
    );
};

export default TopItems;