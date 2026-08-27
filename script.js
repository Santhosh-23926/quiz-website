let quiz = {

    quation1: {
        quation: "What is current year?",
        option: ["2026", "2025", "2024", "2022"],
        answer: "2026"
    },

    quation2: {
        quation: "What is our Telangana CM name in 2026?",
        option: ["KCR", "Rahul Gandhi", "Revanth Reddy", "Malanna"],
        answer: "Revanth Reddy"
    },

    quation3: {
        quation: "What is the capital of Telangana?",
        option: ["Hyd", "Mhbd", "Kmm", "None"],
        answer: "Hyd"
    }
};
let questions = [
    quiz.quation1,
    quiz.quation2,
    quiz.quation3
];
let cur_index = 0;
let cur_quation = questions[cur_index];
let score = 0;
let answered = false;
function santhosh() {
    document.getElementById("demo").innerHTML =
        cur_quation.quation;
    let cur_option = "";
    cur_quation.option.forEach(q => {
        cur_option += `
            <div>
                <input
                    type="radio"
                    name="answer"
                    value="${q}">
                ${q}
            </div>
        `;
    });
    document.getElementById("option").innerHTML =
        cur_option;
    document.getElementById("score").innerHTML =
        "Score: " + score;
}
function selected() {
    if (answered) {
        alert("You already answered this question.");
        return;
    }
    let selectedOption =
        document.querySelector(
            'input[name="answer"]:checked'
        );
    if (!selectedOption) {
        alert("Please select an option");
        return;
    }
    if (selectedOption.value === cur_quation.answer) {
        score++;
        alert("Correct Answer!");
    } else {
        alert("Wrong Answer!");
    }
    answered = true;
    document.getElementById("score").innerHTML =
        "Score: " + score;
}
function nextQuestion() {
    if (cur_index < questions.length - 1) {
        cur_index++;
        cur_quation = questions[cur_index];
        answered = false;
        santhosh();
    } else {
        alert(
            "Quiz Completed!\nFinal Score: " +
            score +
            "/" +
            questions.length
        );

    }
}
santhosh();