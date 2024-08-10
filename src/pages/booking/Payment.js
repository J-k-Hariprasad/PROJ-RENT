import React, { useState } from 'react';
import './Payment.css'; 
function Payment() {
    const [paymentMethod, setPaymentMethod] = useState('credit-card');

    const handlePaymentMethodChange = (method) => {
        setPaymentMethod(method);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Payment Submitted Successfully");
    };

    return (
        <div className='min'>

        <div className="payment-container">
            <div className="payment-header">
                <h1>Payment Options</h1>
            </div>
            <div className="payment-methods">
                <button onClick={() => handlePaymentMethodChange('credit-card')} className={paymentMethod === 'credit-card' ? 'active' : ''}>Credit Card</button>
                <button onClick={() => handlePaymentMethodChange('paypal')} className={paymentMethod === 'paypal' ? 'active' : ''}>PayPal</button>
                <button onClick={() => handlePaymentMethodChange('net-banking')} className={paymentMethod === 'net-banking' ? 'active' : ''}>Net Banking</button>
            </div>
            <div className="payment-form">
                {paymentMethod === 'credit-card' && (
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Card Owner</label>
                            <input type="text" placeholder="Card Owner Name" required />
                        </div>
                        <div className="form-group">
                            <label>Card Number</label>
                            <input type="text" placeholder="Valid card number" required />
                        </div>
                        <div className="form-group">
                            <label>Expiration Date</label>
                            <div className="input-group">
                                <input type="number" placeholder="MM" required />
                                <input type="number" placeholder="YY" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>CVV</label>
                            <input type="text" placeholder="CVV" required />
                        </div>
                        <button type="submit" className="submit-button">Confirm Payment</button>
                    </form>
                )}
                {paymentMethod === 'paypal' && (
                    <div>
                        <h2>PayPal Payment</h2>
                        <p>Log in to your PayPal account to complete the payment.</p>
                        <button className="paypal-button">Log into PayPal</button>
                    </div>
                )}
                {paymentMethod === 'net-banking' && (
                    <div>
                        <h2>Net Banking</h2>
                        <div className="form-group">
                            <label>Select Your Bank</label>
                            <select required>
                                <option value="" disabled selected>Select your bank</option>
                                <option value="bank1">SBI</option>
                                <option value="bank2">IOB</option>
                                <option value="bank3">ICICI</option>
                                <option value="bank4">KVB</option>
                                <option value="bank5">Indian Bank</option>
                            </select>
                        </div>
                        <button className="net-banking-button">Proceed Payment</button>
                    </div>
                )}
            </div>
        </div>
    </div>
    );
}

export default Payment;
