'use strict';

// 1. checkAge в один рядок
// варіант з ?
function checkAgeQuestion(age) {
  return (age > 18) ? true : confirm('Батьки дозволили?');
}

// варіант з ||
function checkAgeOr(age) {
  return (age > 18) || confirm('Батьки дозволили?');
}

// 2. пошук мінімуму
// варіант з if
function minIf(a, b) {
  if (a < b) {
    return a;
  }
  return b;
}

// варіант з ?
function minTernary(a, b) {
  return a < b ? a : b;
}

// 3. піднесення до степеня pow(x, n)
function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

// 4. стрілкові функції замість виразів
const ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};

// Запуск та логування тестів
function runAllTests(logFn = console.log) {
  logFn("--- Тести lesson13.js ---");
  logFn("min(2, 5) = " + minTernary(2, 5));
  logFn("min(3, -1) = " + minTernary(3, -1));
  logFn("min(1, 1) = " + minTernary(1, 1));
  logFn("pow(3, 2) = " + pow(3, 2));
  logFn("pow(3, 3) = " + pow(3, 3));
}

// Виконуємо первинне логування в стандартну консоль розробника
runAllTests();

// Інтерактивні елементи на сторінці
document.addEventListener('DOMContentLoaded', () => {
  const consoleOutput = document.getElementById('console-output');

  function appendToPageConsole(text) {
    if (consoleOutput) {
      const line = document.createElement('div');
      line.textContent = `> ${text}`;
      consoleOutput.appendChild(line);
      consoleOutput.scrollTop = consoleOutput.scrollHeight;
    }
    console.log(text);
  }

  // Первинне заповнення панелі консолі на сторінці
  appendToPageConsole("min(2, 5) = " + minTernary(2, 5));
  appendToPageConsole("min(3, -1) = " + minTernary(3, -1));
  appendToPageConsole("min(1, 1) = " + minTernary(1, 1));
  appendToPageConsole("pow(3, 2) = " + pow(3, 2));
  appendToPageConsole("pow(3, 3) = " + pow(3, 3));

  // 1. checkAge
  const ageInput = document.getElementById('age-input');
  const btnAgeQ = document.getElementById('btn-check-age-q');
  const btnAgeOr = document.getElementById('btn-check-age-or');
  const ageResult = document.getElementById('age-result');

  function handleAge(method) {
    const age = +ageInput.value;
    const allowed = method === 'q' ? checkAgeQuestion(age) : checkAgeOr(age);
    if (allowed) {
      ageResult.className = 'result-box success';
      ageResult.textContent = `Доступ дозволено! (Вік: ${age}, метод: ${method === 'q' ? '?' : '||'})`;
    } else {
      ageResult.className = 'result-box danger';
      ageResult.textContent = `Доступ відхилено або скасовано. (Вік: ${age})`;
    }
    appendToPageConsole(`checkAge (${method === 'q' ? '?' : '||'}) для віку ${age}: ${allowed ? 'дозволено' : 'відхилено'}`);
  }

  if (btnAgeQ) btnAgeQ.addEventListener('click', () => handleAge('q'));
  if (btnAgeOr) btnAgeOr.addEventListener('click', () => handleAge('or'));

  // 2. min(a, b)
  const minA = document.getElementById('min-a');
  const minB = document.getElementById('min-b');
  const btnMin = document.getElementById('btn-min');
  const minResult = document.getElementById('min-result');

  if (btnMin && minResult) {
    btnMin.addEventListener('click', () => {
      const a = +minA.value;
      const b = +minB.value;
      const res = minTernary(a, b);
      minResult.className = 'result-box success';
      minResult.textContent = `Мінімум: min(${a}, ${b}) = ${res}`;
      appendToPageConsole(`min(${a}, ${b}) = ${res}`);
    });
  }

  // 3. pow(x, n)
  const powX = document.getElementById('pow-x');
  const powN = document.getElementById('pow-n');
  const btnPow = document.getElementById('btn-pow');
  const btnPowPrompt = document.getElementById('btn-pow-prompt');
  const powResult = document.getElementById('pow-result');

  if (btnPow && powResult) {
    btnPow.addEventListener('click', () => {
      const x = +powX.value;
      const n = +powN.value;
      if (n < 1 || !Number.isInteger(n)) {
        powResult.className = 'result-box danger';
        powResult.textContent = 'Помилка: степінь n має бути натуральним числом більше нуля!';
        return;
      }
      const res = pow(x, n);
      powResult.className = 'result-box success';
      powResult.textContent = `Результат: ${x} ^ ${n} = ${res}`;
      appendToPageConsole(`pow(${x}, ${n}) = ${res}`);
    });
  }

  if (btnPowPrompt) {
    btnPowPrompt.addEventListener('click', () => {
      let num = +prompt("Введіть число x для pow:", 3);
      let power = +prompt("Введіть степінь n для pow:", 2);

      if (power < 1 || !Number.isInteger(power)) {
        alert("Степінь має бути натуральним числом більше нуля");
      } else {
        const res = pow(num, power);
        alert(`Результат ${num} ^ ${power} = ${res}`);
        appendToPageConsole(`pow(${num}, ${power}) [через prompt] = ${res}`);
      }
    });
  }

  // 4. ask()
  const btnAsk = document.getElementById('btn-ask');
  const askResult = document.getElementById('ask-result');

  if (btnAsk && askResult) {
    btnAsk.addEventListener('click', () => {
      ask(
        "Ви згодні?",
        () => {
          askResult.className = 'result-box success';
          askResult.textContent = 'Ви погодились. (Дія підтверджена через стрілкову функцію)';
          appendToPageConsole("ask: користувач погодився.");
        },
        () => {
          askResult.className = 'result-box danger';
          askResult.textContent = 'Ви скасували виконання. (Відхилено через стрілкову функцію)';
          appendToPageConsole("ask: користувач скасував виконання.");
        }
      );
    });
  }

  // Кнопка очищення/перезапуску тестів
  const btnRunAllTests = document.getElementById('btn-run-all-tests');
  if (btnRunAllTests && consoleOutput) {
    btnRunAllTests.addEventListener('click', () => {
      consoleOutput.innerHTML = '';
      runAllTests(appendToPageConsole);
    });
  }
});
