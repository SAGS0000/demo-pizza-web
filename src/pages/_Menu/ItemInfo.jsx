import React, { useEffect, useState } from 'react';
import './itemInfo.scss';
import { useLocation } from 'react-router-dom';
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
                    <img src="https://media.istockphoto.com/id/521403691/photo/hot-homemade-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=PaISuuHcJWTEVoDKNnxaHy7L2BTUkyYZ06hYgzXmTbo=" alt="" />
                    {/* {item.picture} */}
                </div>
                <div className="about">
                    <div>
                        <h1>{currentItem.name}</h1>
                        <h2>Price: <span>{currentItem.price}</span></h2>
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
                        <div className="pizza-size">
                            <h6>Size:
                                <select name="size" id="pizza-size" onChange={handleChange}>
                                    {sizes.map((size) => (
                                        <option key={size.name} value={size.name}>
                                            {size.name} for {size.capacity}
                                        </option>
                                    ))}
                                </select>
                            </h6>
                        </div>

                        <p>{currentItem.about}</p>
                    </div>
                    <div className='row'>
                        <button>Add to Cart</button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ItemInfo;