document.addEventListener("DOMContentLoaded", () => {
  const quizForm = document.getElementById("quiz-form");
  const resultDiv = document.getElementById("quiz-result");

  const correctAnswers = {
    q1: "c",
    q2: "a",
    q3: "b",
  };

  quizForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let score = 0;
    const userAnswers = new FormData(quizForm);

    for (const [question, answer] of userAnswers.entries()) {
      if (correctAnswers[question] === answer) {
        score++;
      }
    }

    let message = "";
    if (score === 3) {
      message = `Excelente! Você acertou ${score} de 3 perguntas.`;
    } else if (score === 2) {
      message = `Muito bom! Você acertou ${score} de 3 perguntas.`;
    } else {
      message = `Continue estudando! Você acertou ${score} de 3.`;
    }

    resultDiv.textContent = message;
    resultDiv.style.display = "block";
  });
});
