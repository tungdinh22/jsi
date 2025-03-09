// Import Firebase Authentication
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { firebaseConfig } from "./dangnhap.js";

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

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

// Kiểm tra email hợp lệ
function isValidEmail(email) {
    return email.includes("@");
}

// Kiểm tra mật khẩu hợp lệ
function isValidPassword(password) {
    return password.length >= 6 && /[A-Z]/.test(password) && /\d/.test(password);
}

// Xử lý đăng ký
document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn tải lại trang

    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Kiểm tra email hợp lệ
    if (!isValidEmail(email)) {
        showMessage("error", "❌ Email không hợp lệ!");
        return;
    }

    // Kiểm tra mật khẩu hợp lệ
    if (!isValidPassword(password)) {
        showMessage("error", "❌ Mật khẩu phải có ít nhất 6 ký tự, 1 chữ hoa và 1 số!");
        return;
    }

    // Kiểm tra mật khẩu xác nhận
    if (password !== confirmPassword) {
        showMessage("error", "❌ Mật khẩu xác nhận không khớp!");
        return;
    }

    // Đăng ký với Firebase
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            showMessage("success", "✅ Đăng ký thành công! Chuyển đến trang đăng nhập...");
            setTimeout(() => {
                window.location.href = "dangnhap.html"; // Chuyển hướng
            }, 2000);
        })
        .catch((error) => {
            showMessage("error", `❌ Lỗi: ${error.message}`);
        });
});
