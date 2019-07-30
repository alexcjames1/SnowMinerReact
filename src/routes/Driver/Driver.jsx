import React, { Component } from 'react';
import {Heading, Header, AppWrapper, DriverHero, DriverFeatures, MarketEase, LowRiskHighReturn, EasyBeautifulInterface, FinalThingsToClick, Footer} from '../../components';
import {Helmet} from "react-helmet";

export default class Driver extends Component {
    render() {
        return (
          <AppWrapper>
                <Helmet>
                  <title>Driver</title>
                </Helmet>
                <DriverHero />
                <DriverFeatures />
                <LowRiskHighReturn />
                <MarketEase />
                <EasyBeautifulInterface />
                <FinalThingsToClick />
          </AppWrapper>
        );
    }
}
