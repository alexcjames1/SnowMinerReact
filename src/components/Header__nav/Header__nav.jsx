import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Header__nav.css';
import {flexboxgrid} from '../../';
import reset from '../../';

export default class header__nav extends Component {
    render() {
        return(
            <div class="header__navigation">
                    <nav class="navigation navigation--main nav">
                        <div class="navigation__menuTrigger nav__trigger">
                            <a class="nav__link" href="#">
                                <i class="icon icon--menu-toggle">&#9776;</i>
                            </a>
                        </div>
                        <ul class="navigation__menuList nav__menuList">
                            <li class="nav__menuItem">
                                <a class="nav__link" href="#">Schedule</a>
                            </li> 
                            <li class="nav__menuItem nav__menuItem--active">
                                <a class="nav__link" href="#">Drive</a>
                            </li> 
                            <li class="nav__menuItem">
                                <a class="nav__link" href="#">Help</a>
                            </li>
                            <li> 
                                <a class="button button--cta button--lg" href="#">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
        );
    }
}