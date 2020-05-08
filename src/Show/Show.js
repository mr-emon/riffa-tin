import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faHeart} from '@fortawesome/free-solid-svg-icons'
import './Show.css';

const Show = (props) => {
    const {name,id,address,joiningdate,monthlySalary} = props.user;
    return (
        <div>
            <p>Name: {name}</p>
            <p>ID: {id}</p>
            <p>Addres: {address}</p>
            <p>Join date: {joiningdate}</p>
            <p>Salary: {monthlySalary} tk/month</p>
            <br></br>
            <br></br>
            <button onClick ={() => props.handleLove(props.user) } ><FontAwesomeIcon icon={faHeart} />Show how much Emon loves her</button>
        </div>
    );
};

export default Show;