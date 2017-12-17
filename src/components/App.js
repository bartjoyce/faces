import React from 'react'

import PageIndex from '../pages/index'
import PageTheData from '../pages/the-data'

import { HashRouter, Route } from 'react-router-dom'
import { Switch } from 'react-router'

export default class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={PageIndex} />
          <Route path="/the-data" component={PageTheData} />
        </Switch>
      </HashRouter>
    )
  }
}
