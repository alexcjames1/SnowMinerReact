import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './EasyBeautifulInterface.css';
import {flexboxgrid} from '../../';
import reset from '../../';
import EasyBeautifulInterface__content from '../EasyBeautifulInterface__content/EasyBeautifulInterface__content';
import phoneInterface from '../../images/interface-graphic.png';
import {MediaComponent} from '../';

export default class EasyBeautifulInterface extends Component {
    render() {
        return(
            <div>
                <div className="easyBeautifulInterface">
                    <div className="col-xs-12 col-sm-6">
                        <img src={phoneInterface} className="phoneInterface" alt="" />
                    </div>    
                    <div className="col-xs-12 col-sm-6">
                        <MediaComponent subTitle="Easy and fun to use" title="Beautiful Interface" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum lacus sed condimentum interdum. Donec placerat" />
                    </div>
                </div>
            </div>
        );
    }
}