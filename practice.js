var firebaseConfig = {
    apiKey: "AIzaSyC3CG8IHrSGaYehC-4adBSH-k-NNkdkj0s",
    authDomain: "kwitter-f1ec1.firebaseapp.com",
    databaseURL: "https://kwitter-f1ec1-default-rtdb.firebaseio.com",
    projectId: "kwitter-f1ec1",
    storageBucket: "kwitter-f1ec1.appspot.com",
    messagingSenderId: "872570689562",
    appId: "1:872570689562:web:2b8c0619517ead83e2d9a3"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser() {
    user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
});
}