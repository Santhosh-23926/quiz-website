let quiz = {

    question1: {
        question: "avinash lover name?",
        options: ["bantu", "saipallavi", "narsapur", "all"],
        answer: "all"
    },

    question2: {
        question: "tell me about avinash behaviour?",
        options: ["good", "funny", "friendly", "rude"],
        answer: "friendly"
    },

    question3: {
        question: "who is our guruji?",
        options : ["sathish", "avinash", "sanjay", "satish and avinash"],
        answer: "satish and avinash"
    },
    question4: {
        question: "😊When we hear Satish's name, what comes to our mind😊?",
        options: ["😊 Smiley Face", "😍 Lover Boy", "😡 Angry Face", "😄 All"],
        answer: "😄 All"
    },
    question5: {
        question: "Who is Sanjay?",
        options: ["Don", "Singer", "Smart Boy", "Lover Boy"],
        answer: "Don"
    },
    question6: {
        question: "How would you describe Vamshi?",
        options: ["loverboy", "Smart", "Hardworking", "All"],
        answer: "Hardworking"
    },
    question7: {
        question: "Sathwik lover name?",
        options: ["Gudal", "Nilu", "Unknown", "All"],
        answer: "All"
    },
    question8: {
        question: "Who is Santhosh?😊😊",
        options: [
            "😊 Good Guy",
            "😎 Very Good Guy",
            "🤝 Loyal Boy",
            "🎉 All"
        ],
    answer: "🎉 All"
},

}


let questions = [
    quiz.question1,
    quiz.question2,
    quiz.question3,
    quiz.question4,
    quiz.question5,
    quiz.question6,
    quiz.question7,
    quiz.question8
];
let cur_index = 0;
let cur_question = questions[cur_index];
let score = 0;
let answered = false;
function santhosh() {
    document.getElementById("demo").innerHTML =
        cur_question.question;
    let cur_option = "";
    cur_question.options.forEach(q => {
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
    if (selectedOption.value === cur_question .answer) {
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
        cur_question = questions[cur_index];
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