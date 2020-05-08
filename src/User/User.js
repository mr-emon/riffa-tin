import React, { useState } from 'react';
import fakedata from '../fakedata';
import './User.css';
import Show from '../Show/Show';
import Cart from './Cart/Cart';




const User = () => {
    const first14 = fakedata.slice(0,14);
    const [users,setUsers] = useState(first14);
    const [count,setCount] = useState([]);
    const handleLove = (user) => {
        // console.log("love counted",user);
       const newCount = [...count,user];
         setCount(newCount);
        
    }
    
    

    
   
    return (
        <div className = "user-container">
            <div className = "u-container">
                {
                users.map(us => <Show handleLove = {handleLove} user = {us}></Show>)
            }
            </div>
            <div className = "s-container">
                <Cart cart = {count}></Cart>
            </div>
            
        </div>
    );
};

export default User;