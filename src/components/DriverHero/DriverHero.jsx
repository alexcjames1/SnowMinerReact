import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './DriverHero.css';
import {flexboxgrid} from '../../';
import reset from '../../';
import DriverHero__CTA from '../DriverHero__CTA/DriverHero__CTA';

export default class DriverHero extends Component {
    render() {
        return(
            <div className="driverHero"><DriverHero__CTA /></div>
            
        );
    }
}