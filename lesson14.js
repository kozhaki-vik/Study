'use strict';

// 1. виведення елементів масиву трьома циклами
const fruits = ['apple', 'banana', 'cantaloupe', 'blueberries', 'grapefruit'];

function logFruitsFor(logFn = console.log) {
  logFn("--- Цикл for ---");
  for (let i = 0; i < fruits.length; i++) {
    logFn(fruits[i]);
  }
}

function logFruitsWhile(logFn = console.log) {
  logFn("--- Цикл while ---");
  let w = 0;
  while (w < fruits.length) {
    logFn(fruits[w]);
    w++;
  }
}

function logFruitsDoWhile(logFn = console.log) {
  logFn("--- Цикл do...while ---");
  let d = 0;
  do {
    logFn(fruits[d]);
    d++;
  } while (d < fruits.length);
}

// 2. парні числа з масиву
const Numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getEvenNumbers(arr = Numbs) {
  const evens = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens.push(arr[i]);
    }
  }
  return evens;
}

// 3. операції з масивом names
function executeNamesOperations() {
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

  return names;
}

// 4. функція sumInput()
function sumInputPrompt() {
  let numbers = [];

  while (true) {
    let value = prompt("Введіть число для суми (або натисніть Cancel / пустий рядок):", "");

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
  return { numbers, sum };
}

// 5. робота з масивом styles
function executeStylesOperations() {
  let styles = ["Jazz", "Blues"];
  styles.push("Rock-n-Roll"); // в кінець

  // заміна в середині
  let middleIndex = Math.floor(styles.length / 2);
  styles[middleIndex] = "Classics";

  // видалення першого
  let firstStyle = styles.shift();

  // додавання Rap і Reggae на початок
  styles.unshift("Rap", "Reggae");

  return { firstStyle, styles };
}

// Логи до консолі розробника
console.log("=== Заняття 14: Робота з масивами ===");
logFruitsFor();
logFruitsWhile();
logFruitsDoWhile();
console.log("--- Парні числа ---", getEvenNumbers());
console.log("Масив names після операцій:", executeNamesOperations());
const stylesResult = executeStylesOperations();
console.log("Видалений перший елемент styles:", stylesResult.firstStyle);
console.log("Підсумковий масив styles:", stylesResult.styles);

// Інтерактивні обробники на сторінці
document.addEventListener('DOMContentLoaded', () => {
  const consoleOutput = document.getElementById('console-output');

  function appendLog(text) {
    if (consoleOutput) {
      const line = document.createElement('div');
      line.textContent = `> ${text}`;
      consoleOutput.appendChild(line);
      consoleOutput.scrollTop = consoleOutput.scrollHeight;
    }
  }

  appendLog("Завантажено масиви: fruits, Numbs, names, styles");
  appendLog("Парні числа Numbs: " + getEvenNumbers().join(', '));
  appendLog("Масив names: " + JSON.stringify(executeNamesOperations()));
  appendLog("Масив styles: " + JSON.stringify(stylesResult.styles));

  // 1. Бейджі fruits
  const fruitsBadges = document.getElementById('fruits-badges');
  const fruitsResult = document.getElementById('fruits-result');
  if (fruitsBadges) {
    fruitsBadges.innerHTML = fruits.map((f, i) => `<span class="array-item-badge" id="fruit-${i}">${i}: ${f}</span>`).join('');
  }

  const btnFor = document.getElementById('btn-loop-for');
  const btnWhile = document.getElementById('btn-loop-while');
  const btnDoWhile = document.getElementById('btn-loop-dowhile');

  if (btnFor) {
    btnFor.addEventListener('click', () => {
      fruitsResult.className = 'result-box success';
      fruitsResult.innerHTML = `<strong>Цикл for:</strong> [${fruits.join(', ')}]`;
      appendLog("for: " + fruits.join(' -> '));
    });
  }
  if (btnWhile) {
    btnWhile.addEventListener('click', () => {
      fruitsResult.className = 'result-box success';
      fruitsResult.innerHTML = `<strong>Цикл while:</strong> [${fruits.join(', ')}]`;
      appendLog("while: " + fruits.join(' -> '));
    });
  }
  if (btnDoWhile) {
    btnDoWhile.addEventListener('click', () => {
      fruitsResult.className = 'result-box success';
      fruitsResult.innerHTML = `<strong>Цикл do...while:</strong> [${fruits.join(', ')}]`;
      appendLog("do...while: " + fruits.join(' -> '));
    });
  }

  // 2. Numbs
  const numbsBadges = document.getElementById('numbs-badges');
  const btnFilterEven = document.getElementById('btn-filter-even');
  const numbsResult = document.getElementById('numbs-result');
  if (numbsBadges) {
    numbsBadges.innerHTML = Numbs.map(n => `<span class="array-item-badge ${n % 2 === 0 ? 'even' : ''}">${n}</span>`).join('');
  }
  if (btnFilterEven && numbsResult) {
    btnFilterEven.addEventListener('click', () => {
      const evens = getEvenNumbers();
      numbsResult.className = 'result-box success';
      numbsResult.textContent = `Парні числа з масиву: ${evens.join(', ')}`;
      appendLog("Парні числа: " + evens.join(', '));
    });
  }

  // 3. Names
  const btnRunNames = document.getElementById('btn-run-names');
  const namesResult = document.getElementById('names-result');
  if (btnRunNames && namesResult) {
    btnRunNames.addEventListener('click', () => {
      const res = executeNamesOperations();
      namesResult.className = 'result-box success';
      namesResult.textContent = `Підсумковий масив: [${res.map(x => `"${x}"`).join(', ')}]`;
      appendLog("names: " + JSON.stringify(res));
    });
  }

  // 4. sumInput інтерактивний
  let currentNumbers = [10, 25, 7];
  const inputNumber = document.getElementById('input-number');
  const btnAddNumber = document.getElementById('btn-add-number');
  const btnClearNumbers = document.getElementById('btn-clear-numbers');
  const btnSumPrompt = document.getElementById('btn-sum-prompt');
  const suminputResult = document.getElementById('suminput-result');

  function updateSumDisplay() {
    const sum = currentNumbers.reduce((acc, val) => acc + val, 0);
    suminputResult.className = 'result-box success';
    suminputResult.innerHTML = `Введені числа: [<strong>${currentNumbers.join(', ')}</strong>] | Сума: <strong>${sum}</strong>`;
  }

  updateSumDisplay();

  if (btnAddNumber && inputNumber) {
    btnAddNumber.addEventListener('click', () => {
      const val = inputNumber.value.trim();
      if (val !== "" && !isNaN(val)) {
        currentNumbers.push(+val);
        inputNumber.value = '';
        updateSumDisplay();
        appendLog(`Додано число: ${val}. Нова сума: ${currentNumbers.reduce((a, b) => a + b, 0)}`);
      }
    });
  }

  if (btnClearNumbers) {
    btnClearNumbers.addEventListener('click', () => {
      currentNumbers = [];
      updateSumDisplay();
      appendLog("Список чисел очищено.");
    });
  }

  if (btnSumPrompt) {
    btnSumPrompt.addEventListener('click', () => {
      const res = sumInputPrompt();
      alert("Сума введених чисел: " + res.sum);
      currentNumbers = res.numbers;
      updateSumDisplay();
      appendLog(`sumInput() через prompt: [${res.numbers.join(', ')}], сума = ${res.sum}`);
    });
  }

  // 5. Styles
  const btnRunStyles = document.getElementById('btn-run-styles');
  const stylesResultBox = document.getElementById('styles-result');
  if (btnRunStyles && stylesResultBox) {
    btnRunStyles.addEventListener('click', () => {
      const res = executeStylesOperations();
      stylesResultBox.className = 'result-box success';
      stylesResultBox.innerHTML = `Видалено: <code>"${res.firstStyle}"</code> | Фінальний масив: [${res.styles.map(s => `"${s}"`).join(', ')}]`;
      appendLog("styles: " + JSON.stringify(res.styles));
    });
  }
});
