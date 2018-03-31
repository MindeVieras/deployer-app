
import React from 'react'
import { NavLink } from 'react-router-dom'

const MainMenu = () => {
    return (
        <ul className="nav float-right">
            <li className="nav-item">
                <NavLink to="/about" className="nav-link">About</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/any-url" className="nav-link">404</NavLink>
            </li>
        </ul>
    )
}

export default MainMenu
