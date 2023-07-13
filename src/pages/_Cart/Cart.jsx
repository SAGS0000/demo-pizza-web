import React, { useEffect, useState } from 'react';
import './cart.scss';
import CheckoutCard from './components/CheckoutCard';

import cancelButton from '../../assets/letterx_83737.png';
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
        if (!cart) {
            setCart(ITEM);
        }
    }, [cart]);
    useEffect(() => {
        if (!cart) {
            const updatedCart = ITEM.map((item) => ({
                ...item,
                totalPrice: item.quantity * item.price,
            }));
            setCart(updatedCart);
        }
    }, [cart]);

    //TODO
    //quantity cant be changed
    //totalPrice should be quantity * price    

    const handleChange = (index, e) => {
        const updatedCart = cart.map((item, i) => {
            if (index === i) {
                const quantity = parseInt(e.target.value);
                const totalPrice = quantity * item.price;
                return { ...item, quantity, totalPrice };
            }
            return item;
        });

        setCart(updatedCart);

        // const updatedCart = [...cart];
        // updatedCart[index].quantity = parseInt(e.target.value);
        // updatedCart[index].totalPrice = updatedCart[index].quantity * updatedCart[index].price;
        // setCart(updatedCart);

        // setCart((prevCart) => {
        //     return prevCart.map((item, i) => {
        //         if (index === i) {
        //             return {
        //                 ...item,
        //                 quantity: parseInt(e.target.value),
        //                 totalPrice: item.quantity * item.price
        //             };
        //         } else {
        //             return item;
        //         }
        //     });
        // });
    };
    console.log(cart);
    return (
        <div className="cart-container">
            <div className="orders">
                {cart?.map((item, index) =>
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
                                    min={1}
                                    value={item.quantity}
                                    onChange={(e) => handleChange(index, e)} /></span>
                            </h6>

                            <h6>Price:<br /><span>{item.totalPrice}</span></h6>
                            <button>
                                <img src={cancelButton} alt="" />
                            </button>
                        </div>
                    </div>
                )}
            </div >
            <CheckoutCard />
        </div >
    );
};

export default Cart;