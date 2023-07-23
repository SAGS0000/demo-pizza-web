import React from 'react';
import './checkout.scss';
import { ITEM } from '../../_Menu/items';
const Checkout = () => {

    return (
        <div className="checkout-container">
            <form action="">
                <div className="left">
                    <h3>Billing Details</h3>
                    <div>
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                        <input type="text" placeholder="Phone" />
                        <input type="text" placeholder="Address" />
                        <input type="text" placeholder="City" />
                        <input type="text" placeholder="State" />
                        <input type="text" placeholder="Zip" />
                        <input type="text" placeholder="Country" />
                        <input type="text" placeholder="Card Number" />
                    </div>


                </div>
                <div className="right">
                    <h3>Order</h3>
                    {ITEM.map((item) =>
                        <div key={item.id}>
                            <img src={item.picture} alt="" />
                            <h4>{item.name}
                                <p>₱{item.price} * {item.quantity}</p>
                            </h4>

                        </div>)}

                </div>
            </form>
        </div>
    );
};

export default Checkout;