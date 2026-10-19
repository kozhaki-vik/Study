'use strict';

// 1. функція вищого порядку calculate
function sum(n1, n2) {
  return n1 + n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function calculate(operation, initialValue, numbers) {
  let result = initialValue;
  for (const number of numbers) {
    result = operation(result, number);
  }
  return result;
}

console.log("calculate sum:", calculate(sum, 0, [1, 2, 4])); // => 7
console.log("calculate multiply:", calculate(multiply, 1, [1, 2, 4])); // => 8

// 2. метод map для student_names
let student_names = ["Wick", "Malcolm", "Smith"];

student_names.map((name, index, array) => {
  console.log(`name: ${name} | index: ${index} | array: [ "${array.join('", "')}" ]`);
});

// 3. розрахунок відсотка для students_information
let students_information = [
  { "name": "Wick", "degree": 375 },
  { "name": "Malcolm", "degree": 405 },
  { "name": "Smith", "degree": 453 }
];

const maxDegree = 600;

let results = students_information.map(student => {
  let percentage = (student.degree / maxDegree) * 100;
  return {
    name: student.name,
    degree: student.degree,
    percentage: parseFloat(percentage.toFixed(1))
  };
});

results.forEach(item => {
  console.log(item);
});
