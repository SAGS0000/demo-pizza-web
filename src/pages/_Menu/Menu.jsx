import React from 'react';
import './menu.scss';
import { ITEM } from './items';
import { useNavigate } from 'react-router-dom';
const Menu = () => {
    const navigate = useNavigate();
    return (
        <div className="container">
            <div className='title'>
                <h1>Menu</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsum, optio velit fuga, asperiores distinctio odio delectus tempora esse maiores quas, tenetur ea eligendi consectetur saepe ducimus! Cum, quas animi?</p>
            </div>
            <div className="menu-container">
                {ITEM.map(item =>
                    <div
                        key={item.id}
                        className="menu-item"
                        onClick={() => { navigate(`/product/${item.id}?`, { state: { item } }); }}
                    >

                        <div className="pic"
                            style={{ background: 'red' }}>
                            <img src="https://media.istockphoto.com/id/521403691/photo/hot-homemade-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=PaISuuHcJWTEVoDKNnxaHy7L2BTUkyYZ06hYgzXmTbo=" alt="" />

                        </div>
                        <div className='about'>
                            <h5>{item.name}</h5>
                            <p>Price: <span>{item.price}</span></p>
                            {/* <h6>{item.about}</h6> */}
                        </div>
                    </div>)}
            </div>
        </div>
    );
};

export default Menu;