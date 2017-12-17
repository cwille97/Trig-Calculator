var answers_array = [];
var questions_array = [];
var sine_answers = ["0", "1/2", "√2/2", "√3/2", "1", "√3/2", "√2/2", "1/2", "0", "-1/2", "-√2/2", "-√3/2", "-1", "-√3/2", "-√2/2", "-1/2"]
var sine_questions = ["Sin 0", "Sin π/6", "Sin π/4", "Sin π/3", "Sin π/2", "Sin 2π/3", "Sin 3π/4", "Sin 5π/6", "Sin π", "Sin 7π/6", "Sin 5π/4",
"Sin 4π/3", "Sin 3π/2", "Sin 5π/3", "Sin 7π/4", "Sin 11π/6"];
var cosine_answers = ["1", "√3/2", "√2/2", "1/2", "0", "-1/2", "-√2/2", "-√3/2", "-1", "-√3/2", "-√2/2", "-1/2", "0", "1/2", "√2/2", "√3/2"];
var cosine_questions = ["Cos 0", "Cos π/6", "Cos π/4", "Cos π/3", "Cos π/2", "Cos 2π/3", "Cos 3π/4", "Cos 5π/6", "Cos π", "Cos 7π/6", "Cos 5π/4",
"Cos 4π/3", "Cos 3π/2", "Cos 5π/3", "Cos 7π/4", "Cos 11π/6"];
var tangent_answers = ["0", "√3/3", "1", "√3", "undefined", "-√3", "-1", "-√3/3", "0", "√3/3", "1", "√3", "undefined", "-√3", "-1", "-√3/3", "0"];
var tangent_questions = ["Tan 0", "Tan π/6", "Tan π/4", "Tan π/3", "Tan π/2", "Tan 2π/3", "Tan 3π/4", "Tan 5π/6", "Tan π", "Tan 7π/6", "Tan 5π/4",
"Tan 4π/3", "Tan 3π/2", "Tan 5π/3", "Tan 7π/4", "Tan 11π/6"];
var secant_answers = ["1", "2√3/3", "√2", "2", "undefined", "-2", "-√2", "-2√3/3", "-1", "-2√3/3", "-√2", "-2", "undefined", "2", "√2", "2√3/3", "1"];
var secant_questions = ["Sec 0", "Sec π/6", "Sec π/4", "Sec π/3", "Sec π/2", "Sec 2π/3", "Sec 3π/4", "Sec 5π/6", "Sec π", "Sec 7π/6", "Sec 5π/4",
"Sec 4π/3", "Sec 3π/2", "Sec 5π/3", "Sec 7π/4", "Sec 11π/6"];
var cosecant_answers = ["undefined", "2", "√2", "2√3/3", "1", "2√3/3", "√2", "2", "undefined", "-2", "-√2", "-2√3/3", "-1", "-2√3/3", "-1", "-2√3/3", "-√2", "-2", "undefined"];
var cosecant_questions = ["Csc 0", "Csc π/6", "Csc π/4", "Csc π/3", "Csc π/2", "Csc 2π/3", "Csc 3π/4", "Csc 5π/6", "Csc π", "Csc 7π/6", "Csc 5π/4",
"Csc 4π/3", "Csc 3π/2", "Csc 5π/3", "Csc 7π/4", "Csc 11π/6"];
var cotangent_answers = ["undefined", "√3", "1", "√3/3", "0", "-√3/3", "-1", "-√3", "undefined", "√3", "1", "√3/3", "0", "-√3/3", "-1", "-√3", "undefined"];
var cotangent_questions = ["Cot 0", "Cot π/6", "Cot π/4", "Cot π/3", "Cot π/2", "Cot 2π/3", "Cot 3π/4", "Cot 5π/6", "Cot π", "Cot 7π/6", "Cot 5π/4",
"Cot 4π/3", "Cot 3π/2", "Cot 5π/3", "Cot 7π/4", "Cot 11π/6"];
var numCorrect = 0;
var numIncorrect = 0;
var numQuestions = 0;
var maxQuestions = 0;
var numQuestionsDesired = sessionStorage.getItem('numQuestionsDesired'); // for localstorage info see: https://www.w3schools.com/html/html5_webstorage.asp

if (sessionStorage.getItem("true_sine") == "true") {
  answers_array = answers_array.concat(sine_answers);
  questions_array = questions_array.concat(sine_questions);
}

if (sessionStorage.getItem("true_cosine") == "true") {
  answers_array = answers_array.concat(cosine_answers);
  questions_array = questions_array.concat(cosine_questions);
}

if (sessionStorage.getItem("true_tangent") == "true") {
  answers_array = answers_array.concat(tangent_answers);
  questions_array = questions_array.concat(tangent_questions);
}

if (sessionStorage.getItem("true_secant") == "true") {
  answers_array = answers_array.concat(secant_answers);
  questions_array = questions_array.concat(secant_questions);
}

if (sessionStorage.getItem("true_cosecant") == "true") {
  answers_array = answers_array.concat(cosecant_answers);
  questions_array = questions_array.concat(cosecant_questions);
}

if (sessionStorage.getItem("true_cotangent") == "true") {
  answers_array = answers_array.concat(cotangent_answers);
  questions_array = questions_array.concat(cotangent_questions);
}

var ranNum = Math.floor(Math.random() * (questions_array.length));



function checkAnswer() {
  var receivedAnswer = input.value;
  if (receivedAnswer == answers_array[ranNum]) {
    document.getElementById("answer").innerHTML = "Correct!";
    document.getElementById("next-button").innerHTML = "<next-button onclick=nextButton()>Next Question</button";
    document.getElementById("clear").innerHTML = "";
    numCorrect++;
  } else {
    document.getElementById("answer").innerHTML = "Incorrect!";
    document.getElementById("next-button").innerHTML = "<next-button onclick=nextButton()>Next Question</button";
    document.getElementById("clear").innerHTML = "";
    numIncorrect++;
  }
  currentStop();
}

document.getElementById("question-text").innerHTML = questions_array[ranNum];

function nextButton() {
  ranNumTemp = ranNum; // creating a temp variable to store the ranNum value before a new ranNum is generated
  ranNum = Math.floor(Math.random() * (questions_array.length));
  while (ranNum == ranNumTemp) { // If the newly generated ranNum is the same value as the previous one
    ranNum = Math.floor(Math.random() * (questions_array.length)); // Continue generating new ranNum's until a different one is generated 
  }
  document.getElementById("question-text").innerHTML = questions_array[ranNum];
  document.getElementById("next-button").innerHTML = "";
  // document.getElementById("clear").innerHTML = "<input type='text' id='input'/><button onclick='checkAnswer()'>Check Answer</button>";
  document.getElementById("clear").innerHTML = "<input type='text' id='input'  onkeydown='if (event.keyCode == 13) document.getElementById('checkAnswerButton').click()'/><button id='checkAnswerButton' onclick='checkAnswer()'>Check Answer</button>";
  document.getElementById("answer").innerHTML = "";
  currentReset();
  numQuestions++;
  calculateScoreboard();
  if (numQuestions >= numQuestionsDesired) {
    window.location.href = "score.html";
  }
}


function insertSqrt() {
  var text = document.getElementById("input");
  text.value += "√";
}

function insertPi() {
  var text= document.getElementById("input");
  text.value += "π";
}

function calculateScoreboard() {
  document.getElementById("num-correct").innerHTML = "Number Correct: " + numCorrect;
  document.getElementById("num-incorrect").innerHTML = "Number Incorrect: " + numIncorrect;
  document.getElementById("num-questions").innerHTML = "Number of Questions: " + numQuestions;
  document.getElementById("percentage-correct").innerHTML = "Percentage: " + Math.floor((numCorrect / numQuestions) * 100) + "%";
}

function checkInfo() {
      sessionStorage.setItem("numQuestionsDesired", document.getElementById('numQuestionsDesired').value); // see for localstorage info: https://www.w3schools.com/html/html5_webstorage.asp
      if (document.customize.sine.checked == false && document.customize.cosine.checked == false && document.customize.tangent.checked == false && document.customize.secant.checked == false && document.customize.cosecant.checked == false && document.customize.cotangent.checked == false) {
        alert("Because you did not select any options, all question types will be asked");
        sessionStorage.setItem("true_sine", true);
        sessionStorage.setItem("true_cosine", true);
        sessionStorage.setItem("true_tangent", true);
        sessionStorage.setItem("true_secant", true);
        sessionStorage.setItem("true_cosecant", true);
        sessionStorage.setItem("true_cotangent", true);
        return true;
      }
      else {
        if (document.customize.sine.checked) {
          sessionStorage.setItem("true_sine", true);
        }
        else {
          sessionStorage.setItem("true_sine", false);
        }
        if (document.customize.cosine.checked) {
          sessionStorage.setItem("true_cosine", true);
        }
        else {
          sessionStorage.setItem("true_cosine", false);
        }
        if (document.customize.tangent.checked) {
          sessionStorage.setItem("true_tangent", true);
        }
        else {
          sessionStorage.setItem("true_tangent", false);
        }
        if (document.customize.secant.checked) {
          sessionStorage.setItem("true_secant", true);
        }
        else {
          sessionStorage.setItem("true_secant", false);
        }
        if (document.customize.cosecant.checked) {
          sessionStorage.setItem("true_cosecant", true);
        }
        else {
          sessionStorage.setItem("true_cosecant", false);
        }
        if (document.customize.cotangent.checked) {
          sessionStorage.setItem("true_cotangent", true);
        }
        else {
          sessionStorage.setItem("true_cotangent", false);
        }
        return true;
      }
    }
