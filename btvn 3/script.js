const questions = [
    {
        question: "Thủ đô của Việt Nam là gì?",
        answers: ["Hà Nội", "TP. Hồ Chí Minh", "Đà Nẵng", "Huế"],
        correct: 0
    },
    {
        question: "2 + 2 bằng bao nhiêu?",
        answers: ["3", "4", "5", "6"],
        correct: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");
    showQuestion();
}

function showQuestion() {
    let q = questions[currentQuestionIndex];
    document.getElementById("question").innerText = q.question;
    let answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    q.answers.forEach((answer, index) => {
        let btn = document.createElement("button");
        btn.innerText = answer;
        btn.onclick = () => checkAnswer(index);
        answersDiv.appendChild(btn);
    });
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestionIndex].correct) {
        score++;
    }
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.getElementById("quiz-container").classList.add("hidden");
    document.getElementById("result-container").classList.remove("hidden");
    document.getElementById("score").innerText = score;
}

function saveScore() {
    let username = document.getElementById("username").value;
    if (username) {
        alert(`Điểm của ${username} đã được lưu: ${score} điểm`);
        location.reload();
    } else {
        alert("Vui lòng nhập tên!");
    }
}

function showLeaderboard() {
    alert("Chức năng bảng xếp hạng đang được phát triển!");
}