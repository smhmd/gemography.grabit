import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyCyA_uR9XTXArIQLkjMqEpboWoDSaUGZtc",
  authDomain: "gemography-grabit.firebaseapp.com",
  databaseURL: "https://gemography-grabit.firebaseio.com",
  projectId: "gemography-grabit",
  storageBucket: "gemography-grabit.appspot.com",
  messagingSenderId: "188242345430",
  appId: "1:188242345430:web:a36c3a059aae5395127877",
});

const db = firebase.firestore();

export { db, firebase };
