const firebaseConfig = {
    apiKey: "AIzaSyBefeV0Nan4NbD3JMe3F5c0THjoYHX1D-k",
    authDomain: "lets-chat-web-app-8463a.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-8463a-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-8463a",
    storageBucket: "lets-chat-web-app-8463a.appspot.com",
    messagingSenderId: "71795894909",
    appId: "1:71795894909:web:6c9562e3e24e91eefc1f14"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addRoom()
  {
   room_name = document.getElementById("room_name").value;
   localStorage.setItem("room_name");

   firebase.database().ref("/").child(room_name).update ({
   purpose : "adding room name"
   });

   localStorage.setItem("room_name", room_name);

   window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     room_name = childKey;
    //Start code
    console.log("Room Name -" + room_name);
    row = "<div class='room_name' id=" + room_name + "onclick='redirectToRoomName(this.id)'> #" + Room_names +  "</div> <hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName ()
{
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";

}

function logout()
{
  window.location = "index.html";
}
  