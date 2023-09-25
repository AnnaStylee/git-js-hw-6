// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const counter = document.querySelector('#counter');
const valueSpan = document.querySelector('#value');
const incrementButton = counter.querySelector('[data-action="increment"]');
const decrementButton = counter.querySelector('[data-action="decrement"]');

let counterValue = 0;

function updateCounterText() {
    valueSpan.textContent = counterValue;
  }

incrementButton.addEventListener('click', function () {
    counterValue += 1;
    console.log(counterValue);
updateCounterText();
});

decrementButton.addEventListener('click', function() {
    counterValue -= 1;
    console.log(counterValue);
    updateCounterText();
});

updateCounterText();
