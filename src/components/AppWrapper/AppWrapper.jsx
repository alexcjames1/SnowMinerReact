import React, {Component} from 'react';
import { Header, Footer } from '../../components';

export default class AppWrapper extends Component {
    render() {
        const {children } = this.props;

        return(
            <div className="app">
                <Helmet
                    titleTemplate="%s | SnowMiner.com"
                >
                    <meta name="description" content="Driving with SnowMiner is dope" />
                    <title>Home</title>
                </Helmet>
                <Header />
                {children}
                <Footer />
            </div>
        );
    }
}
