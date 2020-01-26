export const signIn = (credentials) => {

    return (dispatch, getState, { getFirebase }) => {

        const firebase = getFirebase();

        firebase.auth()
            .signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(() => {
                dispatch({ type: "AUTH_SUCCESS" })

            }).catch((err) => {

                dispatch({ type: "AUTH_FAILED" })
            })

    }

}

export const signOut = () => {

    return (dispatch, getState, { getFirebase }) => {

        const firebase = getFirebase();

        firebase.auth().signOut()
            .then(() => {
                dispatch({ type: "SIGN_OUT" })
            })

    }

}