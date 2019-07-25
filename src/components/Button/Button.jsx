import React, {Component} from 'react';
import style from './Button.scss';
import classy from '../../utils/classy.js';
import { Container } from 'react-bootstrap';

export default class Button extends Component {
    render() {
        const { kind, children, className, size } = this.props;
        // kind types: primary, secondary, dark
        // size: big, small

        return(
            <div className={classy('button', className, (kind && 'button--' + kind), (size && 'button--' + size ) )}>
                <Container>
                    {children}
                </Container>
            </div>
        );
    }
}
