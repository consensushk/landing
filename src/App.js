import React, { Component } from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'
import routes from '~/routes'

import './styles/main.css'

class App extends Component {
  render () {
    return (
      <Switch>
        {routes.map((route, key) => (
          <Route
            key={key}
            {...route}
          />
        ))}
        <Redirect from="*" to="/"/>
      </Switch>
    )
  }
}

export default App
