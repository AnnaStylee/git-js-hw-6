// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];


// Знайдемо елемент ul#ingredients
const ingredientsList = document.querySelector('#ingredients');

// Створимо фрагмент
const fragment = document.createDocumentFragment();

ingredients.forEach((ingredient) => {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  listItem.classList.add('item');
  fragment.appendChild(listItem); // Додаємо елемент <li> до фрагменту
});

// Вставляємо всі елементи з фрагменту в ul#ingredients
ingredientsList.appendChild(fragment);