import React, { useEffect, useState } from 'react';
import './cart.scss';
import CheckoutCard from './components/CheckoutCard';

import cancelButton from '../../assets/letterx_83737.png';
import { ITEM } from '../_Menu/items';
import { IoIosArrowUp } from 'react-icons/io';
import { BsTrash } from 'react-icons/bs';
const Cart = () => {

    const [cart, setCart] = useState();
    const [total, setTotal] = useState(0);
    useEffect(() => {
        if (!cart) {
            const updatedCart = ITEM.map((item) => ({
                ...item,
                totalPrice: item.quantity * item.price,
            }));
            setCart(updatedCart);
        }
    }, [cart]);

    useEffect(() => {
        if (cart) {
            setTotal(cart.reduce((acc, item) => acc + item.totalPrice, 0));
        }
    }, [cart]);

    // const handleChange = (index, e) => {
    //     const updatedCart = cart.map((item, i) => {
    //         if (index === i) {
    //             const quantity = parseInt(e.target.value);
    //             const totalPrice = quantity * item.price;
    //             return { ...item, quantity, totalPrice };
    //         }
    //         return item;
    //     });

    //     setCart(updatedCart);
    // };
    const handleIncrement = (index, e) => {
        const updatedCart = cart.map((item, i) => {
            if (index === i) {
                const quantity = Math.min(item.quantity + 1, 99);
                const totalPrice = quantity * item.price;
                return { ...item, quantity, totalPrice };
            }
            return item;
        });
        setCart(updatedCart);


    };

    const handleDecrement = (index, e) => {
        const updatedCart = cart.map((item, i) => {
            if (index === i) {
                const quantity = Math.max(item.quantity - 1, 1);
                const totalPrice = quantity * item.price;
                return { ...item, quantity, totalPrice };
            }
            return item;
        });
        setCart(updatedCart);
    };

    const handleDelete = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);

    };
    return (
        <div className="cart-container">
            <div className="orders">
                <table>
                    <thead>
                        <tr>
                            <th> </th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart?.map((item, index) => (
                            <tr key={item.id}>
                                <td>
                                    <img src={item.picture} alt="Pizza" style={{ width: '100px' }} />
                                </td>
                                <td>{item.name}</td>
                                <td>

                                    ${item.price.toFixed(2)}

                                </td>
                                <td className='quantity-column'>
                                    <span>
                                        <button
                                            type="button"
                                            className='arrow'
                                            onClick={(e) => handleDecrement(index, e)}

                                        >
                                            <IoIosArrowUp
                                                style={{ transform: 'rotate(-90deg)' }}
                                            />
                                        </button>
                                        {item.quantity}
                                        <button type="button"
                                            className='arrow'
                                            onClick={(e) => handleIncrement(index, e)}

                                        >
                                            <IoIosArrowUp
                                                style={{
                                                    transform: 'rotate(90deg)',
                                                }}
                                            />
                                        </button>
                                    </span>
                                </td>
                                <td>${item.totalPrice.toFixed(2)}</td>
                                <td className='delete-column'>
                                    <button
                                        onClick={() => handleDelete(index)}>
                                        <BsTrash size={20} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >
            <CheckoutCard total={total} />
        </div >
    );
};

export default Cart;