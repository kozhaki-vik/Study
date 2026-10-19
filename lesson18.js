'use strict';

// клас калькулятора
class Calculator {
  constructor() {
    this.result = 0; // початкове значення
  }

  // додавання
  add(a, b) {
    if (b === undefined) {
      this.result = this.result + a;
    } else {
      this.result = a + b;
    }
    return this.result;
  }

  // віднімання
  subtract(a, b) {
    if (b === undefined) {
      this.result = this.result - a;
    } else {
      this.result = a - b;
    }
    return this.result;
  }

  // множення
  multiply(a, b) {
    if (b === undefined) {
      this.result = this.result * a;
    } else {
      this.result = a * b;
    }
    return this.result;
  }

  // ділення
  divide(a, b) {
    if (b === undefined) {
      if (a === 0) {
        console.error("Помилка: ділення на нуль!");
        return this.result;
      }
      this.result = this.result / a;
    } else {
      if (b === 0) {
        console.error("Помилка: ділення на нуль!");
        return this.result;
      }
      this.result = a / b;
    }
    return this.result;
  }

  // вивід результату
  displayResult() {
    console.log("Поточний результат:", this.result);
  }
}

// перевірка роботи
const calc = new Calculator();
calc.displayResult(); // 0

calc.add(10, 5); // 15
calc.displayResult();

calc.add(5); // 15 + 5 = 20
calc.displayResult();

calc.subtract(8); // 20 - 8 = 12
calc.displayResult();

calc.multiply(3); // 12 * 3 = 36
calc.displayResult();

calc.divide(6); // 36 / 6 = 6
calc.displayResult();
