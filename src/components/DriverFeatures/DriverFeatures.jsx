import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './DriverFeatures.css';
import {flexboxgrid} from '../../';
import reset from '../../';
import {MediaComponent} from '../';
import DriverFeatures__content from '../DriverFeatures__content/DriverFeatures__content';
import earnings from '../../images/track-earnings-icon.png';
import snow from '../../images/snowflake-icon.png';
import manage from '../../images/order-management-icon.png';

export default class DriverFeatures extends Component {
    render() {
        return(
            <div className="driverFeatures">
                <DriverFeatures__content />
            </div>
            
        );
    }
}