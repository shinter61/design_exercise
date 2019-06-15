import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.scss';

import Paspol from './Paspol.jsx'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={App} />
          <Route path='/pas-pol' component={Paspol} />
          {/* <Link to='/'>トップへ</Link>
          <Link to='/pas-pol'>pas-pol の模写ページへ</Link> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
