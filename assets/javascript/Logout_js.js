$("#btnLogOut").on("click", function(e) {
      e.preventDefault();
      firebase.auth().signOut();
    })