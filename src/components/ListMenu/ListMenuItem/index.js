import React from 'react';
import style from './style.module.css';
import { NavLink } from 'react-router-dom';

const ListMenuItem = ({ name, pic, id }) => {

    return (
        <div className={style.burger}>
            <NavLink to={`burgers/${id}`}>
                <h2>{name}</h2>
                <img src={pic} alt="somePic" />
            </NavLink>
        </div>
    )
}

export default ListMenuItem;

