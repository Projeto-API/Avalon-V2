// const qtdLivro = document.getElementById("quantidadeValue");

// function aumentarQtd(op) {
//   if (op == 'up') {
//     var num = parseInt(qtdLivro.value);
//     qtdLivro.value = num + 1;
//   }
// }

// function diminuirQtd(op) {
//   if (op == 'down') {
//     var num = parseInt(qtdLivro.value);
//     qtdLivro.value = num - 1;
//   }
// }

// Modal



// -----ARROWS CARROSEL -------

const gap = .1;

const carousel = document.getElementById("carrousel"),
  content = document.getElementById("gallery"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");
  console.log(carousel)

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


// function redirectFunction() {
//   document.querySelector(".item").location.href("/sinopse/1");
// }

const carousel2 = document.getElementById("carrousel2"),
  content2 = document.getElementById("gallery2"),
  next2 = document.getElementById("next2"),
  prev2 = document.getElementById("prev2");
  console.log(carousel2)

next2.addEventListener("click", e => {
  carousel2.scrollBy(width2 + gap, 0);
  if (carousel2.scrollWidth !== 0) {
    prev2.style.display = "flex";
  }
  if (content.scrollWidth - width2 - gap <= carousel2.scrollLeft + width2) {
    next2.style.display = "none";
  }
});
prev2.addEventListener("click", e => {
  carousel2.scrollBy(-(width2 + gap), 0);
  if (carousel2.scrollLeft - width2 - gap <= 0) {
    prev2.style.display = "none";
  }
  if (!content.scrollWidth - width2 - gap <= carousel2.scrollLeft + width2) {
    nex2t.style.display = "flex";
  }
});

let width2 = carousel2.offsetWidth;
window.addEventListener("resize", e => (width2 = carousel2.offsetWidth));
