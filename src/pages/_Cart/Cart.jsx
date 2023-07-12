import React, { useEffect, useState } from 'react';
import './cart.scss';
const Cart = () => {

    const ITEM = [{
        name: 'Lena Douglas',
        price: 408,
        quantity: 10,
        totalPrice: 0
    }, {
        name: 'Joshua Taylor',
        price: 762,
        quantity: 2,
        totalPrice: 0
    }, {
        name: 'Douglas Roberts',
        price: 380,
        quantity: 4,
        totalPrice: 0
    }];

    const [cart, setCart] = useState();
    useEffect(() => {
        setCart(ITEM);
    }, []);

    //TODO
    //quantity cant be changed
    //totalPrice should be quantity * price    

    const handleChange = e => {
        setCart({ ...ITEM, quantity: parseInt(e.target.value) });
    };

    return (
        <div className="cart-container">
            <div className="orders">
                {cart?.map((item) =>
                    <div key={item.name} className="order-card">
                        <div className="order-img">
                            <img src="https://media.istockphoto.com/id/521403691/photo/hot-homemade-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=PaISuuHcJWTEVoDKNnxaHy7L2BTUkyYZ06hYgzXmTbo=" alt="" />
                        </div>
                        <div className="order-info">

                            <h6>Name:<br /><span>{item.name}</span></h6>
                            <h6>Quantity:
                                <br />
                                <span><input
                                    type="number"
                                    name="quantity"
                                    value={item?.quantity}
                                    onChange={handleChange} /></span>
                            </h6>

                            <h6>Price:<br /><span>2000</span></h6>
                            <button><img src="https://th.bing.com/th/id/R.3ce100a95c2c36b52db406cf1be06943?rik=kdycEKrJHmv7Tg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_376308.png&ehk=J3fNGglWWQu5Y3%2fUU9y%2f6%2fLO%2bFqR4pAZRMfS%2fX1u6PQ%3d&risl=&pid=ImgRaw&r=0" alt="" /></button>
                        </div>
                    </div>
                )}
            </div >
            <div className="checkout">
                <div className="checkout-card"></div>
            </div>
        </div >
    );
};

export default Cart;