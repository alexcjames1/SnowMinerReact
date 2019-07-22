import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Card.css';
import {flexboxgrid} from '../../';
import reset from '../../';
import {Heading} from '../';
import orderSnowminerIcon from '../../images/order-snowminer-icon.png';

export default class Card extends Component {
    render() { 
        const {image, title, paragraph, column, textAlign } = this.props;
        
        return(
            <div className={ classy('media', 'card') }>
                <div className="card__figure">
                    <img src={image}/>
                 </div>
                <div className="card__content">
                    {title ? <Heading text={title} tag="h4" className='card__heading' /> : ''}
                    {paragraph ? <p className='card__content'>{paragraph}</p> : ''}
                </div>
            </div>
            
        );
    }
}

