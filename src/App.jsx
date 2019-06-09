import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Paspol from './Paspol'

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Paspol} />
        </div>
      </BrowserRouter>
    )
  }
}