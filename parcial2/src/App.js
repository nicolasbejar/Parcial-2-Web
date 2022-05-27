import React, { useState, useEffect } from 'react';
import './App.css';
import { IntlProvider } from 'react-intl';

//import localeEsMessages from "./locales/es.json";
//import localeEnMessages from "./locales/en.json"
import {FormattedDate, FormattedNumber, FormattedMessage } from 'react-intl';

import Space from './components/space';
import Room from './components/rooms';

function App() {


  //Render del app
    return (
      <div className="App">
        <div className="container">
          <h1>Spaces</h1>
          <div className="row"> 
            <Space></Space>
            <Room></Room>
          </div>
        </div>
      </div>
    );
  
}

export default App;