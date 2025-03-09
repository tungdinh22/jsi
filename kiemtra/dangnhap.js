
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
  



// Hàm hiển thị thông báo
function showMessage(type, message) {
    const messageBox = document.getElementById("message-box");
    messageBox.innerHTML = message;
    messageBox.className = type;  // success hoặc error
    messageBox.style.display = "block";
    setTimeout(() => {
        messageBox.style.display = "none";
    }, 5000);
}

// Chuyển đổi giữa Login và Signup
function toggleForms() {
    document.querySelector(".login-box").classList.toggle("hidden");
    document.querySelector(".signup-box").classList.toggle("hidden");
}

// Kiểm tra email hợp lệ
function isValidEmail(email) {
    return email.includes("@");
}

// Kiểm tra mật khẩu hợp lệ
function isValidPassword(password) {
    return password.length >= 6 && /[A-Z]/.test(password) && /\d/.test(password);
}

// Xử lý đăng ký
function signup() {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Kiểm tra điều kiện đầu vào
    if (!isValidEmail(email)) {
        showMessage("error", "❌ Email không hợp lệ!");
        return;
    }
    if (!isValidPassword(password)) {
        showMessage("error", "❌ Mật khẩu phải có ít nhất 6 ký tự, 1 chữ hoa và 1 số!");
        return;
    }
    if (password !== confirmPassword) {
        showMessage("error", "❌ Mật khẩu xác nhận không khớp!");
        return;
    }

    // Đăng ký tài khoản
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            showMessage("success", "✅ Đăng ký thành công! Hãy đăng nhập.");
            toggleForms();
        })
        .catch((error) => {
            showMessage("error", `❌ Lỗi: ${error.message}`);
        });
}

// Xử lý đăng nhập
function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    if (!email || !password) {
        showMessage("error", "❌ Vui lòng nhập đầy đủ Email và Mật khẩu!");
        return;
    }

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            showMessage("success", `✅ Đăng nhập thành công! Chào ${userCredential.user.email}`);
        })
        .catch((error) => {
            showMessage("error", `❌ Lỗi: ${error.message}`);
        });
}

