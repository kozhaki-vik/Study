'use strict';

// 1. вивід привітання
let message1 = "Hello";
let message2 = "JavaScript";
alert(message1 + " " + message2 + "!");

// 2. сума двох чисел
let x = +prompt("Введіть перше число x:");
let y = +prompt("Введіть друге число y:");
alert("Сума: " + (x + y));

// 3. гра вгадай число
let targetNumber = 3;
let guess = +prompt("Вгадайте число від 1 до 10:");
if (guess === targetNumber) {
  alert('Congratulations, You did it!');
} else if (guess > targetNumber) {
  alert('The number is too long');
} else {
  alert('The number is short');
}

// 4.1 день тижня через if-else
let day = prompt("Введіть день тижня (наприклад, Понеділок):");
if (day === "Понеділок" || day === "Monday") {
  alert("Start of the work week!");
} else if (day === "П'ятниця" || day === "Friday") {
  alert("End of the work week!");
} else {
  alert("A regular day");
}

// 4.2 день тижня через switch
let daySwitch = prompt("Введіть день тижня для перевірки switch:");
switch (daySwitch) {
  case "Понеділок":
  case "Monday":
    alert("Start of the work week!");
    break;
  case "П'ятниця":
  case "Friday":
    alert("End of the work week!");
    break;
  default:
    alert("A regular day");
}

// 5. оцінка за балами
let score = +prompt("Введіть кількість балів за іспит:");
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

alert("Ваша оцінка: " + grade);
