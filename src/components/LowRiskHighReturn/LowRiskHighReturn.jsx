import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './LowRiskHighReturn.scss';
import earningsModal from './images/earnings-modal.png';
import {MediaComponent} from '../';
import appIcon from './images/snowminer-driver-app-icon.png';
import {Section} from '../';

export default class LowRiskHighReturn extends Component {
    render() {
        return(
                    <div className="lowRiskhighReturn">
        <section className="section section--huge section--dark section--tertiary section__lowRiskhighReturn">
            
            <div className="container">
                <div className="row">
                    <div className="col col-md-6 col__content">
                        
                        <div className="section__header">
                            <div className="logo logo--appIcon">
                                <img src={appIcon} alt="#" />
                            </div>
                            <h4 className="section__subTitle">
                                Drive with SnowMiner
                            </h4>
                            <div className="section__title">
                                <h2>Low Risk, High Return</h2>
                            </div>
                        </div>
                        <div className="section__content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum lacus sed condimentum interdum. Donec placerat ornare sapien dictum iaculis. Class aptent taciti sociosqu ad litora torquent Class aptent taciti sociosqu ad litora  
                            </p>
                        </div>
                        <div className="section__footer">
                            <a href="#signup" className="button button--link">
                                Sign up now to become a driver
                            </a>
                        </div>
                        
                        
                    </div>
                    <div className="col col-md-6">
                        
                        <div className="media">
                            <div className="media__figure">
                                <img src={earningsModal} alt="#" />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </section>
    </div>
        );
    }
}