import React from 'react';
import style from './style.module.css'
import { NavLink } from 'react-router-dom';
import burgerAPI from '../../api/api';

const OrderPage = () => {

    const handleDeleteOrder = () => {
        burgerAPI.deleteOrder(1)
    }

    return (
        <div className={style.finishOrder}>
            {/* return to the menu page
            delete our burger from server 3000 */}
            <button onClick={handleDeleteOrder}>
                <NavLink to='/'>
                    <span>Завершить</span>
                </NavLink>
            </button>

            {/* return to the menu page */}
            <button>
                <NavLink to='/'>
                    <span>Добавить к заказу</span>
                </NavLink>
            </button>
        </div>
    )
}

export default OrderPage;