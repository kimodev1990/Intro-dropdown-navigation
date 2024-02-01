const bgBody = document.getElementById("bg-body");
const menuHamburgerMobile = document.getElementById("menu-hamburger-mobile");
const menuContentsMobile = document.getElementById("menu-contents-mobile");
const menuContentsdesktop = document.getElementById("menu-contents-desktop");

menuHamburgerMobile.addEventListener("click", () => {
  menuContentsMobile.classList.toggle("hidden");
  menuHamburgerMobile.classList.toggle("open");
  bgBody.classList.toggle("bg-hamburger-open");
});

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    menuContentsdesktop.classList.remove("hide");
  } else {
    menuContentsdesktop.classList.add("hide");
  }
}

// Create a MediaQueryList object
var x = window.matchMedia("(min-width: 768px)");

// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function () {
  myFunction(x);
});
