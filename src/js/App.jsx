
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import WebFont from 'webfontloader'

import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'

import { Header, Footer, Home, About, Contact, Error404 } from 'Components'

// Load styles
import 'normalize.css/normalize.css'

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
                <div id="app-wrapper">

                    <AppBar title="Deployer" />
                    
                    <Header />

                    <div className="container">
                        <RaisedButton label="Default" />
                        <Switch>
                            <Route exact path="/" component={ Home } />
                            <Route path="/about" component={ About } />
                            <Route path="/contact" component={ Contact } />
                            <Route component={ Error404 } />
                        </Switch>
                    </div>
                    
                    <Footer />
                
                </div>
            </Router>
        )
    }
}

export default App
