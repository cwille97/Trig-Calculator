var questions = ["Sin 0", "Sin 1/2", "Sin √2/2"];
var answers = ["0", "π/6", "π/4"];
var num = Math.floor(Math.random() * (questions.length - 0));

function checkAnswer() {
	var answer = document.getElementById("answer");
	if (answer == answers[num]) {
		console.alert("correct");
	}
	else {
		console.alert("incorrect");
	}

}

function generateQuestion() {
	document.getElementById("question").innerHTML = questions[num];
}

