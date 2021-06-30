import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD8e53ZOvtOU9bDieEeGDJsHrXNlP_MxeQ",
  authDomain: "kayodeik-portfolio.firebaseapp.com",
  projectId: "kayodeik-portfolio",
  storageBucket: "kayodeik-portfolio.appspot.com",
  messagingSenderId: "865431304387",
  appId: "1:865431304387:web:6e5207584589957c550a76",
  measurementId: "G-712S4R8SHH"
};


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export { db };