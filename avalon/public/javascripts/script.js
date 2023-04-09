var item = document.querySelectorAll(".item img");

item.forEach(function (el) {
  el.addEventListener("click", function (event) {
    const id = event.target.id;

    window.location.href = "/produto/sinopse/" + id
  })
})



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


// ------CARROUSEL CONTINUE VENDO -----
const carousel2 = document.getElementById("carrousel2"),
  content2 = document.getElementById("gallery2"),
  next2 = document.getElementById("next2"),
  prev2 = document.getElementById("prev2");


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

// ----Veja mais

function vejaMais() {

  document.querySelector('.sinopse').style.height = "auto"

  if (document.querySelector('.sinopse').style.height = "auto") {
    document.getElementById('read-btn').remove()
    // document.getElementById('read-btn').style.color = "white"
  }
}

// ----Veja mais

function abrirBuscaMobile() {

  document.querySelector('.busca-mobile').style.display = "flex"

}

// -----CARROUSEL BANNER MOBILE
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let slideInterval;

function showSlide(n) {
  if (n < 0) {
    currentSlide = slides.length - 1;
  } else if (n >= slides.length) {
    currentSlide = 0;
  } else {
    currentSlide = n;
  }

  slides.forEach(slide => {
    slide.style.display = 'none';
  });

  slides[currentSlide].style.display = 'block';
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function startSlideInterval() {
  slideInterval = setInterval(() => {
    nextSlide();
  }, 5000); // intervalo de 5 segundos
}

function stopSlideInterval() {
  clearInterval(slideInterval);
}

document.querySelector('.next').addEventListener('click', () => {
  stopSlideInterval();
  nextSlide();
  startSlideInterval();
});

document.querySelector('.prev').addEventListener('click', () => {
  stopSlideInterval();
  prevSlide();
  startSlideInterval();
});

startSlideInterval();
showSlide(currentSlide);

//  ----- FIM CARROUSEL BANNER  

function adaptImages() {
  const images = document.querySelectorAll('.carrossel img');
  images.forEach((image) => {
    const src = image.getAttribute('src');
    if (window.innerWidth < 500 && !src.includes('-MOBILE.png')) {
      const newSrc = src.replace('.png', '-MOBILE.png');
      image.setAttribute('src', newSrc);
    } else if (window.innerWidth >= 500 && src.includes('-MOBILE.png')) {
      const newSrc = src.replace('-MOBILE.png', '.png');
      image.setAttribute('src', newSrc);
    }
  });
}

window.addEventListener('resize', adaptImages);
adaptImages();


window.addEventListener('resize', adaptImages);
adaptImages();
// ------ MODAL IMAGENS SINOPSE 

function openModal(img) {
  var modal = document.getElementById("modal");
  var modalImg = document.getElementById("modal-image");
  modal.style.display = "block";
  modalImg.src = img.src;
}

function closeModal(span) {
var span = document.getElementById("close");

  var modal = document.getElementById("modal");
  modal.style.display = "none";
}
