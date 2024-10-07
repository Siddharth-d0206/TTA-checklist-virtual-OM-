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
firebase.initializeApp(firebaseConfig);

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Firebase Auth login
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Logged in successfully
            alert('Login successful!');
            window.location.href = 'dashboard.html'; // Redirect to dashboard
        })
        .catch((error) => {
            alert('Error: ' + error.message);
        });
});