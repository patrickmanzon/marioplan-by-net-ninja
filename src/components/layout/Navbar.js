import React from 'react'
import { Link } from 'react-router-dom'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { connect } from 'react-redux'

const Navbar = (props) => {

    const { auth } = props

    const link = auth.uid ? <SignedIn /> : <SignedOut />;

    return (
        <nav className="grey darken-3">
            <div className="nav-wrapper container">
                <Link to="#" className="brand-logo left">Marioplan</Link>
                {link}
            </div>
        </nav>
    )

}

const mapStateToProps = (state) => {

    return {
        auth: state.firebase.auth
    }

}

export default connect(mapStateToProps)(Navbar)

