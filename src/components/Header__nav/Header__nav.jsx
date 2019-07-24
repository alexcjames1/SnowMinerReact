import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Header__nav.scss';
import {Link} from 'react-router-dom';
//import script from './script.js';
export default class Header__nav extends Component {
    render() {
        return(
            <div className="header__navigation">
                <nav className="navigation navigation--main nav">
                    <div className="navigation__menuTrigger nav__trigger">
                        <a className="nav__link" href="#">
                            <i className="icon icon--menu-toggle">&#9776;</i>
                        </a>
                    </div>
                    <ul className="navigation__menuList nav__menuList">
                        <li className="nav__menuItem">
                            <Link to={"/"} className="nav__link">Schedule</Link>
                        </li>
                        <li className="nav__menuItem nav__menuItem--active">
                            <Link to={"/driver"} className="nav__link">Drive</Link>
                        </li>
                        <li className="nav__menuItem">
                            <Link to={"#"} className="nav__link">Help</Link>
                        </li>
                        <li>
                            <a className="button button--cta button--lg" href="#">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </nav>
    
            </div>
        );
    }
}
