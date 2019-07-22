import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './FinalThingsToClick.css';
import {flexboxgrid} from '../../';
import reset from '../../';
import {Card} from '../';
import orderSnowminerIcon from '../../images/order-snowminer-icon.png';
import driveSnowminerIcon from '../../images/drive-snowminer-icon.png';

export default class FinalThingsToClick extends Component {
    render() {
        return(
            <div className="finalThingsToClick">
                <Card image={orderSnowminerIcon} title="Order with SnowMiner" paragraph="Schedule a plow to clear your driveway or sidewalk so you don't need to freeze." />
                <Card image={driveSnowminerIcon} title="Drive with SnowMiner" paragraph="Schedule a plow to clear your driveway or sidewalk so you don't need to freeze." />
            </div>
        );
    }
}