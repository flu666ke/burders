import React from 'react';
import style from './style.module.css';

const OrderItem = ({ id, name, pic }) => {

    return (
        <div className={style.burger}>
            <h2>{name}</h2>
            <img src={pic} alt="somePic" />
        </div>
    )
}

export default OrderItem;


