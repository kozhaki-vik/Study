'use strict';

// 1. базові операції з об'єктом
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

let sum = 0;
for (let person in salaries) {
  sum += salaries[person];
}
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

console.log("menu до множення:", menu);
multiplyNumeric(menu);
console.log("menu після множення:", menu);
