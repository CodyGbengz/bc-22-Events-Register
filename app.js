

  var config = {
    apiKey: "AIzaSyBGVFow_S-12dxMwSlIUt_9sV7hW1iMgD4",
    authDomain: "bc-22-events-register.firebaseapp.com",
    databaseURL: "https://bc-22-events-register.firebaseio.com",
    projectId: "bc-22-events-register",
    storageBucket: "bc-22-events-register.appspot.com",
    messagingSenderId: "489636464688"
  };
  firebase.initializeApp(config);
//get elements

  function signUp(){
    var email = document.getElementById('Email').value;
    var password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
  // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
     if (errorCode == 'auth/weak-password') {
       alert('The password is too weak.');
     } else {
    alert(errorMessage);
    }
     console.log(error);
   });
  }


function logIn(){
    var email = document.getElementById('Email').value;
    var password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(function(error) {
  // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
     if (errorCode == 'auth/weak-password') {
       alert('The password is too weak.');
     } else {
    alert(errorMessage);
    }
     console.log(error);
   });
   }
/*
const txtEmail = document.getElementById('email');
const txtPassword = document.getElementById('password');
const btnLogin = document.getElementById('login');
const btnRegister = document.getElementById('register');
const btnLogout = document.getElementById('');


//add login event
/*btnLogin.addEventListener('click', e =>{
  //get email and pass
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();

  //sign in
 const promise = auth.signInWithEmailAndPassword(email, pass);
 promise
 .then(result => console.log("sign in successful"))
  .catch(e => console.log(e.message));
})

}());
*/

