
 
 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import {
    getAuth,
    signInWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js"; 
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDpehRDNHro0jeECF61yJ-voE6ciqOj_AM",
    authDomain: "jsi31-tung.firebaseapp.com",
    databaseURL: "https://jsi31-tung-default-rtdb.firebaseio.com",
    projectId: "jsi31-tung",
    storageBucket: "jsi31-tung.firebasestorage.app",
    messagingSenderId: "87952887885",
    appId: "1:87952887885:web:a64637bbc211726f42cc04",
    measurementId: "G-VMD3RNB7QE"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 


function validateLoginForm (email,passwword) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   // kiem tra bo trong truong nhap lieu
  if (email === "" || password === "") {
    alert("You need to fill all fields!");
    return false;
  }
  // kiem tra dinh dang email
  if (!emailRegex.test(email)) {
    alert("Email is bad format!");
    return false;
  } 
  // pass duoi 6 chu so
  if (password.length < 6) {
    alert("Password must be at least 6 characters long!");
    return false;
  }
  return true;
}
function signinFirebase(email,password){


const auth = getAuth(app);
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(user);
    alert('Signin Successfull');

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert('Firebase error:your account is not found or password is inccorrect');
  });
}
// bat su kien cho login 
document.querySelector('#login_btn').addEventListener('click',(e)=>{
    e.preventDefault();
    //lay du lieu tu html element
    const email=document.querySelector('#email').value.trim();
    const password=document.querySelector('#password').value.trim();
    //kiem tra du lieu
    if (validateLoginForm(email,password)){
        //khong co loi o client
        //signin bang firebase
        signinFirebase(email,password);
        return;
    }       else return; 
});