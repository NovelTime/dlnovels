const firebaseConfig = {
    apiKey: "AIzaSyBF3gd9Tn9uRwvuWDY0_glpcmFrwOPhZAY",
    authDomain: "web-dnovels.firebaseapp.com",
    projectId: "web-dnovels",
    storageBucket: "web-dnovels.appspot.com",
    messagingSenderId: "644268467476",
    appId: "1:644268467476:web:c35e6edf0a21f78820ce01",
    measurementId: "G-V49VBD5MR7"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var database = app.database();

function sendMessage(){
  var name = document.getElementById('Name').value;
  var message = document.getElementById('message').value;
  
  var newMessageKey = database.ref().child('comments').push().key;
  database.ref('comments/'+newMessageKey+'Name').set(name);
  database.ref('comments/'+newMessageKey+'Message').set(message);
}

document.getElementById('commentsForm').addEventListener('submit',sendComment);
function sendComment(){
  e.preventDefault();
}
