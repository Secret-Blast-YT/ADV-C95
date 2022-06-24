var firebaseConfig = {
  apiKey: "AIzaSyA_9j_91Sn--cMDTYKn4JmKnuydgOs8FCM",
  authDomain: "adv-c94-d248c.firebaseapp.com",
  databaseURL: "https://adv-c94-d248c-default-rtdb.firebaseio.com",
  projectId: "adv-c94-d248c",
  storageBucket: "adv-c94-d248c.appspot.com",
  messagingSenderId: "58619920615",
  appId: "1:58619920615:web:ab0d3a5e43e07eecc52242"
};


firebase.initializeApp(firebaseConfig);



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" +Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      //End code
      });});}
getData();

function addRoom() {
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").chold(room_name).update({
  purpose: "adding a room"
});

localStorage.setItem("room_name", room_name);

window.location = kwitter_page.html;
}

function redirectToRoomName() {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = kwitter_page.html;
}