// Завдання до заняття №25 - Необов'язкові параметри та функції

export {};

// 1. необов'язковий параметр last?
const concatName = (first: string, last?: string): string => {
  if (!last) {
    return first;
  }
  return `${first} ${last}`;
};

console.log(concatName("John", "Doe")); // John Doe
console.log(concatName("John"));        // John

// 2. параметри за замовчуванням або необов'язкові
const concatTwoStrings = (a: string, b?: string): string => {
  return [a, b || ""].filter(Boolean).join(" ");
};

// 3. правильні типи для функції додавання
const addNumbers = (a: number, b: number): number => {
  return a + b;
};

// 4. тип для функції-колбека makeChange
interface User {
  id: string;
  name: string;
}

const users: User[] = [
  { id: "1", name: "Ivan" },
  { id: "2", name: "Petro" }
];

// функція modifyUser з типом (user: User) => User
const modifyUser = (
  userList: User[],
  id: string,
  makeChange: (user: User) => User
): User[] => {
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
