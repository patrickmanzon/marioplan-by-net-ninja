import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'


export class SignIn extends Component {

    state = {
        email: '',
        password: ''
    }

    handelChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
        //console.log(this.props)
    }

    render() {

        const { authError, auth } = this.props

        if(this.props.auth.uid) {
            return <Redirect to="/" />
        }
    

        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Sign in</h5>
                    <p className="red-text text-center"> 
                        {authError ? authError : '' }
                    </p>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handelChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handelChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Sing in</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    console.log(state)

    return {
        authError: state.auth.error,
        auth: state.firebase.auth
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => { dispatch(signIn(credentials)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
