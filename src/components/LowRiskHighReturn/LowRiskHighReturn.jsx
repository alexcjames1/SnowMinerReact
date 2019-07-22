import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './LowRiskHighReturn.css';
import LowRiskHighReturn__content from '../LowRiskHighReturn__content/LowRiskHighReturn__content';
import earningsModal from '../../images/earnings-modal.png';
import {MediaComponent} from '../';
import appIcon from '../../images/snowminer-driver-app-icon.png';
import {Section} from '../';

export default class LowRiskHighReturn extends Component {
    render() {
        return(
                <div className="lowRiskHighReturn"> 
                       <LowRiskHighReturn__content /> 
                </div>
        );
    }
}