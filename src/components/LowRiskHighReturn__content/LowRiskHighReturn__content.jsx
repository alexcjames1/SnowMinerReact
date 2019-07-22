import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './LowRiskHighReturn__content.css';
import {flexboxgrid} from '../../';
import reset from '../../';
import appIcon from '../../images/snowminer-driver-app-icon.png';
import earningsModal from '../../images/earnings-modal.png';
import {MediaComponent} from '../';

export default class LowRiskHighReturn__content extends Component {
    render() {
        return(
            <div className="lowRiskHighReturn__content">
                <div className="col-xs-12 col-sm-6">
                    <div className="lowRiskHighReturn__content">
                        <MediaComponent column image={appIcon} subTitle="Drive with snowminer" title="Low Risk, High Return" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum lacus sed condimentum interdum. Donec placerat" className="mediaComponent lowRiskHighReturn__content--mediaComponent"/> 
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6">
                    <img src={earningsModal} className="earningsModal" alt="" />
                </div>
            </div>
        );
    }
}