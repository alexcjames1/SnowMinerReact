import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Header.css';
import {flexboxgrid} from '../../';
import reset from '../../';
import Header__logo from '../Header__logo/Header__logo';

export default class Header extends Component {
    render() {
        return(
            <div className="header"><Header__logo /></div>
        );
    }
}