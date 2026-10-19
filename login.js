'use strict';

// робота з модалкою входу
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('#login-modal');
  const openBtn = document.querySelector('#open-modal-btn');
  const closeBtn = document.querySelector('#close-modal-btn');
  const cancelBtn = document.querySelector('#cancel-btn');
  const loginForm = document.querySelector('#login-form');
  const authStatus = document.querySelector('#auth-status');
  const logoutBtn = document.querySelector('#logout-btn');

  // перевірка чи користувач вже авторизований
  function checkAuth() {
    const user = localStorage.getItem('currentUser');
    if (user) {
      authStatus.textContent = `Ви увійшли як: ${user}`;
      openBtn.style.display = 'none';
      logoutBtn.style.display = 'inline-block';
    } else {
      authStatus.textContent = "Ви не авторизовані на сайті.";
      openBtn.style.display = 'inline-block';
      logoutBtn.style.display = 'none';
    }
  }

  // відкрити модалку
  function openModal() {
    modal.classList.add('active');
  }

  // закрити модалку
  function closeModal() {
    modal.classList.remove('active');
    loginForm.reset();
  }

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  cancelBtn.addEventListener('click', closeModal);

  // закриття при кліку поза вікном
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // відправка форми
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const loginInput = document.querySelector('#user-login').value.trim();
    const rememberMe = document.querySelector('#remember-me').checked;

    if (loginInput) {
      if (rememberMe) {
        localStorage.setItem('currentUser', loginInput);
      } else {
        sessionStorage.setItem('currentUser', loginInput);
        localStorage.setItem('currentUser', loginInput);
      }
      closeModal();
      checkAuth();
    }
  });

  // вихід
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    sessionStorage.removeItem('currentUser');
    checkAuth();
  });

  // перевірка при завантаженні сторінки
  checkAuth();
});
