import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Top from './TopPage/Top.jsx';
import Paspol from './Paspol/Paspol.jsx';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/top' component={Top} />
          <Route exact path='/paspol' component={Paspol} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;