function show() {
  fbBg[0].style.display = 'block';
  setTimeout(()=>{
    fbBg[0].classList.remove('transparent');
  }, 30);
}

function hide() {
  fbBg[0].classList.add('transparent');
  setTimeout(()=>{
    fbBg[0].style.display = 'none';
  }, 1020);
}

let fbBg = document.getElementsByClassName('feedback_background');

document.getElementsByClassName('feedback_link')[0].onclick = ()=>{show()};
document.getElementsByClassName('feedback_close')[0].onclick = ()=>{hide()};
