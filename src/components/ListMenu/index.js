import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import burgerAPI from '../../api/api';
import ListMenuItem from './ListMenuItem';
import { setBurgersAction } from './redux/reducer';
import style from './style.module.css';

const ListMenu = ({ setBurg, burg }) => {

    // request to server 3000 we return our burgers 
    useEffect(() => {
        burgerAPI.getBurgers()
            .then(burgers => {
                setBurg(burgers);
            });
    }, [setBurg]);

    return (
        <div className={style.menu}>
            <h1>McDonalds Menu</h1>
            <div className={style.menuList}>
                {
                    burg.map(menu => <ListMenuItem
                        key={menu.id}
                        id={menu.id}
                        name={menu.name}
                        pic={menu.pic}
                    />)
                }
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    burg: state.allBurgers.burgers
});

const mapDispatchToProps = {
    setBurg: setBurgersAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMenu);

