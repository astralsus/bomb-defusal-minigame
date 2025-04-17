let timeLeft = 35;
let timerId;
let correctAnswer;
function generateQuestion() {
  const a = Math.floor(Math.random() * 20) + 1;
  const b = Math.floor(Math.random() * 20) + 1;
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  correctAnswer = eval(`${a} ${operator} ${b}`);
  document.getElementById('question').textContent = `What's ${a} ${operator} ${b}?`;
}
function startTimer() {
  timerId = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').textContent = `⏱️ ${timeLeft} seconds remaining`;
    if (timeLeft <= 0) {
      clearInterval(timerId);
      explode();
    }
  }, 1000);
}
function checkAnswer() {
  const userAnswer = parseInt(document.getElementById('answer').value);
  if (userAnswer === correctAnswer) {
    defuse();
  } else {
    explode();
  }
}
function defuse() {
  clearInterval(timerId);
  const bomb = document.getElementById('bomb');
  bomb.classList.add('defused');
  bomb.textContent = '✅';
  document.getElementById('result').textContent = 'Mission success! Bomb defused.';
  document.getElementById('timer').style.color = 'limegreen';
}
function explode() {
  clearInterval(timerId);
  const bomb = document.getElementById('bomb');
  bomb.classList.add('exploded');
  bomb.textContent = '💥';
  document.getElementById('result').textContent = '💀 Mission failed. The bomb exploded.';
  document.getElementById('timer').style.color = 'red';
}
generateQuestion();
startTimer();
