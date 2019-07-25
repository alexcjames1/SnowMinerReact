import React, {Component} from 'react';
import style from './MarketEase.scss';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';


export default class MarketEase extends Component {
    render() {
        return(
            <div className="marketEase">
                    <Section className="section section--large section--secondary section__marketEase" kind="secondary" size="small">



                            <div className="section__title">
                                <h2 className="h2">
                                    Bringing Ease and Flexibility to the Market
                                </h2>
                                <p className="lead">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum lacus sed
                                </p>
                            </div>



                        <Row>
                            <Col xs="12" sm="4">
                                <div className="icon__number icon__number--blue">1</div>
                                <div className="section__subTitle">
                                    <h4 className="text--blue">Only work when you want to</h4>
                                </div>
                                <h3 className="h3">Achieve complete flexibility</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum lacus sed condimentum interdum. Donec placerat
                                </p>
                            </Col>

                            <Col xs="12" sm="4">
                                <div className="icon__number icon__number--purple">2</div>
                                <div className="section__subTitle">
                                    <h4 className="text--purple">Everything you need for the job</h4>
                                </div>
                                <h3 className="h3">All in one convenient place</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum lacus sed condimentum interdum. Donec placerat
                                </p>
                            </Col>

                            <Col xs="12" sm="4">
                                <div className="icon__number icon__number--green">3</div>
                                <div className="section__subTitle">
                                    <h4 className="text--green">Earn extra income in your pocket</h4>
                                </div>
                                <h3 className="h3">Reach a bigger market</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.    Pellentesque fermentum lacus sed condimentum interdum. Donec placerat
                                </p>
                            </Col>
                        </Row>

                </Section>
            </div>
        );
    }
}
