import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
// import 'firebase/messaging';

firebase.initializeApp({
  apiKey: 'AIzaSyCdP4O0S4UtCyd4nc0W8iNP0TSCjZ71YZM',
  authDomain: 'gemo-grabit.firebaseapp.com',
  databaseURL: 'https://gemo-grabit.firebaseio.com',
  projectId: 'gemo-grabit',
  storageBucket: 'gemo-grabit.appspot.com',
  messagingSenderId: '867155060257',
  appId: '1:867155060257:web:aa67ac653505c5830ae560',
});

const db = firebase.firestore();
const storage = firebase.storage(firebase.app());
// const messaging = firebase.messaging(firebase.app());

// if ('serviceWorker' in navigator) {
//   messaging
//     .getToken({
//       serviceWorkerRegistration: navigator.serviceWorker.register(
//         '/firebase-messaging-sw.js',
//       ),
//       vapidKey:
//         'BEwDmF03-FIzouwm1Zqbzob0Q-3UaeYORH0BBKBbtFyux-S3TGQn1NnA_BIqwTzhU9GK_r5fT7XjIt4AaRsKL_w',
//     })
//     .then((token) => console.log(token));
//   // .catch((error) => console.log(error));
// }
export {
  firebase,
  db,
  storage,
  // , messaging
};
