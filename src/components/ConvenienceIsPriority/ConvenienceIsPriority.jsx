import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './ConvenienceIsPriority.scss';
import userConvenience from './images/user-convenience.jpg';
import {Col, Row, Container } from 'react-bootstrap';

export default class ConvenienceIsPriority extends Component {
    render() {
        return(
            <div className="convenienceIsPriority">
                <section className="section section__convenienceIsPriority">

                    <Container>
                        <Row>

                            <Col xs="12" sm="6">
                                <div className="media">
                                    <div className="media__figure">
                                        <img src={userConvenience} alt="#" />
                                    </div>
                                </div>
                            </Col>
                            <Col xs="12" sm="6">
                                <div className="media">
                                    <div className="media__header">
                                        <h4 className="media__subTitle">
                                            Time for what you want
                                        </h4>
                                        <div className="media__title">
                                            <h2 className="h2 heading">
                                                Convenience is priority
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="media__content">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum lacus sed condimentum interdum. Donec placerat ornare sapien dictum iaculis. Class aptent taciti sociosqu ad litora torquent Class aptent taciti sociosqu ad litora
                                        </p>
                                    </div>
                                </div>
                            </Col>

                        </Row>
                    </Container>

                </section>
            </div>
        );
    }
}
