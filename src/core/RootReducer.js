import { combineReducers } from 'redux';
import allBurgers from '../components/ListMenu/redux/reducer';
import oneBurger from '../components/MenuItem/redux/reducer';

export default combineReducers({
    allBurgers,
    oneBurger,
})