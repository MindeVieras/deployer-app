
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <section className="jumbotron text-center">
                <div className="container">
                    <h1 className="jumbotron-heading">Deployer</h1>
                    <p className="lead text-muted">
                        Deploy your apps for free.
                    </p>
                    <p>
                        <Link to="/contact" className="btn btn-primary my-2">Contact</Link>
                        <Link to="/about" className="btn btn-secondary my-2">About</Link>
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Home
