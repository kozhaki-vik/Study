"use strict";
// Завдання до заняття №24 - Базові типи в TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
// 1. виправлення типів змінних
let example1 = "Hello World!";
let example2 = 42;
let example3 = true;
let example4 = Symbol();
let example5 = 123n;
// 2. функція об'єднання рядків з типами параметрів
const concatTwoStrings = (a, b) => {
    return [a, b].join(" ");
};
console.log(concatTwoStrings("Hello", "TypeScript"));
// 3. виправлення типів для функції додавання
const add = (a, b) => {
    return a + b;
};
const result = add(10, 20);
console.log("Результат додавання:", result);
