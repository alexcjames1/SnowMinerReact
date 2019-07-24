import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './FinalThingsToClick.scss';
import {flexboxgrid} from '../../';
import reset from '../../';
import {Card} from '../';
import orderSnowminerIcon from './images/order-snowminer-icon.png';
import driveSnowminerIcon from './images/drive-snowminer-icon.png';
import {Col, Row, Container } from 'react-bootstrap';

export default class FinalThingsToClick extends Component {
    render() {
        return(
            <div className="finalThingsToClick">
              <Container>
                <Row>

                  <Col xs="12" sm="6">
                    <Card image={orderSnowminerIcon} title="Order with SnowMiner" paragraph="Schedule a plow to clear your driveway or sidewalk so you don't need to freeze." button="Order Now" className="card" />
                  </Col>

                  <Col xs="12" sm="6">
                    <Card image={driveSnowminerIcon} title="Drive with SnowMiner" paragraph="Schedule a plow to clear your driveway or sidewalk so you don't need to freeze." button="Become a driver" className="card" />
                  </Col>

                </Row>
              </Container>
            </div>
        );
    }
}
