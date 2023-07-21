import React from 'react';
import '../cart.scss';
const CheckoutCard = ({ total }) => {
    const discount = 40;
    const totalOrder = total - discount;
    return (
        <div className="checkout">
            <div className="totalCart-card">
                <h1>Cart Total</h1>
                <>
                    <h3>Item(s) Subtotal <span>{total.toFixed(2)}</span></h3>
                    <h3>Discount <span>{discount}</span></h3>
                    <h2>Total Order <span>{totalOrder.toFixed(2)}</span></h2>
                </>
                <button>Check Out</button>
            </div>
            {/* <div className="checkout-card">
                <div className="checkout-card-header">
                    <h2>Checkout</h2>

                </div>
                <p>DELIVERY OR PICKUP</p>
                <p>if Delivery state the address <br />if PICKUP what time</p>

                <p>Cash or E-Payment <br />if e-Payment list all online payment</p>
                <button type="button">Check Out</button>
            </div> */}
        </div>
    );
};

export default CheckoutCard;