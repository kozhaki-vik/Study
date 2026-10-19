'use strict';

/**
 * Завантаження постів через Fetch API з https://dummyjson.com/posts
 * Створює картки article.post із заголовком h2 та текстом p
 * Застосовує каскадну анімацію для плавної появи
 */
const postsContainer = document.querySelector('#posts-container');

function loadPosts() {
    fetch('https://dummyjson.com/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Помилка HTTP: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Очищаємо стан завантаження
            postsContainer.innerHTML = '';

            if (!data.posts || data.posts.length === 0) {
                postsContainer.innerHTML = '<p class="widget-text">Дописи відсутні.</p>';
                return;
            }

            // Створюємо елементи article.post для кожного поста
            data.posts.forEach((post, index) => {
                const article = document.createElement('article');
                article.className = 'post';

                // Плавна поява з каскадною затримкою
                article.style.animationDelay = `${Math.min(index * 0.04, 0.8)}s`;

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
            console.error('Помилка під час завантаження постів:', error);
            postsContainer.innerHTML = `
                <div style="background-color: #fee2e2; border: 1px solid #f87171; color: #991b1b; padding: 20px; border-radius: 8px; text-align: center;">
                    <p style="font-weight: 600; margin-bottom: 8px;">Не вдалося завантажити дописи.</p>
                    <p style="font-size: 0.9rem; margin-bottom: 12px;">Перевірте підключення до мережі або спробуйте пізніше.</p>
                    <button id="retry-btn" style="background-color: #ef4444; color: white; border: none; padding: 8px 18px; border-radius: 6px; cursor: pointer; font-weight: 600;">Спробувати знову</button>
                </div>
            `;
            const retryBtn = document.querySelector('#retry-btn');
            if (retryBtn) {
                retryBtn.addEventListener('click', () => {
                    postsContainer.innerHTML = `
                        <div class="loading-state">
                            <div class="spinner"></div>
                            <p>Завантаження дописів із сервера...</p>
                        </div>
                    `;
                    loadPosts();
                });
            }
        });
}

// Запуск завантаження після завантаження DOM
document.addEventListener('DOMContentLoaded', loadPosts);
