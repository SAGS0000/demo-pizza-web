import React from 'react';
import '../cart.scss';
const CheckoutCard = () => {
    return (
        <div className="checkout">
            <div className="checkout-card">
                <div className="checkout-card-header">
                    <h2>Checkout</h2>
                </div>
                <p>DELIVERY OR PICKUP</p>
                <p>if Delivery state the address <br />if PICKUP what time</p>

                <p>Cash or E-Payment <br />if e-Payment list all online payment</p>
                <button type="button">Check Out</button>
            </div>
        </div>
    );
};

export default CheckoutCard;