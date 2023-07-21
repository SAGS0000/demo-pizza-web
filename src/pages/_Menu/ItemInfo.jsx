import React, { useEffect, useState } from 'react';
import './itemInfo.scss';
import { useLocation } from 'react-router-dom';
import SizeRadioButton from './components/SizeRadioButton';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import StarRating from './components/StarRating';

const ItemInfo = () => {
    const { state } = useLocation();
    console.log(state);
    const { item } = state;
    const [currentItem, setCurrentItem] = useState(item);

    const handleIncrement = () => {
        setCurrentItem(prev => (
            {
                ...prev,
                quantity: Math.min(prev.quantity + 1, 99)
            }
        ));
    };

    const handleDecrement = () => {
        setCurrentItem(prev => (
            {
                ...prev,
                quantity: Math.max(prev.quantity - 1, 1)
            }
        ));
    };

    const handleChange = (e) => {
        // return () => {
        //     setCurrentItem({ ...currentItem, quantity: e.target.value });
        // };
        setCurrentItem({ ...currentItem, [e.target.name]: e.target.value });
    };
    console.log(currentItem);

    const sizes = [
        { name: 'Small', capacity: '3 pax' },
        { name: 'Medium', capacity: '5 pax' },
        { name: 'Large', capacity: '8 pax' },
    ];
    return (
        <div className="container-item">
            <div className="card">

                <div className="pic">
                    <img src={item.picture} alt="" />
                </div>
                <div className="about">
                    <div>
                        <h1>{currentItem.name}</h1>
                        <div className='price-row'>
                            <h2>₱{currentItem.price}</h2>
                            <StarRating />
                        </div>
                        <p>{currentItem.about}</p>
                        <div className="modifier">
                            <p>Quantity:
                                <div className='row'>
                                    {/* <input
                                        type="number"
                                        name="quantity"
                                        min={1}
                                        max={50}
                                        value={currentItem.quantity}
                                        onChange={handleChange} /> */}
                                    <h6>{currentItem.quantity}</h6>
                                    <div className='arrows'>
                                        <button
                                            type="button"
                                            className='arrow'
                                            onClick={handleIncrement}>
                                            <IoIosArrowUp size={20} />
                                        </button>
                                        <button type="button"
                                            className='arrow'
                                            onClick={handleDecrement}
                                        >
                                            <IoIosArrowDown size={20} />
                                        </button>
                                    </div>
                                </div>
                            </p>
                            <p>Size:

                                <SizeRadioButton />
                            </p>
                        </div>


                    </div>
                    <button>Add to Cart</button>
                </div>


            </div>
        </div>
    );
};

export default ItemInfo;