var firebaseConfig = {
      apiKey: "AIzaSyBoktMZIBAQ7DFZTqitJJzbP901ZbXVf7o",
      authDomain: "kwitterdatabase.firebaseapp.com",
      databaseURL: "https://kwitterdatabase-default-rtdb.firebaseio.com",
      projectId: "kwitterdatabase",
      storageBucket: "kwitterdatabase.appspot.com",
      messagingSenderId: "955300067343",
      appId: "1:955300067343:web:8548fa0f4be4d458450b7a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send () {
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
