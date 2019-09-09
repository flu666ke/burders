import React from 'react';
import style from './style.module.css';
import burgerAPI from '../../../api/api';
import { NavLink } from 'react-router-dom';

class BurgerOptions extends React.Component {
    constructor(props) {
        super(props)
        this.handleCheckbox = this.handleCheckbox.bind(this)
        this.handleOrderOptions = this.handleOrderOptions.bind(this)
        this.state = {
            name: '',
            OrderOptions: {
                sauce: false,
                cheese: false,
                cutlet: false,
                salad: false,
            }
        }
    }

    // fill the fortune with hamburger additives
    handleCheckbox(event) {
        let object = Object.assign(this.state.OrderOptions);
        object[event.target.value] = event.target.checked
        this.setState({ OrderOptions: object })
    }

    // give the burger the appropriate name
    static getDerivedStateFromProps(props, state) {
        return state.name = props
    }

    // we send the order to server 3000
    handleOrderOptions() {
        burgerAPI.postOrder(this.state)
    }

    render() {
        return (
            <div className={style.burgerOptions}>
                <span>Добавить: </span>
                <label><input
                    type="checkbox"
                    value="sauce"
                    checked={this.state.OrderOptions.sauce}
                    onChange={this.handleCheckbox}
                />Соус</label>
                <label><input
                    type="checkbox"
                    value="cheese"
                    checked={this.state.OrderOptions.cheese}
                    onChange={this.handleCheckbox}
                />Сыр</label>
                <label><input
                    type="checkbox"
                    value="cutlet"
                    checked={this.state.OrderOptions.cutlet}
                    onChange={this.handleCheckbox}
                />Котлета</label>
                <label><input
                    type="checkbox"
                    value="salad"
                    checked={this.state.OrderOptions.salad}
                    onChange={this.handleCheckbox}
                />Салат</label>

                <div className={style.btnSubmit}>
                    {/* go to the order page */}
                    <button onClick={this.handleOrderOptions}>
                        <NavLink to='/order'>
                            <span>Подтвердить</span>
                        </NavLink>
                    </button>
                </div>
            </div>
        )
    }
}

export default BurgerOptions;
