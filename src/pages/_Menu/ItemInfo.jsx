import React from 'react';
import './itemInfo.scss';
import { useLocation } from 'react-router-dom';
const ItemInfo = () => {
    const { state } = useLocation();
    console.log(state);
    const { item } = state;
    return (
        <div className="container-item">
            <div className="card">

                <div className="pic">
                    <img src="https://media.istockphoto.com/id/521403691/photo/hot-homemade-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=PaISuuHcJWTEVoDKNnxaHy7L2BTUkyYZ06hYgzXmTbo=" alt="" />
                    {/* {item.picture} */}
                </div>
                <div className="about">
                    <div>
                        <h1>{item.name}</h1>
                        <h2>Price: <span>{item.price}</span></h2>
                        <p>{item.about}</p>
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