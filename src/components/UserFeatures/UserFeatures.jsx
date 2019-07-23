import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './UserFeatures.scss';
import {MediaComponent} from '../';
import onTheGo from './images/on-the-go-icon.png';
import priceTag from './images/price-tag-icon.png';
import snowflake from './images/snowflake-icon.png';


export default class UserFeatures extends Component {
    render() {
        return(
            <div className="driverFeatures">
                <div className="driverFeatures__content">
                    <div className="col-xs-12 col-sm-4">
                        <MediaComponent column textAlign="center" image={snowflake} title="Know the next snowfall" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum lacus sed condimentum interdum. Donec placerat" />
                    </div>
                    <div className="col-xs-12 col-sm-4">
                        <MediaComponent column textAlign="center" image={onTheGo} title="Easy order management" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum lacus sed condimentum interdum. Donec placerat" />
                    </div>
                    <div className="col-xs-12 col-sm-4">
                        <MediaComponent column textAlign="center" image={priceTag} title="Track your earnings" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum lacus sed condimentum interdum. Donec placerat" />
                    </div>
                </div>
            
            </div> 
        );
    }
}