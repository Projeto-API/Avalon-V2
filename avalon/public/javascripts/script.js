const qtdProduto = document.getElementById("quantidadeValue");

function aumentarQtd(op) {
  if (op == 'up') {
    var num = parseInt(qtdProduto.value);
    qtdProduto.value = num + 1;
  }
}

function diminuirQtd(op) {
  if (op == 'down') {
    var num = parseInt(qtdProduto.value);
    qtdProduto.value = num - 1;
  }
}

// -----ARROWS CARROSEL -------

const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

// controls.forEach((control) => {
//   control.addEventListener("click", (e) => {
//     isLeft = e.target.classList.contains("arrow-left");

//     if (isLeft) {
//       currentItem -= 1;
//     } else {
//       currentItem += 1;
//     }

//     if (currentItem >= maxItems) {
//       currentItem = 0;
//     }

//     if (currentItem < 0) {
//       currentItem = maxItems - 1;
//     }

//     items.forEach((item) => item.classList.remove("current-item"));

//     items[currentItem].scrollIntoView({
//       behavior: "smooth",
     
//     });

//     items[currentItem].classList.add("current-item");
//   });
// });

// let carousel = document.querySelector('.gallery')
// let slides = document.querySelectorAll ('.item')
// let prevBtn = document.getElementById ('prev')
// let nextBtn = document.getElementById ('next')

// let counter =1
// let width = slides[1].clientWidth

// carousel.style.transform = 'translateX(' + -width*counter + 'px)'

// nextBtn.onclick = () => {
//      counter++
//      carousel.style.transform = 'translateX(' + -width*counter + 'px)'
// }

// prevBtn.onclick = () => {
//   counter--
//   carousel.style.transform = 'translateX(' + -width*counter + 'rem)'
// }

let prevBtn = document.getElementById ('prev')
let nextBtn = document.getElementById ('next')

const carousel = document.querySelector('.carrousel');
const carouselWidth = document.querySelectorAll('gallery').offsetWidth;

nextBtn.addEventListener('click', () => {
  carousel.style.transform = 'translateX(-${carouselWith}px)'


})