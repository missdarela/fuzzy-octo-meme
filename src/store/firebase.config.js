import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAGrya99V1mb9JPzgyc2PkfOiimtwX2f28",
  authDomain: "diathekeweb.firebaseapp.com",
  databaseURL: "https://diathekeweb.firebaseio.com",
  projectId: "diathekeweb",
  storageBucket: "diathekeweb.appspot.com",
  messagingSenderId: "1080140298681",
  appId: "1:1080140298681:web:8df334daeb50e25e415e68",
  measurementId: "G-4CWG3LRSN5"
};

export default firebase.initializeApp(firebaseConfig)