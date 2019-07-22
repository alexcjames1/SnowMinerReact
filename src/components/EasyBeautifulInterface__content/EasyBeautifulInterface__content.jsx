import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './EasyBeautifulInterface__content.css';
import {flexboxgrid} from '../../';
import reset from '../../';
import phoneInterface from '../../images/interface-graphic.png';
import {MediaComponent} from '../';

export default class EasyBeautifulInterface__content extends Component {
    render() {
        return(
            <div class="EasyBeautifulInterface__content">
                <div class="col-xs-12 col-sm-6">
                    <img src={phoneInterface} class="phoneInterface" alt="" />
                </div>    
                <div class="col-xs-12 col-sm-6">
                    <MediaComponent subTitle="Easy and fun to use" title="Beautiful Interface" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum lacus sed condimentum interdum. Donec placerat" />
                </div>
            </div>
        );
    }
}