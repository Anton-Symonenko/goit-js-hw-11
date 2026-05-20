import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';










iziToast.error({
  title: 'Error',
  message: 'Sorry, there are no images matching your search query. Please try again!',
});



// Проєкт: GoIT JS HW-11 (Pixabay API)

// Готово:
// - Налаштований axios
// - Створена функція getImagesByQuery(query)
// - Підключений iziToast
// - Зроблена форма пошуку
// - Написані стилі для форми

// Наступний крок:
// 1. Створити render-functions.js
// 2. Отримувати data.hits після submit
// 3. Рендерити галерею карток
// 4. Показувати iziToast.error якщо hits.length === 0
// 5. Додати SimpleLightbox