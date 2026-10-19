// Завдання до заняття №27 - Інтерфейси в TypeScript

export {};

// Завдання 1: Інтерфейс User
interface User {
  id: number;
  name: string;
  email: string;
  phoneNumber?: string; // необов'язкове поле
  readonly createdAt: Date | string; // поле тільки для читання
}

// створюємо об'єкт користувача
const myUser: User = {
  id: 1,
  name: "Дмитро",
  email: "dima.vikon@gmail.com",
  phoneNumber: "+380501234567",
  createdAt: new Date()
};

console.log("Користувач:", myUser);

// спроба змінити readonly поле (якщо розкоментувати - помилка компіляції)
// myUser.createdAt = new Date(); // Cannot assign to 'createdAt' because it is a read-only property.


// Завдання 2: Інтерфейс для функції фільтрації рядків
interface StringFilterFn {
  (array: string[], criterion: string): string[];
}

// реалізація функції filterLength
const filterLength: StringFilterFn = (array: string[], criterion: string): string[] => {
  const minLength = Number(criterion);
  return array.filter((str) => str.length > minLength);
};

// перевірка роботи фільтрації
const words = ["яблуко", "кіт", "програмування", "дім", "frontend", "js"];
const filteredWords = filterLength(words, "4");

console.log("Слова довші за 4 символи:", filteredWords);
// виведе: ["яблуко", "програмування", "frontend"]
