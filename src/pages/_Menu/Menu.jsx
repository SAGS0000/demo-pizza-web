import React from 'react';
import './menu.scss';
import { ITEM } from './items';
import { useNavigate } from 'react-router-dom';
import SortingItem from './components/SortingItem';
import FilterButton from './components/FilterButton';
import { BsCart, BsFillStarFill } from 'react-icons/bs';
const Menu = () => {
    const navigate = useNavigate();
    return (
        <div className="container">
            <div className='title'>
                <h1>Menu</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsum, optio velit fuga, asperiores distinctio odio delectus tempora esse maiores quas, tenetur ea eligendi consectetur saepe ducimus! Cum, quas animi?</p>
            </div>
            <div className="menu-buttons">
                <FilterButton />
                <SortingItem />
            </div>
            <div className="menu-container">
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

export default Menu;