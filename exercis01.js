'use strict';

// 1. Привітання
let message1 = "Hello";
let message2 = "JavaScript";

function getGreeting() {
  return message1 + " " + message2 + "!";
}

// 2. Сума двох чисел
function calculateSum(x, y) {
  return x + y;
}

// 3. Гра вгадай число
let targetNumber = 3;
function checkGuess(guess) {
  if (guess === targetNumber) {
    return { status: 'success', text: 'Congratulations, You did it!' };
  } else if (guess > targetNumber) {
    return { status: 'warning', text: 'The number is too long' };
  } else {
    return { status: 'warning', text: 'The number is short' };
  }
}

// 4.1 День тижня через if-else
function checkDayIf(day) {
  if (day === "Понеділок" || day === "Monday") {
    return "Start of the work week!";
  } else if (day === "П'ятниця" || day === "Friday") {
    return "End of the work week!";
  } else {
    return "A regular day";
  }
}

// 4.2 День тижня через switch
function checkDaySwitch(daySwitch) {
  switch (daySwitch) {
    case "Понеділок":
    case "Monday":
      return "Start of the work week!";
    case "П'ятниця":
    case "Friday":
      return "End of the work week!";
    default:
      return "A regular day";
  }
}

// 5. Оцінка за балами
function calculateGrade(score) {
  let grade;
  if (score < 50) {
    grade = 'F';
  } else if (score < 70) {
    grade = 'D';
  } else if (score < 80) {
    grade = 'C';
  } else if (score < 90) {
    grade = 'B';
  } else {
    grade = 'A';
  }
  return grade;
}

// Початковий лог у консоль
console.log("Заняття 12 завантажено успішно.");
console.log("Привітання:", getGreeting());

// Прив'язка інтерактивних елементів на сторінці
document.addEventListener('DOMContentLoaded', () => {
  // 1. Привітання
  const btnGreeting = document.getElementById('btn-greeting');
  const greetingResult = document.getElementById('greeting-result');
  if (btnGreeting && greetingResult) {
    btnGreeting.addEventListener('click', () => {
      const msg = getGreeting();
      greetingResult.className = 'result-box success';
      greetingResult.textContent = msg;
    });
  }

  // 2. Сума чисел
  const btnSum = document.getElementById('btn-sum');
  const numX = document.getElementById('num-x');
  const numY = document.getElementById('num-y');
  const sumResult = document.getElementById('sum-result');
  if (btnSum && sumResult) {
    btnSum.addEventListener('click', () => {
      const x = +numX.value;
      const y = +numY.value;
      const sum = calculateSum(x, y);
      sumResult.className = 'result-box success';
      sumResult.textContent = `Сума: ${x} + ${y} = ${sum}`;
    });
  }

  // 3. Вгадай число
  const btnGuess = document.getElementById('btn-guess');
  const guessInput = document.getElementById('guess-input');
  const guessResult = document.getElementById('guess-result');
  if (btnGuess && guessResult) {
    btnGuess.addEventListener('click', () => {
      const val = +guessInput.value;
      if (!guessInput.value) {
        guessResult.className = 'result-box danger';
        guessResult.textContent = 'Будь ласка, введіть число!';
        return;
      }
      const res = checkGuess(val);
      guessResult.className = `result-box ${res.status}`;
      guessResult.textContent = `${res.text} (Ваше число: ${val})`;
    });
  }

  // 4. День тижня
  const dayInput = document.getElementById('day-input');
  const btnDayIf = document.getElementById('btn-day-if');
  const btnDaySwitch = document.getElementById('btn-day-switch');
  const dayResult = document.getElementById('day-result');

  if (btnDayIf && dayResult) {
    btnDayIf.addEventListener('click', () => {
      const day = dayInput.value.trim();
      const res = checkDayIf(day);
      dayResult.className = 'result-box success';
      dayResult.textContent = `[if-else] ${day || '(порожньо)'}: ${res}`;
    });
  }

  if (btnDaySwitch && dayResult) {
    btnDaySwitch.addEventListener('click', () => {
      const day = dayInput.value.trim();
      const res = checkDaySwitch(day);
      dayResult.className = 'result-box success';
      dayResult.textContent = `[switch] ${day || '(порожньо)'}: ${res}`;
    });
  }

  // 5. Оцінка за балами
  const btnScore = document.getElementById('btn-score');
  const scoreInput = document.getElementById('score-input');
  const scoreResult = document.getElementById('score-result');

  function updateScoreGrade() {
    const scoreVal = +scoreInput.value;
    const grade = calculateGrade(scoreVal);
    scoreResult.className = 'result-box';
    scoreResult.innerHTML = `Кількість балів: <strong>${scoreVal}</strong> | Ваша оцінка: <span class="grade-badge grade-${grade}">${grade}</span>`;
  }

  if (btnScore && scoreResult) {
    btnScore.addEventListener('click', updateScoreGrade);
    scoreInput.addEventListener('input', updateScoreGrade);
  }

  // Запуск оригінального prompt/alert сценарію
  const btnRunOriginal = document.getElementById('btn-run-original');
  if (btnRunOriginal) {
    btnRunOriginal.addEventListener('click', () => {
      // 1. Привітання
      alert(message1 + " " + message2 + "!");

      // 2. Сума двох чисел
      let x = +prompt("Введіть перше число x:", "10");
      let y = +prompt("Введіть друге число y:", "25");
      alert("Сума: " + (x + y));

      // 3. Гра вгадай число
      let guess = +prompt("Вгадайте число від 1 до 10 (target: 3):", "3");
      if (guess === targetNumber) {
        alert('Congratulations, You did it!');
      } else if (guess > targetNumber) {
        alert('The number is too long');
      } else {
        alert('The number is short');
      }

      // 4.1 День тижня через if-else
      let day = prompt("Введіть день тижня (наприклад, Понеділок):", "Понеділок");
      alert(checkDayIf(day));

      // 4.2 День тижня через switch
      let daySwitch = prompt("Введіть день тижня для перевірки switch:", "Friday");
      alert(checkDaySwitch(daySwitch));

      // 5. Оцінка за балами
      let score = +prompt("Введіть кількість балів за іспит (0-100):", "85");
      let grade = calculateGrade(score);
      alert("Ваша оцінка: " + grade);
    });
  }
});
