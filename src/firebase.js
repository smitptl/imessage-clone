// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD_4CJe2g9Is95fhXNZ9oKdU63rNmazEks",
  authDomain: "imessage-clone-89256.firebaseapp.com",
  databaseURL: "https://imessage-clone-89256.firebaseio.com",
  projectId: "imessage-clone-89256",
  storageBucket: "imessage-clone-89256.appspot.com",
  messagingSenderId: "1018585831633",
  appId: "1:1018585831633:web:d4f1e4c21c808ef5bf0df0",
  measurementId: "G-W1C8X9RGDE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
