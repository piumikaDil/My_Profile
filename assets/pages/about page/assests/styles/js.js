const nextEl = document.querySelector(".next");

const prevEl = document.querySelector(".prev");

const imgsEl = document.querySelectorAll("img");

const imageContainerEl = document.querySelector(".image-container");

let currentImg = 1;

let timeout;

nextEl.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeout);
  updateImg();
});

prevEl.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeout);
  updateImg();
});

updateImg();

function updateImg() {
  if (currentImg > imgsEl.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgsEl.length;
  }
  imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 900}px)`;
  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ScrollReveal({
//   reset: true,
//   distance: "100px",
//   duration: 1900,
//   delay: 300,
// });

// ScrollReveal().reveal(".main-headders", {
//   delay: 100,
// });

// ScrollReveal().reveal("#myName", {
//   delay: 400,
// });

// ScrollReveal().reveal(".sub-title", {
//   delay: 700,
// });

// ScrollReveal().reveal(".paragraph ", {
//   delay: 1000,
// });

// ScrollReveal().reveal(".hire-btn", {
//   delay: 1300,
// });

// ScrollReveal().reveal(".address1", {
//   delay: 100,
//   origin: "left",
// });

// ScrollReveal().reveal(".address2", {
//   delay: 300,
//   origin: "right",
// });

// ScrollReveal().reveal("#intro-article", {
//   delay: 300,
//   origin: "right",
// });

// ScrollReveal().reveal(".aside", {
//   delay: 300,
//   origin: "left",
// });

// ScrollReveal().reveal(".pos-system1", { delay: 300, origin: "left" });
// ScrollReveal().reveal(".pos-system2", { delay: 600, origin: "left" });
// ScrollReveal().reveal(".pos-system3", { delay: 900, origin: "left" });
// ScrollReveal().reveal(".h2-tag", { delay: 300, origin: "bottom" });
// ScrollReveal().reveal("h5", { delay: 600, origin: "bottom" });
// ScrollReveal().reveal("form", { delay: 800, origin: "bottom" });
// ScrollReveal().reveal(".submit-button", { delay: 800, origin: "bottom" });
// ScrollReveal().reveal(".slider-container", { delay: 800, origin: "bottom" });

// $(document).ready(() => {
//   // setTimeout(() => {
//   $("#pre-loader").css("display", "none");
//   // }, 3000);
// });
