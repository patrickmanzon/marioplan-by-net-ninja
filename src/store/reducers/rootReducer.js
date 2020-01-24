import projectReducer from "./projectReducer";
import authReducer from "./authReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
// import { firestoreReducer } from "react-redux-firebase";




const rootReducer = combineReducers({
    project: projectReducer,
    auth: authReducer,
    firestore: firestoreReducer
});


export default rootReducer