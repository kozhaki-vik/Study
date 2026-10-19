"use strict";
// Завдання до заняття №25 - Необов'язкові параметри та функції
Object.defineProperty(exports, "__esModule", { value: true });
// 1. необов'язковий параметр last?
const concatName = (first, last) => {
    if (!last) {
        return first;
    }
    return `${first} ${last}`;
};
console.log(concatName("John", "Doe")); // John Doe
console.log(concatName("John")); // John
// 2. параметри за замовчуванням або необов'язкові
const concatTwoStrings = (a, b) => {
    return [a, b || ""].filter(Boolean).join(" ");
};
// 3. правильні типи для функції додавання
const addNumbers = (a, b) => {
    return a + b;
};
const users = [
    { id: "1", name: "Ivan" },
    { id: "2", name: "Petro" }
];
// функція modifyUser з типом (user: User) => User
const modifyUser = (userList, id, makeChange) => {
    return userList.map((user) => {
        if (user.id === id) {
            return makeChange(user);
        }
        return user;
    });
};
const updatedUsers = modifyUser(users, "1", (user) => {
    return { ...user, name: "Dmytro" };
});
console.log("Оновлені юзери:", updatedUsers);
//# sourceMappingURL=lesson25.js.map