import React from 'react';
import logo from './logo.svg';
import {Heading, Header, Header__nav, Header__logo, MediaComponent} from './components';
import {DriverHero, DriverHero__CTA} from './components';
import {DriverFeatures} from './components';
import {MarketEase, MarketEase__content} from './components';
import {LowRiskHighReturn, LowRiskHighReturn__content} from './components';
import {EasyBeautifulInterface, EasyBeautifulInterface__content} from './components';
import {FinalThingsToClick, Card} from './components';
import {Footer} from './components';
import './App.css';
import phoneInterface from './images/interface-graphic.png';
function App() {
  return (
    <div className="App">
          <header className="App-header">
            <Header />
          <DriverHero />
          <DriverFeatures />
          <LowRiskHighReturn />
          <MarketEase />
          <EasyBeautifulInterface />
          <FinalThingsToClick />
          <Footer />
          </header>
    </div>
  );
}

export default App;
