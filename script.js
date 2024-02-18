let currentQuestion = 1;
function nextQuestion() {
  document.getElementById("qtn" + currentQuestion).classList.remove("active");
  currentQuestion++;
  if (currentQuestion > 5) {
    currentQuestion = 1; // Reset back to the first question
  }
  document.getElementById("qtn" + currentQuestion).classList.add("active");
}

function selectOption(option) {
  // Deselect all options
  document.querySelectorAll(".option").forEach(function (element) {
    element.classList.remove("selected");
  });
  // Select the clicked option
  event.target.classList.add("selected");
}

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("click", function () {
  if (checkbox.checked) {
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
});
