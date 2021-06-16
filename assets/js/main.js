const navMenu = document.querySelector(".nav_menu"),
  navToggle = document.querySelector(".nav_toggle"),
  navClose = document.querySelector(".nav_close");

/* ---- Show/Hide menu ---- */
// Show menu
navToggle &&
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });

// Hide menu
navClose &&
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });

// When nav item  is clicked, hide menu
document.querySelectorAll(".nav_link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
});

const experienceSlicer = new Swiper(".experience_swiper", {
  slidesPerView: "auto",
  mousewheel: true,
  grabCursor: true,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: ".experienceButtonNext",
    prevEl: ".experienceButtonPrev",
  }
});

const testimonialsSwiper = new Swiper(".testimonials_swiper", {
  slidesPerView: "auto",
  grabCursor: true,
  autoplay: true,
  loop: true,
  observer: true,
  observeParents: true,
  pagination: {
    el: ".testimonials_swiper_pagination",
    clickable: true,
  }
});

// Set margin of swiper
const onResize = () => {
  const container = document.querySelector(".experience .container");
  const computedStyle = window.getComputedStyle(container);
  const leftMargin = computedStyle.getPropertyValue("margin-left");
  const rightMargin = computedStyle.getPropertyValue("margin-right");
  const leftPadding = computedStyle.getPropertyValue("padding-left");
  const rightPadding = computedStyle.getPropertyValue("padding-right");
  const newLeftMargin = [leftMargin, leftPadding]
    .map(item=>item.replace("px", ""))
    .map(item=>Number.parseFloat(item))
    .reduce((last, current)=>last + current);
  const newRightMargin = [rightMargin, rightPadding]
    .map(item=>item.replace("px", ""))
    .map(item=>Number.parseFloat(item))
    .reduce((last, current)=>last + current);

  document.querySelector(".experience_cards_wrapper>div").style.marginLeft =
    (newLeftMargin) + "px";

  document
    .querySelectorAll(".experience_card_right_margin")
    .forEach((element) => {
      element.style.cssText = "height: 10px; width: " + (newRightMargin) + "px !important";
    });
};
onResize();
window.addEventListener("resize", onResize);
