import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD8yyoHC1bAObtWFFsQb1AsWoaesy5ZpIM",
    authDomain: "net-ninja-react-app-e0ca6.firebaseapp.com",
    databaseURL: "https://net-ninja-react-app-e0ca6.firebaseio.com",
    projectId: "net-ninja-react-app-e0ca6",
    storageBucket: "net-ninja-react-app-e0ca6.appspot.com",
    messagingSenderId: "246252378091",
    appId: "1:246252378091:web:5d7b9660258437b9672bae",
    measurementId: "G-5ZHS12N6S3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;