// open and close the side navigation on mobile
const sideNav = document.getElementById("mainNavigation");
const body = document.querySelector("body");
const open = document.getElementById("open");
const close = document.getElementById("close");
var openCount = 0, closeCount = 0;
function openNav() {
    sideNav.classList.toggle("openNavSide");
    body.classList.toggle("openNavMain");
    open.classList.toggle("fade");
    openCount++;
    console.log("Navigation opened " + openCount + " times.");
}
function closeNav() {
    sideNav.classList.remove("openNavSide");
    body.classList.remove("openNavMain");
    open.classList.remove("fade");
    closeCount++;
    console.log("Navigation closed " + closeCount + " times.");
}
open.addEventListener("click", openNav);
close.addEventListener("click", closeNav);

function forceClose() {
  if (openCount > closeCount && window.innerWidth >= 768) {
    sideNav.classList.remove("openNavSide");
    body.classList.remove("openNavMain");
    open.classList.remove("fade");
  }
};
window.addEventListener("resize", forceClose);