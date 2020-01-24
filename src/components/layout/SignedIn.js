import React from 'react'
import { NavLink } from 'react-router-dom'


const SignedIn = () => {

    return (
        <ul className="right">
            <li>
                <NavLink to="/">Projects</NavLink>
            </li>
            <li>
                <NavLink to="/">Logout</NavLink>
            </li>
            <li>
                <NavLink to="/" className="btn btn-floating">PM</NavLink>
            </li>
        </ul>
    )

}

export default SignedIn