'use strict';

// 1. перший абзац: золотий фон
const p1 = document.querySelector('#p1');
if (p1) {
  p1.style.backgroundColor = "#fef08a";
  p1.style.color = "#713f12";
}

// 2. другий абзац: стилі напряму
const p2 = document.querySelector('#p2');
if (p2) {
  p2.style.backgroundColor = "#dbeafe";
  p2.style.color = "#1e40af";
  p2.style.fontSize = "1.15rem";
}

// 3. третій абзац: додаємо клас third
const p3 = document.querySelector('#p3');
if (p3) {
  p3.classList.add('third');
}

// 4. четвертий абзац: класи fourth та border
const p4 = document.querySelector('#p4');
if (p4) {
  p4.classList.add('fourth', 'border');
}

// отримуємо всі кнопки
const buttons = document.querySelectorAll('button');

// 5. перша кнопка: колір і фон
if (buttons[0]) {
  buttons[0].style.backgroundColor = "#e0e7ff";
  buttons[0].style.color = "#4338ca";
  buttons[0].style.borderColor = "#a5b4fc";
}

// 6. друга кнопка: ховає абзац p1
if (buttons[1]) {
  buttons[1].addEventListener('click', () => {
    if (p1) p1.style.display = 'none';
  });
}

// 7. третя кнопка: показує абзац p1
if (buttons[2]) {
  buttons[2].addEventListener('click', () => {
    if (p1) p1.style.display = 'block';
  });
}

// 8. четверта кнопка: перемикає світлу/темну тему
if (buttons[3]) {
  buttons[3].addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
  });
}
