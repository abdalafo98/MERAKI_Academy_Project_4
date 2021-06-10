import React from 'react'

export default function Payment() {
    return (
        <>
        <div>
        <div>
           <input type="checkbox">Credit Card oe Debit Card
           <h4>inter your card details to continue with your payment</h4>
           </input>
         
           <input type="checkbox">PayPal</input>
        </div>
        <div>
            <input>Card Number</input>
            <input>Name on Card</input>
            <input>Expiration Date</input>
            <input>security Code</input>
        </div>
        <div>
            <button>Confirm Payment</button>
        </div>
        </div>
        </>
    )
}
