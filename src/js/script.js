const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const page = document.body;


if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;

    toggle.ariaExpanded = isClosed;
    nav.ariaHidden = isOpen;
    page.classList.toggle("noscroll", isClosed);
  });
}
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    if (isOpen) {
      page.style.overflow = "hidden";
    } else {
      page.style.overflow = "";
    }
  });
}

const lb = document.querySelector("#lightbox");
const images = document.querySelectorAll("[data-full-img]");
const texts = document.querySelectorAll("[data-full-txt]");
const hours = document.querySelectorAll("[data-full-hour]");

hours.forEach(hour => {
    hour.addEventListener("click", function() {
        const fullHour = hour.dataset.fullHour;
        const h = lb.querySelector("h2");
        h.textContent = fullHour;
        lb.showModal();
    });
});

texts.forEach(text => {
    text.addEventListener("click", function() {
        const fullTxt = text.dataset.fullTxt;
        const t = lb.querySelector("p");
        t.textContent = fullTxt;
        lb.showModal();
    });
});

images.forEach(image => {
    image.addEventListener("click", function() {
        const fullImg = image.dataset.fullImg;
        const i = lb.querySelector("img");
        i.src = fullImg;
        lb.showModal();
    });
});

lb.addEventListener("click", function() {
    lb.close();
});
const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");
const premierItem = document.querySelector(".carousel__item");
const scrollAmount = premierItem.clientWidth;


if (carousel) {

  prevButton.addEventListener("click", () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });;
  });

  // Scroll au clic sur le bouton suivant
  nextButton.addEventListener("click", () => {
    carousel.scrollBy({ left: +scrollAmount, behavior: "smooth" });;
  });
}
