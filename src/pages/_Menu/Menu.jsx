import React from 'react';
import './menu.scss';
import { ITEM } from './items';
const Menu = () => {
    return (
        <div className="container">
            <div className='title'>
                <h1>Menu</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsum, optio velit fuga, asperiores distinctio odio delectus tempora esse maiores quas, tenetur ea eligendi consectetur saepe ducimus! Cum, quas animi?</p>
            </div>
            <div className="menu-container">
                {ITEM.map(item =>
                    <div key={item.id} className="menu-item">

                        <div className="pic"
                            style={{ background: 'red' }}>

                        </div>
                        <div className='about'>
                            <h5>{item.name}</h5>
                            <p>Price: <span>{item.price}</span></p>
                            <h6>{item.about}</h6>
                        </div>
                    </div>)}
            </div>
        </div>
    );
};

export default Menu;