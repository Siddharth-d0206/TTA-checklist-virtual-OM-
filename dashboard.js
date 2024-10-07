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

db.collection('checklists').get()
.then((querySnapshot) => {
    const tableBody = document.getElementById('inventory-table');

    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${data.computerModel}</td>
            <td>${data.osInstalled ? 'Yes' : 'No'}</td>
            <td>${data.hardwareTest ? 'Yes' : 'No'}</td>
            <td>${data.cleaning ? 'Yes' : 'No'}</td>
            <td>${data.accessories}</td>
            <td>${data.serialnum}</td>
            <td>${data.notes}</td>
            <td>${data.status}</td>
        `;

        tableBody.appendChild(row);
    });
})
.catch((error) => {
    console.error('Error getting documents: ', error);
});