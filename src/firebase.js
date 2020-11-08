import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD6wgNarVBMvCxXbusVqBfP_T1BP1ydTwM",
  authDomain: "facebookclonesadat.firebaseapp.com",
  databaseURL: "https://facebookclonesadat.firebaseio.com",
  projectId: "facebookclonesadat",
  storageBucket: "facebookclonesadat.appspot.com",
  messagingSenderId: "410308095173",
  appId: "1:410308095173:web:dce8094bd40a2de46214ac",
  measurementId: "G-7PFSP9LHN3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;