import React, { useEffect, useState } from 'react';
import './checkout.scss';
import { ITEM } from '../../_Menu/items';
import Footer from '../../../components/Footer';
const Checkout = () => {
    const [cart, setCart] = useState([]);
    const [paymentMethod, setPaymentMethod] = useState('cash');

    useEffect(() => {
        const updatedCart = ITEM.map((item) => ({
            ...item,
            totalPrice: item.quantity * item.price,
        }));
        setCart(updatedCart);
    }, []);

    const [total, setTotal] = useState(0);
    useEffect(() => {
        setTotal(cart.reduce((acc, item) => acc + item.totalPrice, 0));
    }, [cart]);
    console.log(total);
    return (
        <>
            <div className="checkout-container">
                <form action="">
                    <div className="left">
                        <h3>Billing Details</h3>
                        <div>
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="Last Name" />
                            <input type="text" placeholder="Phone" />
                            <input type="text" placeholder="Email" />
                            <input type="text" placeholder="Street" />
                            <input type="text" placeholder="Barangay" />
                            <input type="text" placeholder="City" />
                            <input type="text" placeholder="Country" />
                        </div>
                        <h3>Additional Information</h3>
                        <textarea name="" id="" rows='3' placeholder='Notes...'></textarea>
                    </div>
                    <div className="right">
                        <h3>Order</h3>
                        {ITEM.map((item) =>
                            <div className='items' key={item.id}>
                                <img src={item.picture} alt="" />
                                <h4>{item.name}
                                    <p>₱{item.price} * {item.quantity}</p>
                                </h4>
                            </div>)}
                        <div className="costs">
                            <h4>Subtotal <span>₱ {total}</span></h4>
                            <h4>Shipping Cost <span>₱ 40</span></h4>
                            <h4>Total <span>₱ {total + 40}</span></h4>
                        </div>
                        <div className="payments">
                            <h3>Payment Method</h3>
                            <div className="payment">
                                <input
                                    type="radio"
                                    name="payment"
                                    id="cash"
                                    checked={paymentMethod === 'cash'}
                                    onChange={() => setPaymentMethod('cash')} />
                                <label htmlFor="cash">Cash on Delivery</label>
                            </div>
                            <div className="payment">
                                <input
                                    type="radio"
                                    name="payment"
                                    id="ePayment"
                                    checked={paymentMethod === 'ePayment'}
                                    onChange={() => setPaymentMethod('ePayment')} />
                                <label htmlFor="ePayment">E - Payment</label>
                            </div>
                        </div>
                        <button
                            onClick={() => alert('Order Placed!')}
                        >Place Order</button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default Checkout;