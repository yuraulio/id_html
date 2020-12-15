let fbBg = document.getElementsByClassName('feedback_background');

document.getElementsByClassName('feedback_link')[0].onclick = () => {
  fbBg[0].style.display = 'block';
  setTimeout(() => {fbBg[0].classList.remove('transparent')}, 50);
}

document.getElementsByClassName('feedback_close')[0].onclick = () => {
  fbBg[0].classList.add('transparent');
  setTimeout(() => {fbBg[0].style.display = 'none'}, 1050);
}

for (let input of document.getElementsByClassName('feedback_form')[0].querySelectorAll("[required]")) {
  input.onfocus = function() {
    if (input.validity.valid) {
      input.classList.remove('error');
      this.placeholder = '';
    } else {
      input.classList.add('error');
      this.placeholder = 'Поле обязательно для заполнения';
    }

  };
  input.onblur = function() {
    if (input.validity.valid) {
      input.classList.remove('error');
      this.placeholder = '';
    } else {
      this.placeholder = '';
    }
  };
  input.oninput = function() {
    if (!input.validity.valid) {
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  }
}

document.getElementsByClassName('feedback_form')[0].onsubmit = function (event) {
  event.preventDefault();
  for (let input of document.getElementsByClassName('feedback_form')[0].querySelectorAll("[required]")) {
    if (!input.validity.valid) {
      input.classList.add('error');
      input.value = '';
      input.placeholder = input.validationMessage;
    }
  }
}
