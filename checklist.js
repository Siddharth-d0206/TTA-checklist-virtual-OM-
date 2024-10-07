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
const db = firebase.firestore();

document.getElementById('checklist-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = {
        computerModel: document.getElementById('computerModel').value,
        osInstalled: document.getElementById('osInstalled').checked,
        hardwareTest: document.getElementById('hardwareTest').checked,
        cleaning: document.getElementById('cleaning').checked,
        accessories: document.getElementById('accessories').value,
        serialnum:document.getElementById('serialnum').value,
        notes:document.getElementById('notes').value,
        status: document.getElementById('status').value
    };

    // Reference to Firestore (db) initialized above
    db.collection('checklists').add(formData)
        .then(() => {
            alert('Checklist submitted!');
            document.getElementById('checklist-form').reset();
        })
        .catch((error) => {
            console.error('Error adding checklist: ', error);
        });
});