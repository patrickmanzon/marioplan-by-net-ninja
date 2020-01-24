import React, { Component } from 'react'
import ProjectSummary from './ProjectSummary'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';



class ProjectList extends Component {

    render() {

        console.log(this.props)

        const {projects} = this.props;

        return (
            <div className="projet-list section">
                { projects && projects.map(project => {
                    return <ProjectSummary project={project} key={ project.id } />
                }) }
            </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
        projects: state.firestore.ordered.projects,
        ownProps
    };
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(ProjectList);

