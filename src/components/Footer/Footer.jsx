import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Footer.css';
import {flexboxgrid} from '../../';
import reset from '../../';
import { Heading } from '../';

export default class Footer extends Component {
    render() {
        return(
            <div className="footer">
                This is a footer
                <Heading text="test" tag="h1" />
            </div>
        );
    }
}