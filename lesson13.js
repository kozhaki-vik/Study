'use strict';

// 1. checkAge в один рядок
// варіант з ?
function checkAgeQuestion(age) {
  return (age > 18) ? true : confirm('Батьки дозволили?');
}

// варіант з ||
function checkAgeOr(age) {
  return (age > 18) || confirm('Батьки дозволили?');
}

// 2. пошук мінімуму
// варіант з if
function minIf(a, b) {
  if (a < b) {
    return a;
  }
  return b;
}

// варіант з ?
function minTernary(a, b) {
  return a < b ? a : b;
}

console.log("min(2, 5) =", minTernary(2, 5));
console.log("min(3, -1) =", minTernary(3, -1));
console.log("min(1, 1) =", minTernary(1, 1));

// 3. піднесення до степеня pow(x, n)
function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

console.log("pow(3, 2) =", pow(3, 2));
console.log("pow(3, 3) =", pow(3, 3));

// запит у користувача для pow
let num = +prompt("Введіть число x для pow:", 3);
let power = +prompt("Введіть степінь n для pow:", 2);

if (power < 1 || !Number.isInteger(power)) {
  alert("Степінь має бути натуральним числом більше нуля");
} else {
  alert(`Результат ${num} ^ ${power} = ${pow(num, power)}`);
}

// 4. стрілкові функції замість виразів
const ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};

ask(
  "Ви згодні?",
  () => alert("Ви погодились."),
  () => alert("Ви скасували виконання.")
);
