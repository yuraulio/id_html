let style = window.getComputedStyle(document.querySelector('html body .wrap_header header nav ul'));

function myClick() {
  console.log('hello');
}

let el = document.querySelector('html body .wrap_header header > button');
el.onclick = myClick;

// document.getElementById('clickme').onclick = myClick;

// console.log(document.querySelector('html body .wrap_header header nav button').tagName);

//
// document.querySelector('html body .wrap_header header button').addEventListener("click", myClick());
console.log(style.getPropertyValue('display'));
