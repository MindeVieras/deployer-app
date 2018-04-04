
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header id="main-header">
        <div className="container">
          <nav className="navbar navbar-light bg-light">
            <Link to="/deployer" className="navbar-brand">
              Deployer
            </Link>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header
