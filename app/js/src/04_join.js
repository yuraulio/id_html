// При кліку по кнопці Подати заявку прокручуємо сторінку
// до заголовка форми і ставимо фокус у перший input
document.querySelector('html body .header header nav ul li button').onclick = () => {
  document.getElementById('c_reg').scrollIntoView();
  document.getElementById('name').focus();
}
