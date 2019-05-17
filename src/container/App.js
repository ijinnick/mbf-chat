import React from 'react';
import Routing from '../components/routing/Routing';
import {BrowserRouter} from 'react-router-dom';

import './App.css';

class App extends React.Component {
  
  render(){

    return (
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    );
  }
}

export default App;
