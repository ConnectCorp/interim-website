// Initialize Firebase
  var config = {
    apiKey: "AIzaSyASd4cVvOXK-XwNKXQsy46N97vj1dn5r2w",
    authDomain: "connect-emails-7f29a.firebaseapp.com",
    databaseURL: "https://connect-emails-7f29a.firebaseio.com",
    storageBucket: "connect-emails-7f29a.appspot.com",
  };
  firebase.initializeApp(config);

var email;

function writeFirstEmail(userEmail) {
  var firstButton = document.getElementById("firstButton");
  var firstInvalidText = document.getElementById("firstInvalidText");
	userEmail = document.getElementById("firstEmail").value;
	console.log(userEmail);
	// Get a key for a new email.
	var newEmailKey = firebase.database().ref().child('emails').push().key;
  if(validateEmail(userEmail)){
    firebase.database().ref('emails/'+ newEmailKey ).set(userEmail);
    console.log(userEmail + " saved in database");
    firstButton.style.background ='#1DB954';
    firstButton.innerHTML = "🔥"+"  "+"We got it!"
    firstButton.disabled = true; 
    firstInvalidText.innerHTML = "";
    document.getElementById("firstEmail").style.borderBottomColor = "white";
  }
  else{
    console.log(userEmail + " is not a valid email.");
    firstInvalidText.innerHTML= "Aww looks like that's not a valid email. 😛";
    document.getElementById("firstEmail").style.borderBottomColor = "#FF6551";
  }
}

function writeSecondEmail(userEmail) {
  var secondButton = document.getElementById("secondButton");
  var secondInvalidText = document.getElementById("secondInvalidText");
  userEmail = document.getElementById("secondEmail").value;
  console.log(userEmail);
  // Get a key for a new email.
  var newEmailKey = firebase.database().ref().child('emails').push().key;
  if(validateEmail(userEmail)){
    firebase.database().ref('emails/'+ newEmailKey ).set(userEmail);
    console.log(userEmail + " saved in database");
    secondButton.style.background ='#1DB954';
    secondButton.innerHTML = "🔥"+"  "+"We got it!"
    secondButton.disabled = true; 

    secondInvalidText.innerHTML = "";
    document.getElementById("secondEmail").style.borderBottomColor = "#393939";
  }
  else{
    console.log(userEmail + " is not a valid email.");
    secondInvalidText.innerHTML= "Oh no. That email isn't valid! 😲";
    document.getElementById("secondEmail").style.borderBottomColor = "#FF6551";
  }
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}