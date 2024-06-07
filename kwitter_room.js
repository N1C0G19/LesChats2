var firebaseConfig = {
      apiKey: "AIzaSyBb87IWNFaexRKTJ-ynRlee2gCf2-G1DZQ",
      authDomain: "practice-f1eb0.firebaseapp.com",
      databaseURL: "https://practice-f1eb0-default-rtdb.firebaseio.com",
      projectId: "practice-f1eb0",
      storageBucket: "practice-f1eb0.appspot.com",
      messagingSenderId: "772498660324",
      appId: "1:772498660324:web:71ed6d1f9d75c562fe05f1"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
