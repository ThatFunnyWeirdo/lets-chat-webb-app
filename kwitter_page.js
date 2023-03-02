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
room_name = localStorage.getItem("room_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database.ref(room_name).push({
        name: user_name,
        message: msg,
        like:0
  });
  document.getElementById("msg").value = "";
}

function logout()
{
  window.location = "index.html";
}