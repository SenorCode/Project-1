$(document).ready(function() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBOOlC2TH5ig03EByu6knBJUtu2TN-DV7c",
    authDomain: "pop-foods-authentication.firebaseapp.com",
    databaseURL: "https://pop-foods-authentication.firebaseio.com",
    projectId: "pop-foods-authentication",
    storageBucket: "",
    messagingSenderId: "445248785368"
  };
  firebase.initializeApp(config);

  // global variable to hold userId when logged in
  var userId = "";

  var database = firebase.database();
  var auth = firebase.auth();

  /* 
  YOU'LL USE THAT USER ID TO WRITE DATA ON THAT USER'S BEHALF
  database.ref(userId).push({data});
  THIS WAY YOU'LL ONLY WRITE AND READ DATA FOR THAT PARTICULAR USER
*/

if (userId) {
  database.ref(userId).push({
    dataKey: "value"
  })
}

  // Listens for login and logout
  firebase.auth().onAuthStateChanged(firebaseUser => {
    // THIS FIRES OFF ON SUCCESSFUL LOGIN OR SIGNUP
    if (firebaseUser) {
      console.log(firebaseUser);
      // Set userId to the firebase user's id (unique value)
      userId = firebaseUser.uid;
      // on successful login, turn on a listener for that user's database folder
      database.ref(userId).on("child_added", function(childSnapshot) {
        console.log(childSnapshot.val());
        // whatever you wanna do with child snapshot data
      });
      window.location = "/index.html"
    } else {
      // WHEN YOU LOG OUT
      console.log("not logged in");
      // stop listening for changes at this db
      if (userId) {
        database.ref(userId).off();
        userId = "";
      }
    }
  });

  // START LOGIN EVENT
  $("#btnLogin").on("click", function(e) {
    e.preventDefault();
    email = $("#txtEmail").val();
    pass = $("#password").val();
    $("#txtEmail").val("");
    $("#password").val("");
    console.log(email, pass)
    //signin with e-mail and password
    var promise = auth.signInWithEmailAndPassword(email, pass);
    // listen for errors
    promise.catch(e => console.log(e.message));
  });
  // END LOG IN EVENT

  // START USER SIGNUP
  $("#btnSignUp").on("click", function(e) {
    e.preventDefault();

    // Get email and pw from form
    email = $("#txtEmail").val();
    pass = $("#password").val();
    $("#txtEmail").val("");
    $("#password").val("");
    console.log(email, pass)

    // Send email and pw through to create a user in fb
    var promise = auth.createUserWithEmailAndPassword(email, pass);
    // listen for errors
    promise.catch(e => console.log(e.message));
  });

  // END USER SIGNUP

  //************************************* Sign Out Function******************************
  $("#btnLogOut").on("click", function(e) {
    e.preventDefault();
    firebase.auth().signOut();
  });
});
