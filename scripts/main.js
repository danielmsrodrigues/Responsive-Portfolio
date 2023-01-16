/* HAMBURGER */
const hamburger = document.querySelector(".navbar__hamburger");
const mobileMenu = document.querySelector(".navbar__menu");
const links = document.querySelectorAll(".navbar__menu li a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

links.forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
  })
);

/* TO-TOP */
const toTop = document.querySelector(".to-top__btn");
const textTop = document.querySelector(".to-top p");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    textTop.classList.add("active");
  } else {
    textTop.classList.remove("active");
  }
});

/* LIGHTBOX */
const images = document.querySelectorAll(".work__wrapper > img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

images.forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.classList.add("active");
    lightboxImg.src = img.src;
  });
});

lightbox.addEventListener("click", (event) => {
  if (event.target !== event.currentTarget) return;
  lightbox.classList.remove("active");
});

/* FORM */
const form = document.getElementById("form");
const inputs = document.querySelectorAll(".required");
const span = document.querySelectorAll(".error");
const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;

form.addEventListener("submit", (event)=>{
  event.preventDefault()

})

function setError(index) {
  inputs[index].style.background = "#ffe2e2";
  span[index].style.display = "block";
}

function removeError(index) {
  inputs[index].style.background = "#f3ffe8";
  span[index].style.display = "none";
}

function nameValidate() {
  if (inputs[0].value.length < 3) {
    setError(0);
  } else {
    removeError(0);
  }
}

function emailValidate() {
  if (!emailRegex.test(inputs[1].value)) {
    setError(1);
  } else {
    removeError(1);
  }
}

function messageValidate() {
  if (inputs[2].value.length < 10) {
    setError(2);
  } else {
    removeError(2);
  }
}
