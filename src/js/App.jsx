
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Header, Footer, Home, About, Contact, Error404 } from 'Components'

// Get styles from npm
import 'bootstrap/dist/css/bootstrap.css'

// Get custom styles
import '../sass/main.scss'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
                
            <Router>
                <div id="page-wrapper">
                    
                    <Header />
                        <div className="container">
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
