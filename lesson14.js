'use strict';

// 1. виведення елементів масиву трьома циклами
const fruits = ['apple', 'banana', 'cantaloupe', 'blueberries', 'grapefruit'];

console.log("--- Цикл for ---");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log("--- Цикл while ---");
let w = 0;
while (w < fruits.length) {
  console.log(fruits[w]);
  w++;
}

console.log("--- Цикл do...while ---");
let d = 0;
do {
  console.log(fruits[d]);
  d++;
} while (d < fruits.length);

// 2. парні числа з масиву
const Numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("--- Парні числа ---");
for (let i = 0; i < Numbs.length; i++) {
  if (Numbs[i] % 2 === 0) {
    console.log(Numbs[i]);
  }
}

// 3. операції з масивом names
const names = ['Batman'];

names.push('Joker'); // в кінець
names.unshift('Bane'); // на початок

// додаємо Alfred якщо його нема
if (!names.includes('Alfred')) {
  names.push('Alfred');
}

// видаляємо Batman якщо він є
const batmanIndex = names.indexOf('Batman');
if (batmanIndex !== -1) {
  names.splice(batmanIndex, 1);
}

console.log("Масив names після операцій:", names);

// 4. функція sumInput()
function sumInput() {
  let numbers = [];

  while (true) {
    let value = prompt("Введіть число для суми:", "");

    // перевірка на скасування, порожній рядок або не число
    if (value === null || value.trim() === "" || isNaN(value)) {
      break;
    }

    numbers.push(+value);
  }

  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}

let total = sumInput();
alert("Сума введених чисел: " + total);

// 5. робота з масивом styles
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll"); // в кінець

// заміна в середині
let middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "Classics";

// видалення та показ першого
let firstStyle = styles.shift();
alert("Видалений перший елемент: " + firstStyle);

// додавання Rap і Reggae на початок
styles.unshift("Rap", "Reggae");
console.log("Підсумковий масив styles:", styles);
