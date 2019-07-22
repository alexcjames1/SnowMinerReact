import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Header__logo.css';
import {flexboxgrid} from '../../';
import reset from '../../';
import SnowminerLogo from '../../images/snowminer-logo.png';

export default class Header__logo extends Component {
    render() {
        return(
            <div className="header__logo"><img src={SnowminerLogo} alt="" /></div>
        );
    }
}