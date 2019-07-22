import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './DriverHero__CTA.css';
import {flexboxgrid} from '../../';
import reset from '../../';
import appStore from '../../images/app-store.png';
import googlePlay from '../../images/google-play.png';

export default class DriverHero__CTA extends Component {
    render() {
        return(
            <div className="driverHero__CTA">
                <div className="container">
                    <div className="row">
                        
                        <div className="section__header">
                            <h1 className="h1 section__title">
                                Earn money on your own schedule
                            </h1>
                        </div>
                        
                        <div className="section__content">
                            <p>
                                Expert Snowplow Miners to your driveway or sidewalk in minutes. Download the app to start your order!
                            </p>
                        </div>
                        
                        <div className="section__footer">
                            <a className="appStoreButton appStoreButton--apple" href="#">
                                <img src={appStore} alt="" />
                            </a>
                            <a className="appStoreButton appStoreButton--google" href="#">
                                <img src={googlePlay} alt="" />
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}