// Import Firebase Authentication
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { firebaseConfig } from "./firebase.js";

// Khởi tạo ứng dụng Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Xử lý đăng ký
document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn tải lại trang

    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Kiểm tra mật khẩu
    if (password !== confirmPassword) {
        alert("Mật khẩu xác nhận không khớp!");
        return;
    }

    // Đăng ký với Firebase
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Đăng ký thành công! Chuyển đến trang đăng nhập...");
            window.location.href = "dangnhap.html"; // Chuyển hướng
        })
        .catch((error) => {
            alert("Lỗi: " + error.message);
        });
});