import React from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


const Dashboard = (props) => {

    const { auth } = props

    //console.log(auth)

    if(!auth.uid) {
        return <Redirect to="/signin" />
    }

    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <ProjectList />
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notifications />
                </div>
            </div>
        </div>

    )

}

const mapStateToProps = (state) => {

    return {
        auth: state.firebase.auth
    }

}

export default connect(mapStateToProps)(Dashboard);

