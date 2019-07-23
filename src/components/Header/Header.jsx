import React, {Component} from 'react';
import classy from '../../utils/classy';

import style from './Header.scss';
import { Header__nav, Logo } from '../../components';

export default class Header extends Component {
    render() {
        return(
            <header className="header header--transparent">
        <div className="container">
            <div className="header__container">
                <div className="header__logo">
                    <div className="logo">
                        <a href="#">
                            <Logo />
                        </a>
                    </div>
                </div>

                <div className="header__navigation">
                    <Header__nav />
                </div>
            </div>
                
        </div>
    </header>
            
        );
    }
}