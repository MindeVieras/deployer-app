
import React from 'react'
import PropTypes from 'prop-types'
import { Link, Route, Switch } from 'react-router-dom'

import { Error404 } from 'Components'
import Header from './Partials/Header'
import About from './Pages/About'
import Projects from './Pages/Projects'

const Deployer = ({ match }) => {
  return (
    <div>

      <Header />
      
      <Switch>
        <Route exact path={ match.url } component={ Projects } />
        <Route exact path={`${match.url}/about`} component={ About } />
        <Route exact path={`${match.url}/projects`} component={ Projects } />
        <Route component={ Error404 } />
      </Switch>

      <section className="jumbotron text-center">
        <div className="container">
          <p>
            <Link to="/deployer/projects" className="btn btn-primary my-2">Projects</Link>
            <Link to="/deployer/about" className="btn btn-secondary my-2">About</Link>
            <Link to="/deployer/erororsdsc" className="btn btn-secondary my-2">Error</Link>
            <Link to="/login" className="btn btn-secondary my-2">Logout</Link>
          </p>
        </div>
      </section>
    </div>
  )
}

Deployer.propTypes = {
  match: PropTypes.object.isRequired
}

export default Deployer
