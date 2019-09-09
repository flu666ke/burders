import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListMenu from '../components/ListMenu';
import MenuItem from '../components/MenuItem';
import OrderPage from '../components/OrderPage';

export default function () {
    return (
        <Switch>
            <Route exact path='/' component={ListMenu} />
            <Route path='/burgers/:burgerId' component={MenuItem} />
            <Route path='/order' component={OrderPage} />
        </Switch>
    )
}