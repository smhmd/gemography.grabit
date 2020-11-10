// See https://firebase.google.com/docs/cloud-messaging/js/client
//
// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
// import { messaging } from './firebase';
// messaging
//   .getToken({
//     vapidKey:
//       'BEwDmF03-FIzouwm1Zqbzob0Q-3UaeYORH0BBKBbtFyux-S3TGQn1NnA_BIqwTzhU9GK_r5fT7XjIt4AaRsKL_w',
//   })
//   .then((currentToken) => {
//     if (currentToken) {
//       sendTokenToServer(currentToken);
//       updateUIForPushEnabled(currentToken);
//     } else {
//       // Show permission request.
//       console.log(
//         'No registration token available. Request permission to generate one.',
//       );
//       // Show permission UI.
//       updateUIForPushPermissionRequired();
//       setTokenSentToServer(false);
//     }
//   })
//   .catch((err) => {
//     console.log('An error occurred while retrieving token. ', err);
//     showToken('Error retrieving registration token. ', err);
//     setTokenSentToServer(false);
//   });

importScripts('https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js',
);

firebase.initializeApp({
  apiKey: 'AIzaSyCdP4O0S4UtCyd4nc0W8iNP0TSCjZ71YZM',
  authDomain: 'gemo-grabit.firebaseapp.com',
  databaseURL: 'https://gemo-grabit.firebaseio.com',
  projectId: 'gemo-grabit',
  storageBucket: 'gemo-grabit.appspot.com',
  messagingSenderId: '867155060257',
  appId: '1:867155060257:web:aa67ac653505c5830ae560',
});

const messaging = firebase.messaging();
