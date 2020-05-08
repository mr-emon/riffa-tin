import React from 'react';

const Cart = (props) => {
const cart = props.cart;
let total = 0;
for (let i = 0; i < cart.length; i++) {
    const fUser = cart[i];
    total = total + fUser.monthlySalary;
}

      return(  
      <div>
            <h1>Love summary</h1>
                <p>Love count:  {cart.length}</p>
                <p>Love weight: {50000} metric tons</p>
                <p>Free Love: {25000}metric ton/count</p>
                <p>Total love: {cart.length*(50000+25000)} metric tons</p>
                <p>Yearly salary: {total*12}</p>
        </div>
      )
};

export default Cart;