const sections = [...document.querySelectorAll("section")];
const h2 = [...document.querySelectorAll("h2")];

("use strict");
// DOM elements
const pageInput = document.querySelector("#page-num-input");
const pageSubmit = document.querySelector(".page-num-submit");
const pageNums = document.querySelectorAll(".page-num");
const errorMsg = document.querySelector(".navigate-error");

const nav = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");

const overlay = document.querySelector(".overlay");
const navigateOpenBtn = document.querySelector(".open-nav");
const navigateSection = document.querySelector("#navigator");
const navigateInfo = document.querySelector(".navigate-Info");

sections.forEach((section) => section.classList.add("bg-callmeSection"));

// Menu open
const openMenu = function () {
  nav.classList.remove("hidden");
  nav.classList.add("slidein");
  nav.classList.remove("slideout");

  menuClose.classList.remove("close-navBtn");

  menuBtn.classList.add("hidden");
};

// Menu close
const closeMenu = function () {
  nav.classList.add("hidden");
  menuBtn.classList.remove("hidden");

  nav.classList.add("slideout");
  nav.classList.remove("slidein");

  menuClose.classList.add("close-navBtn");
};

const navigateToggle = function () {
  overlay.classList.toggle("nav-hidden");
  navigateSection.classList.toggle("nav-hidden");
};

(function () {
  const pageNumbers = [...pageNums].map((pageNum, i) => i);

  const pageMax = Math.max(...pageNumbers);
  const pageMin = Math.min(...pageNumbers);

  navigateInfo.textContent = `Enter from page (${pageMin} - ${pageMax})`;
})();

// Event listeners
menuBtn.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);

pageSubmit.addEventListener("click", function (e) {
  e.preventDefault();

  // get numbet input from form
  const inputedNum = pageInput.value;

  // Setting conditions
  if (inputedNum && isFinite(inputedNum)) {
    const desiredPage = document.querySelector(`#page-${inputedNum}`);
    desiredPage.scrollIntoView({ behavior: "smooth" });

    errorMsg.textContent = "";

    navigateToggle();
  } else {
    errorMsg.textContent = `${inputedNum} is not a number, were you just testing it?`;
  }

  pageInput.value = "";
});

navigateOpenBtn.addEventListener("click", navigateToggle);
