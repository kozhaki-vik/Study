'use strict';

// 1. базові операції з об'єктом user
let user = {};
user.name = "Іван";
user.surname = "Сміт";
user.name = "Петро";
delete user.name;

console.log("Об'єкт user:", user);

// 2. перевірка на порожнечу isEmpty
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

let schedule = {};
console.log("isEmpty(schedule) спочатку:", isEmpty(schedule)); // true
schedule["8:30"] = "Вставай";
console.log("isEmpty(schedule) після додавання:", isEmpty(schedule)); // false

// 3. підсумовування зарплат
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

function calculateTotalSalaries(obj) {
  let sum = 0;
  for (let person in obj) {
    sum += obj[person];
  }
  return sum;
}

let sum = calculateTotalSalaries(salaries);
console.log("Сума всіх зарплат:", sum); // 390

// 4. множення числових властивостей на 2
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "Моє меню"
};

console.log("menu до множення:", Object.assign({}, menu));
multiplyNumeric(menu);
console.log("menu після множення:", menu);

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

  appendLog("user: " + JSON.stringify(user));
  appendLog("isEmpty(schedule) спочатку: true");
  appendLog("isEmpty(schedule) після додавання '8:30': false");
  appendLog("Сума всіх зарплат: " + sum);
  appendLog("menu після множення: " + JSON.stringify(menu));

  // 1. user
  const btnShowUser = document.getElementById('btn-show-user');
  const userResult = document.getElementById('user-result');
  if (btnShowUser && userResult) {
    btnShowUser.addEventListener('click', () => {
      userResult.className = 'result-box success';
      userResult.innerHTML = `Поточний стан <code>user</code>: <strong>${JSON.stringify(user)}</strong>`;
      appendLog("Стан user: " + JSON.stringify(user));
    });
  }

  // 2. isEmpty
  let testSchedule = {};
  const btnTestEmpty = document.getElementById('btn-test-empty');
  const btnAddTask = document.getElementById('btn-add-task');
  const btnClearSchedule = document.getElementById('btn-clear-schedule');
  const taskTime = document.getElementById('task-time');
  const taskDesc = document.getElementById('task-desc');
  const emptyResult = document.getElementById('empty-result');

  if (btnTestEmpty && emptyResult) {
    btnTestEmpty.addEventListener('click', () => {
      const empty = isEmpty(testSchedule);
      emptyResult.className = 'result-box ' + (empty ? 'success' : '');
      emptyResult.innerHTML = `isEmpty(schedule): <strong>${empty}</strong> | Об'єкт: ${JSON.stringify(testSchedule)}`;
      appendLog(`isEmpty перевірка: ${empty}`);
    });
  }

  if (btnAddTask && taskTime && taskDesc) {
    btnAddTask.addEventListener('click', () => {
      const t = taskTime.value.trim() || "8:30";
      const d = taskDesc.value.trim() || "Вставай";
      testSchedule[t] = d;
      const empty = isEmpty(testSchedule);
      emptyResult.className = 'result-box success';
      emptyResult.innerHTML = `Додано: <strong>["${t}"]: "${d}"</strong> | isEmpty(schedule): <strong>${empty}</strong>`;
      appendLog(`Додано в schedule: ["${t}"]: "${d}". isEmpty = ${empty}`);
    });
  }

  if (btnClearSchedule) {
    btnClearSchedule.addEventListener('click', () => {
      testSchedule = {};
      emptyResult.className = 'result-box';
      emptyResult.innerHTML = `Розклад очищено. isEmpty(schedule): <strong>${isEmpty(testSchedule)}</strong>`;
      appendLog("schedule очищено. isEmpty = true");
    });
  }

  // 3. Зарплати
  const salariesTableBody = document.querySelector('#salaries-table tbody');
  const salariesTotalCell = document.getElementById('salaries-total-cell');
  const salariesResult = document.getElementById('salaries-result');
  const newNameInput = document.getElementById('new-name');
  const newSalaryInput = document.getElementById('new-salary');
  const btnAddSalary = document.getElementById('btn-add-salary');

  function renderSalaries() {
    if (!salariesTableBody) return;
    salariesTableBody.innerHTML = '';
    for (let person in salaries) {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${person}</td><td>${salaries[person]} $</td>`;
      salariesTableBody.appendChild(tr);
    }
    const currentTotal = calculateTotalSalaries(salaries);
    if (salariesTotalCell) salariesTotalCell.textContent = `${currentTotal} $`;
    if (salariesResult) {
      salariesResult.textContent = `Сума всіх зарплат: ${currentTotal} $`;
    }
  }

  renderSalaries();

  if (btnAddSalary && newNameInput && newSalaryInput) {
    btnAddSalary.addEventListener('click', () => {
      const name = newNameInput.value.trim();
      const salary = +newSalaryInput.value;
      if (name && !isNaN(salary) && salary > 0) {
        salaries[name] = salary;
        newNameInput.value = '';
        newSalaryInput.value = '';
        renderSalaries();
        appendLog(`Додано зарплату: ${name} = ${salary} $. Нова сума: ${calculateTotalSalaries(salaries)} $`);
      }
    });
  }

  // 4. Меню
  let currentMenu = {
    width: 200,
    height: 300,
    title: "Моє меню"
  };

  const menuBefore = document.getElementById('menu-before');
  const menuAfter = document.getElementById('menu-after');
  const btnRunMultiply = document.getElementById('btn-run-multiply');
  const btnResetMenu = document.getElementById('btn-reset-menu');
  const menuResult = document.getElementById('menu-result');

  function updateMenuDisplay() {
    if (menuBefore) menuBefore.textContent = JSON.stringify({ width: 200, height: 300, title: "Моє меню" }, null, 2);
    if (menuAfter) menuAfter.textContent = JSON.stringify(currentMenu, null, 2);
  }

  if (btnRunMultiply) {
    btnRunMultiply.addEventListener('click', () => {
      multiplyNumeric(currentMenu);
      updateMenuDisplay();
      if (menuResult) {
        menuResult.className = 'result-box success';
        menuResult.textContent = 'Числові поля width та height успішно помножено на 2!';
      }
      appendLog("multiplyNumeric виконано: " + JSON.stringify(currentMenu));
    });
  }

  if (btnResetMenu) {
    btnResetMenu.addEventListener('click', () => {
      currentMenu = { width: 200, height: 300, title: "Моє меню" };
      updateMenuDisplay();
      if (menuResult) {
        menuResult.className = 'result-box';
        menuResult.textContent = 'Меню повернуто до початкових значень.';
      }
      appendLog("Меню скинуто до початкових значень.");
    });
  }
});
