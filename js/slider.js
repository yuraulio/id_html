function slideIt() {
  for (let item of document.getElementsByClassName('slides')) {
    item.classList.toggle('transparent');
    }
}

for (let item of document.getElementsByClassName('slider_buttons')) {
  item.onmousedown = ()=>{
    event.target.style.opacity = 0.4;
    slideIt();
    clearInterval(timer);
    timer = setInterval(slideIt, 4000);
  }
  item.onmouseup = ()=>{
    event.target.style.opacity = 1;
  }
}

let timer = setInterval(slideIt, 4000);
