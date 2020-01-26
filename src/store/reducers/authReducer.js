const initState = {
    error: null
}

const authReducer = (state = initState, action) => {

    switch(action.type) {

        case "AUTH_SUCCESS":

            return {
                ...state,
                error: null
            }

        case "AUTH_FAILED":
            //console.log("AUTH_FAILED")
            return {
                ...state,
                error: "Invalid email or password"
            }
        case "SIGN_OUT":
            return {
                ...state,
                error: null
            }
        default:
            return state;

    }
}

export default authReducer;