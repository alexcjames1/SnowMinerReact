import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './MarketEase__content.css';
import {flexboxgrid} from '../../';
import reset from '../../';
import {MediaComponent} from '../';

export default class MarketEase__content extends Component {
    render() {
        return(
            <div className="marketEase__content">
                <MediaComponent column title="Bringing Ease and Flexibility to the Market" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum lacus sed condimentum interdum. Donec placerat" className="mediaComponent lowRiskHighReturn__content--mediaTitle"/>
                
                <div className="icon__number icon__number--blue">1</div>
                <MediaComponent column subTitle="Only work when you want to" title="Achieve complete flexibility" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum lacus sed condimentum interdum. Donec placerat" className="mediaComponent lowRiskHighReturn__content--mediaComponent"/>
                
                <div className="icon__number icon__number--purple">2</div>
                <MediaComponent column subTitle="Everything you need for the job" title="All in one convenient place" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum lacus sed condimentum interdum. Donec placerat" className="mediaComponent lowRiskHighReturn__content--mediaComponent"/>
                
                <div className="icon__number icon__number--green">3</div>
                <MediaComponent column subTitle="Earn extra income in your pocket" title="Reach a bigger market" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum lacus sed condimentum interdum. Donec placerat" className="mediaComponent lowRiskHighReturn__content--mediaComponent"/>
            </div>
        );
    }
}