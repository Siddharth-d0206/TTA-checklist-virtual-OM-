var firebaseConfig = {
    apiKey: "AIzaSyCyujGf7O-lpnHhQH5PNj_rdniFp1AaH30",
    authDomain: "techtoallchecklist.firebaseapp.com",
    projectId: "techtoallchecklist",
    storageBucket: "techtoallchecklist.appspot.com",
    messagingSenderId: "499206277365",
    appId: "1:499206277365:web:36830d4bf87274f19fddbc",
    measurementId: "G-2J73QYJHW0"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();