/* ===================================== NAVBAR DARK ON SCROLL =====================================*/
var container = document.querySelector(".container-fluid");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    container.classList.add("bg-dark", "shadow");
  } else {
    container.classList.remove("bg-dark", "shadow");
  }
});

/* ===================================== SWIPER =====================================*/
let swiper = new Swiper(".mySwiper", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});
/* ===================================== ACCORDION =====================================*/

let acc = document.getElementsByClassName("accordion");
let i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

/* var element = document.querySelector(".skills-bar");

element.scrollIntoView();
element.scrollIntoView(false);
element.scrollIntoView({ block: "end" });
element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
 */
/* (function () {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll(".hidden");
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add("fade-in-element");
        element.classList.remove("hidden");
      }
    }
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", init);

  init();
  checkPosition();
})(); */
