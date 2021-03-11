import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDoSDfL6KDG9694opGxxMSs5A2gefR2uuE",
    authDomain: "crwn-db-76b2e.firebaseapp.com",
    projectId: "crwn-db-76b2e",
    storageBucket: "crwn-db-76b2e.appspot.com",
    messagingSenderId: "548731997245",
    appId: "1:548731997245:web:ecd1dfe9d03e641ba3ae54",
    measurementId: "G-HC8WC5NVXQ"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();  
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt:'select_account'});
  export const signInWithGoogle =() => auth.signInWithPopup(provider);

    export default firebase;