let menu = document.querySelector('html body .header header nav');

document.getElementById('menu_button').onclick = () => {
  if (menu.classList.contains('open_menu')) {
    menu.classList.remove('open_menu');
  } else {
    menu.classList.add('open_menu');
  }
}
