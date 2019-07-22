import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './MarketEase.css';
import {flexboxgrid} from '../../';
import reset from '../../';
import {MediaComponent} from '../';
import MarketEase__content from '../MarketEase__content/MarketEase__content';

export default class MarketEase extends Component {
    render() {
        return(
            <div className="marketEase"><MarketEase__content /></div>
        );
    }
}