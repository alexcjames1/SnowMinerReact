import React, {Component} from 'react';
import style from './EasyBeautifulInterface__User.scss';
import phoneInterface from './images/interface-graphic.png';
import snowminerAppIcon from './images/snowminer-app-icon.png';
import {Link} from 'react-router-dom';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';

export default class EasyBeautifulInterface__User extends Component {
    render() {
        return(
            <div className="easyBeautifulInterface">
                    <Section className="section section__easyBeautifulinterface" kind="primary" size="small">

                        <Row>
                            <Col xs="12" sm="6">
                                <div className="media">
                                    <div className="media__figure">
                                        <img src={phoneInterface} alt="#" />
                                    </div>
                                </div>
                            </Col>
                            <Col xs="12" sm="6">
                                <div className="media__content">
                                    <div className="media--appIcon">
                                        <img src={snowminerAppIcon} alt="#" />
                                    </div>
                                    <div className="media__header">
                                        <h4 className="media__subTitle">
                                            Easy and fun to use
                                        </h4>
                                        <div className="media__title">
                                            <h2 className="h2 heading">
                                                Beautiful Interface
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="media__body">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum lacus sed condimentum interdum. Donec placerat ornare sapien dictum iaculis. Class aptent taciti sociosqu ad litora torquent Class aptent taciti sociosqu ad litora
                                        </p>
                                    </div>
                                    <div className="media__footer">
                                        <Link to={"/"} className="button button--lg button--primary"><i className="mdi mdi-arrow-right-drop-circle-outline button--watchArrow"></i> Watch Video</Link>
                                        </div>
                                    </div>
                                </Col>

                            </Row>

                    </Section>
                </div>
            );
        }
    }
