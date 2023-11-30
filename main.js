document.getElementById("markQuizBtn").addEventListener("click", markQuiz);

function markQuiz() {
  let score = 0;
  let totalQ = 4;

  // variables for answers
  let answer1 = document.getElementById("answer1").value.toLowerCase();
  let answer2 = document.getElementById("answer2").value.toLowerCase();
  let answer3 = document.getElementById("answer3").value.toLowerCase();
  let answer4 = document.getElementById("answer4").value.toLowerCase();

  // question 1
  if (answer1 === "true") {
    score++;
    document.getElementById("answer1").value = "Correct!";
  } else {
    document.getElementById("answer1").value = "Incorrect.";
  }

  // question 2
  if (answer2 === "stanislaw august poniatowski") {
    score++;
    document.getElementById("answer2").value = "Correct!";
  } else {
    document.getElementById("answer2").value = "Incorrect.";
  }

  // question 3
  if (answer3 === "sloths" || answer3 === "manatees") {
    score++;
    document.getElementById("answer3").value = "Correct!";
  } else {
    document.getElementById("answer3").value = "Incorrect.";
  }

  // question 4
  if (answer4 === "1972") {
    score++;
    document.getElementById("answer4").value = "Correct!";
  } else {
    document.getElementById("answer4").value = "Incorrect.";
  }

  let percentage = (score / totalQ) * 100;
  let resultEl = document.getElementById("resultDisplay");
  resultEl.innerHTML = `You got ${score}/${totalQ} (${percentage}%)`;

  // feedback on the score
  if (score === 4) {
    feedback = "You definitely cheated. You should be ashamed of yourself.";
  } else if (score >= 2) {
    feedback = "Not bad. Unless you cheated. But you wouldn't do that...right?";
  } else {
    feedback = "Skill issue.";
  }

  // Display feedback under the button
  resultEl.innerHTML += `<p>${feedback}</p>`;
}
