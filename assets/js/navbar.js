const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar");

hamburger.onclick = function() {
  navBar.classList.toggle("active");
}

// Select all links with the class 'link'
const links = document.querySelectorAll(".link");

// Iterate over each link and add the click event listener
links.forEach(link => {
  link.onclick = function() {
    if (navBar.classList.contains("active")) {
      navBar.classList.remove("active");
    }
  }
});