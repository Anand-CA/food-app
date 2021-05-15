import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCGydBOX03lfQMT7kOIA0dPAFMH8E_8T5U",
  authDomain: "food-app-34560.firebaseapp.com",
  projectId: "food-app-34560",
  storageBucket: "food-app-34560.appspot.com",
  messagingSenderId: "320383165193",
  appId: "1:320383165193:web:5c8c24367ba435537ee9d8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { db, auth, provider, storage };
