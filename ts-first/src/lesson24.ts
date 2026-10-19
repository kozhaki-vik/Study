// Завдання до заняття №24 - Базові типи в TypeScript

export {};

// 1. виправлення типів змінних
let example1: string = "Hello World!";
let example2: number = 42;
let example3: boolean = true;
let example4: symbol = Symbol();
let example5: bigint = 123n;

// 2. функція об'єднання рядків з типами параметрів
const concatTwoStrings = (a: string, b: string): string => {
  return [a, b].join(" ");
};

console.log(concatTwoStrings("Hello", "TypeScript"));

// 3. виправлення типів для функції додавання
const add = (a: number, b: number): number => {
  return a + b;
};

const result = add(10, 20);
console.log("Результат додавання:", result);
