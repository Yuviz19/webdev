const intro = document.getElementById("intro")
const quest_container = document.getElementById("question_container");
const quest_text = document.getElementById("question_text");
const choice_list = document.getElementById("choice_list");
const nxt_btn = document.getElementById("next_btn");
const result = document.getElementById("result_container");
const final_score = document.getElementById("score");
const restart = document.getElementById("restart_btn");
const start = document.getElementById("start_btn");

let questions = [
  {
    question: "What is the capital of Germany?",
    options: ["Paris", "Berlin", "Warsaw"],
    answer: "Berlin"
  },
  {
    question: "Which planet is also called the 'Red Planet'?",
    options: ["Jupiter", "Earth", "Mars"],
    answer: "Mars"
  },
  {
    question: "Who wrote the book 'Project Hail Marry'?",
    options: ["Andy Weir", "Carl Segan", "Brian Cox"],
    answer: "Andy Weir"
  }
];

let current_question = 0;
let score = 0;

start.addEventListener("click", start_quiz);

nxt_btn.addEventListener("click", () => {
  current_question++;
  if (current_question < questions.length) {
    show_question();
  }
  else {
    showResult();
  }
});

function start_quiz(){
  start.classList.add("hidden");
  result.classList.add("hidden");
  quest_container.classList.remove("hidden");
  show_question();
};

function show_question() {
  nxt_btn.classList.add("hidden");
  quest_text.textContent = questions[current_question].question;
  choice_list.innerHTML = "";
  questions[current_question].options.forEach((choice) => {
    const li = document.createElement("li");
    li.textContent = choice;
    li.addEventListener("click", () => selectAnswer(choice));
    choice_list.appendChild(li);
  });
};

function selectAnswer(choice) {
  const correctAnswer = questions[current_question].answer;
  if (correctAnswer == choice) {
    score++;
  }
  nxt_btn.classList.remove("hidden");
}

function showResult() {
  quest_container.classList.add("hidden");
  result.classList.remove("hidden");
  final_score.textContent = `${score} out of ${questions.length}`
}
