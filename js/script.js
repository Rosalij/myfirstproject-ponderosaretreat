"use strict";

//code for mobile and tablet version, hamburgerbar show/hide
const openhamburgerEl = document.querySelector(".openhamburger")
let hamburgerbarEl = document.querySelector(".hamburgerbar")

hamburgerbarEl.addEventListener("click", () => {
openhamburgerEl.classList.toggle("openhamburger--open")
});

