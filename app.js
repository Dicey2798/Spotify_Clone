// Created A basic Logic as how it could Be 
var redirect_uri = "http://127.0.0.1:5500/index.html";
 

var client_id = ""; 
var client_secret = ""; 

var access_token = null;


const TOKEN = "https://accounts.spotify.com/api/token";
const PLAYLISTS = "https://api.spotify.com/v1/me/playlists";

//to authorise the login 
function callAuthorizationApi(body){
    let xhr = new XMLHttpRequest();
    xhr.open("POST", TOKEN, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Authorization', 'Basic ' + btoa(client_id + ":" + client_secret));
    xhr.send(body);
    xhr.onload = handleAuthorizationResponse;
}
//status of REsponse
function handleAuthorizationResponse(){
    if ( this.status == 200 ){
        var data = JSON.parse(this.response);
        console.log(data);
    }
    else {
        console.log(this.response);
        alert(this.response);
    }
}
//ADDING Items to PLaylist
function addPlaylist(item){
    let PL = document.createElement("option");
    PL.value = item.id;
    PL.innerHTML = item.name + " (" + item.tracks.total + ")";
    document.getElementById("playlists").appendChild(PL); 
}
//Removing THe items
function removeAllItems( elementId ){
    let del = document.getElementById(elementId);
    while (del.firstChild) {
        del.removeChild(del.firstChild);
    }
}

