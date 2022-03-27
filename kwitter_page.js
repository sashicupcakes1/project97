//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyC3SpbgxlA4jL2EfYMMt_aZJCcaeG1JlEQ",
      authDomain: "kwitter-not-quitter-9b5c8.firebaseapp.com",
      projectId: "kwitter-not-quitter-9b5c8",
      storageBucket: "kwitter-not-quitter-9b5c8.appspot.com",
      messagingSenderId: "900878094207",
      appId: "1:900878094207:web:3447f07d04156dce25144a"
};
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();