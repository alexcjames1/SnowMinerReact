import React, {Component} from 'react';
import style from './Header.scss';
import { Logo, Header__nav } from '../../components';
import {Col, Row, Container } from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return(
            <header className="header header--transparent">
                <Container>
                    <Row>
                        <div className="header__container">
                            <Col xs="6" sm="6">
                                <div className="logo">
                                    <a href="#">
                                        <Logo />
                                    </a>
                                </div>

                            </Col>
                            <Col xs="6" sm="6">
                                <Header__nav />
                            </Col>
                        </div>
                    </Row>
                </Container>
            </header>
        );
    }
}
