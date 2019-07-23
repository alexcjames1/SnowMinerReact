import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Card.scss';
import grid from '../Grid/Grid.scss';
import {Heading} from '../';

export default class Card extends Component {
    render() { 
        const {image, title, paragraph, column, textAlign, button } = this.props;
        
        return(
            <div className={ classy('media', 'card', 'col-xs-12 col-sm-6') }>
                <div className="card__figure">
                    <img src={image}/>
                 </div>
                <div className="card__content">
                    {title ? <Heading text={title} tag="h4" className='card__heading' /> : ''}
                    {paragraph ? <p className='card__body'>{paragraph}</p> : ''}
                    {button ? <a className="card__button">{button}</a> : ''}
                </div>
            </div>
            
        );
    }
}

