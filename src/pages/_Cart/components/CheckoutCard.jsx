import React from 'react';
import '../cart.scss';
import { useNavigate } from 'react-router-dom';
const CheckoutCard = ({ total }) => {
    const navigate = useNavigate();
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
                <button
                    onClick={() => navigate('/checkout')}
                >Check Out</button>
            </div>
        </div>
    );
};

export default CheckoutCard;