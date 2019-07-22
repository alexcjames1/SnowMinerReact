import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './style.css';
import {flexboxgrid} from '../../';
import reset from '../../';
import {Heading} from '../';
import {Subtitle} from '../';

export default class Blurb extends Component  {
    render() {
        const {image, title, paragraph, column, textAlign, subtitle } = this.props;
        
        return (
            <div className={ classy('media', column ? 'media--column' : '', textAlign ? ['textAlign--' + textAlign] : '') }>
                <div className="media__figure media__figure--centered">
                    <img src={image} />
                 </div>
                <div className="media__content">
                    {subtitle ? <Subtitle text={subtitle} tag="h3" className='media__subTitle' /> : ''}
                    {title ? <Heading text={title} tag="h3" className='media__title' /> : ''}
                    {paragraph ? <p>{paragraph}</p> : ''}
                </div>
            </div>
        );
    }
}
