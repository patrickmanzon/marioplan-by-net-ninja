import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'


const SignedIn = (props) => {

    return (
        <ul className="right">
            <li>
                <NavLink to="/projects/create">Create Projects</NavLink>
            </li>
            <li>
                <a onClick={ props.signOut }>Logout</a>
            </li>
            <li>
                <NavLink to="/" className="btn btn-floating">CV</NavLink>
            </li>
        </ul>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => { dispatch(signOut()) }   
    }
}

// const mapStateToProps = (state) => {

//     return {}

// }

export default connect(null, mapDispatchToProps)(SignedIn)