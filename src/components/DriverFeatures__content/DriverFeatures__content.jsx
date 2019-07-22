import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './DriverFeatures__content.css';
import {flexboxgrid} from '../../';
import reset from '../../';
import {MediaComponent} from '../';
import earnings from '../../images/track-earnings-icon.png';
import snow from '../../images/snowflake-icon.png';
import management from '../../images/order-management-icon.png';

export default class DriverFeatures__content extends Component {
    render() {
        return(
            <div className="driverFeatures__content">
                <div className="col-xs-12 col-sm-4">
                    <MediaComponent column textAlign="center" image={earnings} title="Track your earnings" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum lacus sed condimentum interdum. Donec placerat" className="driverFeatures__mediaComponent mediaComponent--earnings" />
                </div>
                <div className="col-xs-12 col-sm-4">
                    <MediaComponent column textAlign="center" image={management} title="Easy order management" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum lacus sed condimentum interdum. Donec placerat" className="driverFeatures__mediaComponent mediaComponent--management" />
                </div>
                <div className="col-xs-12 col-sm-4">
                    <MediaComponent column textAlign="center" image={snow} title="Know the next snowfall" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum lacus sed condimentum interdum. Donec placerat" className="driverFeatures__mediaComponent mediaComponent--snow" />
                </div>
            </div>
            
        );
    }
}