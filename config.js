import firebase from 'firebase';

require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyD5u_7DsBKq0XGOqTlhwmbWPEKP0r1pIrQ",
    authDomain: "booksanta-dafb8.firebaseapp.com",
    projectId: "booksanta-dafb8",
    storageBucket: "booksanta-dafb8.appspot.com",
    messagingSenderId: "1025300105221",
    appId: "1:1025300105221:web:75fca4d6fc3290c6ad746c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();