import React, { useState, useEffect } from 'react';
import './App.css';
import { IntlProvider } from 'react-intl';

//import localeEsMessages from "./locales/es.json";
//import localeEnMessages from "./locales/en.json"


import Space from './components/space';


function App() {


  //Render del app
    return (
      <div className="App">
        <div className="container">
          <h1>Spaces</h1>
          <div className="row"> 
            <Space></Space>
          </div>
        </div>
      </div>
    );
  
}

export default App;