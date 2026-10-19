'use strict';

// завантаження постів через fetch з dummyjson.com
const postsContainer = document.querySelector('#posts-container');

fetch('https://dummyjson.com/posts')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    postsContainer.innerHTML = ''; // очищаємо напис завантаження

    // створюємо елементи article для кожного поста
    data.posts.forEach(post => {
      const article = document.createElement('article');
      article.className = 'post';

      const title = document.createElement('h2');
      title.textContent = post.title;

      const body = document.createElement('p');
      body.textContent = post.body;

      article.appendChild(title);
      article.appendChild(body);

      postsContainer.appendChild(article);
    });
  })
  .catch(error => {
    console.error('Помилка завантаження постів:', error);
    postsContainer.innerHTML = '<p style="color: red;">Не вдалося завантажити дописи. Спробуйте пізніше.</p>';
  });
