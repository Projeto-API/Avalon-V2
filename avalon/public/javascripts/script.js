const qtdLivro = document.getElementById("quantidadeValue");

function aumentarQtd(op) {
  if (op == 'up') {
    var num = parseInt(qtdLivro.value);
    qtdLivro.value = num + 1;
  }
}

function diminuirQtd(op) {
  if (op == 'down') {
    var num = parseInt(qtdLivro.value);
    qtdLivro.value = num - 1;
  }
}

// Modal



// -----ARROWS CARROSEL -------

const gap = .1;

const carousel = document.getElementById("carrousel"),
  content = document.getElementById("gallery"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));


// const gap = .1;

// const carousel = document.getElementById("carrousel"),
//   content = document.getElementById("gallery"),
//   next = document.getElementById("next"),
//   prev = document.getElementById("prev");

// next.addEventListener("click", e => {
//   carousel.scrollBy(width + gap, 0);
//   if (carousel.scrollWidth !== 0) {
//     prev.style.display = "flex";
//   }
//   if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
//     next.style.display = "none";
//   }
// });
// prev.addEventListener("click", e => {
//   carousel.scrollBy(-(width + gap), 0);
//   if (carousel.scrollLeft - width - gap <= 0) {
//     prev.style.display = "none";
//   }
//   if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
//     next.style.display = "flex";
//   }
// });

// let width = carousel.offsetWidth;
// window.addEventListener("resize", e => (width = carousel.offsetWidth));