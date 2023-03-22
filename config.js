//firebae config key setup

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//firebase configuration
const firebaeConfig = {
  apiKey: "AIzaSyD2FawtGYH5Q92iHaMjrtIL5K6QS-lgkho",
  authDomain: "ctseproject-a36c0.firebaseapp.com",
  projectId: "ctseproject-a36c0",
  storageBucket: "ctseproject-a36c0.appspot.com",
  messagingSenderId: "813913550189",
  appId: "1:813913550189:web:0ebc82d25194148c333e64",
  measurementId: "G-FKPNCVQF89"
};

if(!firebase.apps.length) {
    firebase.initializeApp(firebaeConfig);
}

export { firebase };