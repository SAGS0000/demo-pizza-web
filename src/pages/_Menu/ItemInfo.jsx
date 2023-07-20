import React, { useEffect, useState } from 'react';
import './itemInfo.scss';
import { useLocation } from 'react-router-dom';
import SizeRadioButton from './components/SizeRadioButton';
const ItemInfo = () => {
    const { state } = useLocation();
    console.log(state);
    const { item } = state;
    const [currentItem, setCurrentItem] = useState(item);

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
                        <h2>{currentItem.price}</h2>
                        <div className="quantity">
                            <h6>Quantity:
                                <input
                                    type="number"
                                    name="quantity"
                                    min={1}
                                    value={currentItem.quantity}
                                    onChange={handleChange} />
                            </h6>
                        </div>
                        <p>Size: </p><SizeRadioButton />
                        {/* <div className="pizza-size">
                            <h6>Size:
                                <select name="size" id="pizza-size" onChange={handleChange}>
                                    {sizes.map((size) => (
                                        <option key={size.name} value={size.name}>
                                            {size.name} for {size.capacity}
                                        </option>
                                    ))}
                                </select>
                            </h6>
                        </div> */}

                        <p>{currentItem.about}</p>
                    </div>
                    <button>Add to Cart</button>
                </div>


            </div>
        </div>
    );
};

export default ItemInfo;