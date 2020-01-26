import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';



function ProjectDetails(props) {


    const { project, auth } = props

    if(!auth.uid) {
        return <Redirect to="/signin" />
    }

    if(!project) {
        return (<div className="container section">Project not found</div>);
    } 

    return (
        <div className="project-details container section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <p className="card-title">{ project.title }</p>
                    <p>{project.content}</p>

                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by { project.firstName + ' ' + project.lastName}</div>
                    <div>September 3, 2019</div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownState) => {

    const id = ownState.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null
    return {
        ...ownState,
        project,
        auth: state.firebase.auth
    }

}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(ProjectDetails)
