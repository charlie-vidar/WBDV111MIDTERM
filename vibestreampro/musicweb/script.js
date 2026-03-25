function login(){

let user = document.getElementById("user").value;

if(user === ""){
alert("Enter username");
return;
}

localStorage.setItem("user",user);

window.location="home.html";

}

function signup(){

let user = document.getElementById("newuser").value;

localStorage.setItem("user",user);

alert("Account created!");

window.location="index.html";

}

function playSong(){

let audio = document.getElementById("audio");

audio.play();

}