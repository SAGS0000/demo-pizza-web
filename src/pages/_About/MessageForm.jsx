import React, { useState } from 'react';
import pizzax from '../../assets/pizzax.jpg';
const MessageForm = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleInputChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can define what happens when the form is submitted. 
        // For now, we're just logging the form data to the console.
        console.log(form);
    };

    return (
        <div className="message-container">
            <div className="form-container">

                <h1>Message Us <div className="dash"></div></h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Message:
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleInputChange}
                        />
                    </label>
                    <button type="submit">Send</button>
                </form>
            </div>
            <div className="img-container">
                <img src={pizzax} alt="" />
            </div>
        </div>
    );
};

export default MessageForm;
