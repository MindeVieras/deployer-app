
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import WebFont from 'webfontloader'

import PrivateRoute from './components/PrivateRoute'
import { Login, Home, Error404 } from 'Components'

// Load styles
// import 'normalize.css/normalize.css'

// Get custom styles
import '../sass/main.scss'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // Load all fonts
    WebFont.load({
      google: {
        families: [
          'Roboto',
          'Dosis',
          'sans-serif'
        ]
      }
    })
  }

  render() {
    return (            
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={ Home } />
          <Route path="/login" component={ Login } />
          <PrivateRoute component={ Error404 } />
        </Switch>
      </Router>
    )
  }
}

export default App
