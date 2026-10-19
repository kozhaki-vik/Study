"use strict";
// Завдання до заняття №27 - Інтерфейси в TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
// створюємо об'єкт користувача
const myUser = {
    id: 1,
    name: "Дмитро",
    email: "dima.vikon@gmail.com",
    phoneNumber: "+380501234567",
    createdAt: new Date()
};
console.log("Користувач:", myUser);
// реалізація функції filterLength
const filterLength = (array, criterion) => {
    const minLength = Number(criterion);
    return array.filter((str) => str.length > minLength);
};
// перевірка роботи фільтрації
const words = ["яблуко", "кіт", "програмування", "дім", "frontend", "js"];
const filteredWords = filterLength(words, "4");
console.log("Слова довші за 4 символи:", filteredWords);
// виведе: ["яблуко", "програмування", "frontend"]
