import React, { Component } from 'react';
import {Heading, Header, AppWrapper, UserHero, UserFeatures, ConvenienceIsPriority, HowSnowminerWorks, EasyBeautifulInterface__User, FinalThingsToClick, Footer} from '../../components';
import {Helmet} from "react-helmet";

export default class Landing extends Component {
    render() {
        return (
          <AppWrapper>
              <Helmet>
                <title>Snow removal app</title>
              </Helmet>
            <UserHero />
            <ConvenienceIsPriority />
            <UserFeatures />
            <HowSnowminerWorks />
            <EasyBeautifulInterface__User />
            <FinalThingsToClick />
          </AppWrapper>
        );
    }
}
