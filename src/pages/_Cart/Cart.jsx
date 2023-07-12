import React from 'react';
import './cart.scss';
const Cart = () => {
    return (
        <div className="cart-container">
            <div className="orders">
                <div className="order-card">
                    <div className="order-img">
                        {/* <p>IMAGE</p> */}
                        <img src="https://media.istockphoto.com/id/521403691/photo/hot-homemade-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=PaISuuHcJWTEVoDKNnxaHy7L2BTUkyYZ06hYgzXmTbo=" alt="" />
                    </div>
                    <div className="order-info">
                        <h1>NAME</h1>
                        <div className="quantity">
                            <button>Left Arrow</button>
                            <input type="number" name="" id="" />
                            <button>Right Arrow</button>

                        </div>
                        <button><img src="https://th.bing.com/th/id/R.3ce100a95c2c36b52db406cf1be06943?rik=kdycEKrJHmv7Tg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_376308.png&ehk=J3fNGglWWQu5Y3%2fUU9y%2f6%2fLO%2bFqR4pAZRMfS%2fX1u6PQ%3d&risl=&pid=ImgRaw&r=0" alt="" /></button>
                    </div>
                </div>
                <div className="order-card">
                    <p>qweqwew</p>
                </div>
                <div className="order-card">
                    <p>qweqwew</p>
                </div>
                <div className="order-card">
                    <p>qweqwew</p>
                </div>
                <div className="order-card">
                    <p>qweqwew</p>
                </div>
                <div className="order-card">
                    <p>qweqwew</p>
                </div>

            </div>
            <div className="checkout">
                <div className="checkout-card"></div>
            </div>
        </div>
    );
};

export default Cart;