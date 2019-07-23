import React, {Component} from 'react';
import classy from '../../utils/classy';
import { Header, Footer } from '../../components';

export default class AppWrapper extends Component {
    render() { 
        const {children } = this.props;
        
        return(
            <div className="app">
                <Header />
                {children}
                <Footer />
            </div>
        );
    }
}

