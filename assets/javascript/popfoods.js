 
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



$(".login-button").click(function(event) {
  event.preventDefault();
  alert(1);

  var email = "dog";
  var password = "cat";
  
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
});
// var actionCodeSettings = {
//   // URL you want to redirect back to. The domain (www.example.com) for this
//   // URL must be whitelisted in the Firebase Console.
//   url: 'https://www.example.com/finishSignUp?cartId=1234',
//   // This must be true.
//   handleCodeInApp: true,
//   iOS: {
//     bundleId: 'com.example.ios'
//   },
//   android: {
//     packageName: 'com.example.android',
//     installApp: true,
//     minimumVersion: '12'
//   }
// };

// // Confirm the link is a sign-in with email link.
// if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
//   // Additional state parameters can also be passed via URL.
//   // This can be used to continue the user's intended action before triggering
//   // the sign-in operation.
//   // Get the email if available. This should be available if the user completes
//   // the flow on the same device where they started it.
//   var email = window.localStorage.getItem('emailForSignIn');
//   if (!email) {
//     // User opened the link on a different device. To prevent session fixation
//     // attacks, ask the user to provide the associated email again. For example:
//     email = window.prompt('Please provide your email for confirmation');
//   }
//   // The client SDK will parse the code from the link for you.
//   firebase.auth().signInWithEmailLink(email, window.location.href)
//     .then(function(result) {
//       // Clear email from storage.
//       window.localStorage.removeItem('emailForSignIn');
//       // You can access the new user via result.user
//       // Additional user info profile not available via:
//       // result.additionalUserInfo.profile == null
//       // You can check if the user is new or existing:
//       // result.additionalUserInfo.isNewUser
//     })
//     .catch(function(error) {
//       // Some error occurred, you can inspect the code: error.code
//       // Common errors could be invalid email and invalid or expired OTPs.
//     });
// }

// // Construct the email link credential from the current URL.
// var credential = firebase.auth.EmailAuthProvider.credentialWithLink(
//   email, window.location.href);

// // Link the credential to the current user.
// firebase.auth().currentUser.linkWithCredential(credential)
// .then(function() {
//   // The provider is now successfully linked.
//   // The phone user can now sign in with their phone number or email.
// })
// .catch(function(error) {
//   // Some error occurred.
// });

// // Construct the email link credential from the current URL.
// var credential = firebase.auth.EmailAuthProvider.credentialWithLink(
//   email, window.location.href);

// // Re-authenticate the user with this credential.
// firebase.auth().currentUser.reauthenticateWithCredential(credential)
// .then(function() {
//   // The user is now successfully re-authenticated and can execute sensitive
//   // operations.
// })
// .catch(function(error) {
//   // Some error occurred.
// });

// // After asking the user for their email.
// var email = window.prompt('Please provide your email');
// firebase.auth().fetchSignInMethodsForEmail(email)
//   .then(function(signInMethods) {
//     // This returns the same array as fetchProvidersForEmail but for email
//     // provider identified by 'password' string, signInMethods would contain 2
//     // different strings:
//     // 'emailLink' if the user previously signed in with an email/link
//     // 'password' if the user has a password.
//     // A user could have both.
//     if (signInMethods.indexOf(
//             firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD) != -1) {
//       // User can sign in with email/password.
//     }
//      if (signInMethods.indexOf(
//              firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD) != -1) {
//        // User can sign in with email/link.
//     }
//   })
//   .catch(function(error) {
//     // Some error occurred, you can inspect the code: error.code
//   });
// }

//   firebase.auth().signOut().then(function() {
//     // Sign-out successful.
//   }).catch(function(error) {
//     // An error happened.
//   });
 });