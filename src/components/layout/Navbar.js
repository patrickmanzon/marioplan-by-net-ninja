import React from 'react'
import { Link } from 'react-router-dom'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'

const Navbar = () => {

    return (
        <nav className="grey darken-3">
            <div className="nav-wrapper container">
                <Link to="#" className="brand-logo left">Marioplan</Link>
                <SignedOut />
                <SignedIn />
            </div>
        </nav>
    )

}

export default Navbar

