import React, { useEffect } from 'react';
import style from './style.module.css';
import { connect } from 'react-redux';
import burgetAPI from '../../api/api';
import { setBurgerAction } from './redux/reducer';
import OrderItem from './OrderItem';
import BurgerOptions from './BurgerOptions';

const MenuItem = (props) => {
    const { match: { params: { burgerId } }, setBurger } = props;
    const { id, name, pic } = props.pickBurger

    //request to server 3000 we return our hamburger
    useEffect(() => {
        burgetAPI.getBurger(burgerId)
            .then(b => {
                setBurger(b);
            })
    }, [burgerId, setBurger]);

    return (
        <div className={style.oneBurger}>
            <>
                <OrderItem
                    id={id}
                    name={name}
                    pic={pic}
                />
            </>
            <>
                <BurgerOptions name={name} />
            </>
        </div>
    )
}

const mapStateToProps = state => ({
    pickBurger: state.oneBurger.data
});

const mapDispatchToProps = {
    setBurger: setBurgerAction
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);



