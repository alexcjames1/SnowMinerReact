import React, {Component} from 'react';
import style from './Subtitle.css';
import classy from '../../utils/classy';

export default class Subtitle extends Component {
    render() {
        const {tag, text, noMargin, align, className} = this.props;
        const classNameProps = classy(
            tag, 
            'heading', 
            noMargin ? 'noMargin' : '',
            align ? ['align--' + align] : '',
            className,
        );
        
        return(
            <div class={classNameProps}>{text}</div>
        );
    }
}