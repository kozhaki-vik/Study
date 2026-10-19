'use strict';

const alertBox = document.querySelector('#alert');

// 1. кнопка btn-primary через onclick
const btnPrimary = document.querySelector('.btn-primary');
if (btnPrimary && alertBox) {
  btnPrimary.onclick = function() {
    alertBox.className = 'alert alert-primary';
    alertBox.textContent = "A simple primary alert—check it out!";
  };
}

// 2. кнопка btn-secondary через addEventListener('click')
const btnSecondary = document.querySelector('.btn-secondary');
if (btnSecondary && alertBox) {
  btnSecondary.addEventListener('click', function() {
    alertBox.className = 'alert alert-secondary';
    alertBox.textContent = "A simple secondary alert—check it out!";
  });
}

// 3. кнопка btn-success на mouseover та mouseout
const btnSuccess = document.querySelector('.btn-success');
if (btnSuccess && alertBox) {
  btnSuccess.addEventListener('mouseover', function() {
    alertBox.classList.add('alert-success');
    alertBox.textContent = "A simple success alert—check it out!";
  });

  btnSuccess.addEventListener('mouseout', function() {
    alertBox.classList.remove('alert-success');
    alertBox.textContent = "";
  });
}

// 4. кнопка btn-danger на focus та focusout
const btnDanger = document.querySelector('.btn-danger');
if (btnDanger && alertBox) {
  btnDanger.addEventListener('focus', function() {
    alertBox.classList.add('alert-danger');
    alertBox.textContent = "A simple danger alert—check it out!";
  });

  btnDanger.addEventListener('focusout', function() {
    alertBox.classList.remove('alert-danger');
    alertBox.textContent = "";
  });
}

// 5. кнопки dark/light та перемикання теми
const btnDark = document.querySelector('.btn-dark');
const btnLight = document.querySelector('.btn-light');

function toggleMode() {
  const isDark = document.body.classList.toggle('dark-mode');
  if (isDark) {
    btnDark.classList.add('hide');
    btnLight.classList.remove('hide');
  } else {
    btnDark.classList.remove('hide');
    btnLight.classList.add('hide');
  }
}

if (btnDark) btnDark.addEventListener('click', toggleMode);
if (btnLight) btnLight.addEventListener('click', toggleMode);

// 6. кнопка btn-info на keypress Enter
const btnInfo = document.querySelector('.btn-info');
if (btnInfo && alertBox) {
  btnInfo.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      alertBox.className = 'alert alert-info';
      alertBox.textContent = "A simple info alert—check it out!";
    }
  });
}

// 7. вивід заголовків всіх карток
const cards = document.querySelectorAll('.card');
console.log("--- Заголовки карток ---");
for (let i = 0; i < cards.length; i++) {
  const title = cards[i].querySelector('.card-title');
  if (title) {
    console.log(title.textContent);
  }
}

// 8. додавання кліку на кнопки Add to cart кожної картки
for (let i = 0; i < cards.length; i++) {
  const card = cards[i];
  const cartBtn = card.querySelector('.add-to-cart');
  const title = card.querySelector('.card-title');

  if (cartBtn && title) {
    cartBtn.addEventListener('click', function(e) {
      e.preventDefault();
      console.log("Додано товар:", title.textContent);
    });
  }
}
