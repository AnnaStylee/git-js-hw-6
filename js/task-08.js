// Напиши скрипт управління формою логіна.
// 1.Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// 2.Під час відправлення форми сторінка не повинна перезавантажуватися.
// 3.Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// 4.Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// 5.Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.


const loginForm = document.querySelector('.login-form');
const emailInput = loginForm.querySelector('input[name="email"]');
const passwordInput = loginForm.querySelector('input[name="password"]');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

  if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
    alert('Всі поля повинні бути заповнені');
    return;
    }
    
      const formData = {
    email: emailInput.value,
    password: passwordInput.value,
  };

     console.log(formData);

  loginForm.reset();
    });