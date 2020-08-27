let menu = document.querySelector('html body .header header nav');
// Вибираємо nav з головним меню

// На клік по пункту головного меню вішаємо подію,
// щоб при кліку на пункт меню у мобільному режимі, меню закривалось
for (let menu_item of document.querySelectorAll('html body .header header nav ul li')) {
  menu_item.onclick = () => {
    if (menu.classList.contains('open_menu')) {
      menu.classList.remove('open_menu');
    }
  }
}

// При кліку на кнопку меню в мобільному режимі
// закриваємо-відкриваємо меню
document.getElementById('menu_button').onclick = () => {
  if (menu.classList.contains('open_menu')) {
    menu.classList.remove('open_menu');
  } else {
    menu.classList.add('open_menu');
  }
}

// Якщо з відкритим в мобільному режимі меню перейшли
// у режим десктоп, то закриваємо мобільне меню
$(window).resize(function() {
  if ($(document).width() > 685) {
    if (menu.classList.contains('open_menu')) {
      menu.classList.remove('open_menu');
    }
  }
})
