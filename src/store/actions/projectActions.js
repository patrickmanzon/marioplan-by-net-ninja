
export const createProject = (project) => {

    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: "haw",
            authorLastName: "hehe"
        }).then(() => {
            dispatch({ type: "CREATE_PROJECT", payload: project })
        }).catch((err) => {
            dispatch({ type: "ERROR_CREATING_PROJECT", payload: project })
        })
        
    }

}