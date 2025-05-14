let questions = [
  {
    "question": "What does HTML stand for?",
    "answer_1": "HyperText Markup Language",
    "answer_2": "Hyperlinks and Text Markup Language",
    "answer_3": "Home Tool Markup Language",
    "answer_4": "Hyper Tool Multi Language",
    "right_answer": 1
  },
  {
    "question": "Which tag is used to create a hyperlink?",
    "answer_1": "&lt;link&gt;",
    "answer_2": "&lt;a&gt;",
    "answer_3": "&lt;href&gt;",
    "answer_4": "&lt;url&gt;",
    "right_answer": 2
  },
  {
    "question": "Which HTML tag is used to define an internal style sheet?",
    "answer_1": "&lt;script&gt;",
    "answer_2": "&lt;css&gt;",
    "answer_3": "&lt;style&gt;",
    "answer_4": "&lt;stylesheet&gt;",
    "right_answer": 3
  },
  {
    "question": "What is the correct HTML element for inserting a line break?",
    "answer_1": "&lt;lb&gt;",
    "answer_2": "&lt;break&gt;",
    "answer_3": "&lt;br&gt;",
    "answer_4": "&lt;line&gt;",
    "right_answer": 3
  },
  {
    "question": "How can you open a link in a new tab/window?",
    "answer_1": "add target='_window'",
    "answer_2": "add target='new'",
    "answer_3": "add target='_self'",
    "answer_4": "add target='_blank'",
    "right_answer": 4
  },
  {
    "question": "Which tag is used to display an image in HTML?",
    "answer_1": "&lt;img&gt;",
    "answer_2": "&lt;image&gt;",
    "answer_3": "&lt;src&gt;",
    "answer_4": "&lt;pic&gt;",
    "right_answer": 1
  },
  {
    "question": "Which attribute is used in HTML to define inline styles?",
    "answer_1": "font",
    "answer_2": "style",
    "answer_3": "class",
    "answer_4": "design",
    "right_answer": 2
  },
  {
    "question": "Which of the following is a semantic HTML tag?",
    "answer_1": "&lt;div&gt;",
    "answer_2": "&lt;section&gt;",
    "answer_3": "&lt;span&gt;",
    "answer_4": "&lt;b&gt;",
    "right_answer": 2
  },
  {
    "question": "What is the correct HTML for creating a checkbox?",
    "answer_1": "&lt;input type='checkbox'&gt;",
    "answer_2": "&lt;checkbox&gt;",
    "answer_3": "&lt;check&gt;",
    "answer_4": "&lt;input type='check'&gt;",
    "right_answer": 1
  },
  {
    "question": "Which doctype is correct for HTML5?",
    "answer_1": "&lt;!DOCTYPE HTML PUBLIC&gt;",
    "answer_2": "&lt;!DOCTYPE html SYSTEM&gt;",
    "answer_3": "&lt;!DOCTYPE html&gt;",
    "answer_4": "&lt;DOCTYPE HTML5&gt;",
    "right_answer": 3
  }
];
let rightQuestions = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/fail.mp3');
function init() {
  document.getElementById("questionlength").innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
if(currentQuestion >= questions.length){
  document.getElementById("endScreen").style = '';
  document.getElementById("questionBody").style = "display: none";
  document.getElementById("possiblequestions").innerHTML = questions.length;
  document.getElementById("answeredquestions").innerHTML = rightQuestions;
}else{
  let percent = (currentQuestion + 1) / questions.length;
  percent = percent * 100;
  document.querySelector("#progressbar-id .progress-bar").style.width = `${percent}%`;
  document.querySelector("#progressbar-id .progress-bar").innerText = `${percent}%`;
  let question = questions[currentQuestion];
  document.getElementById("counter").innerHTML = currentQuestion + 1;
  document.getElementById("questioncard").innerHTML = question[`question`]
  document.getElementById("answer_1").innerHTML = question[`answer_1`];
  document.getElementById("answer_2").innerHTML = question[`answer_2`];
  document.getElementById("answer_3").innerHTML = question[`answer_3`];
  document.getElementById("answer_4").innerHTML = question[`answer_4`];
}

}
function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumer = selection.slice(-1);
  let idOfRightAnswer = `answer_${question['right_answer']}`;

  if (selectedQuestionNumer == question['right_answer']) {
    document.getElementById(selection).parentNode.classList.add('bg-success');
    AUDIO_SUCCESS.play();
    rightQuestions++;
  } else {
    document.getElementById(selection).parentNode.classList.add('bg-danger');
    document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    AUDIO_FAIL.play();
  }
  document.getElementById("next-button").disabled = false;
}

function nextQuestion() {

  document.getElementById("next-button").disabled = true;
  currentQuestion++;
  showQuestion();
  resetAnswerButtons()
}

function resetAnswerButtons() {
  document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_1').parentNode.classList.remove('bg-success');
  document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_2').parentNode.classList.remove('bg-success');
  document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_3').parentNode.classList.remove('bg-success');
  document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function reloadGame(){
  document.getElementById("questionBody").style = '';
  document.getElementById("endScreen").style = "display: none";
  rightQuestions = 0;
  currentQuestion = 0;
  init();
}
