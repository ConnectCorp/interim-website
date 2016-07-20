// Initialize Firebase
  var config = {
    apiKey: "AIzaSyASjsFqPZzHJOxy1O05UGDAgpaNN7_zD4k",
    authDomain: "connect-emails-d89fa.firebaseapp.com",
    databaseURL: "https://connect-emails-d89fa.firebaseio.com",
    storageBucket: "connect-emails-d89fa.appspot.com",
  };
  firebase.initializeApp(config);

var email;

function writeEmail(userEmail) {

  var firstButton = document.getElementById("firstButton");
	userEmail = document.getElementById("firstEmail").value;
	console.log(userEmail);
	// Get a key for a new Post.
	var newEmailKey = firebase.database().ref().child('emails').push().key;
  
  if(validateEmail(userEmail)){
    firebase.database().ref('emails/'+ newEmailKey ).set(userEmail);
    console.log(userEmail + " saved in database");
    
    firstButton.style.background ='#1DB954';
    firstButton.innerHTML = "🔥"+"  "+"We got it!"
    firstButton.disabled = true; 
  }
  else{
    console.log(userEmail + " is not a valid email.");
  }
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}