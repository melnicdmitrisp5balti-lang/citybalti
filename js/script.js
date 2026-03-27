function mobileMenu() {
  const navbar = document.querySelector("navbar");
  
  if (navbar.classList.contains("mobile")) {
    navbar.classList.remove("mobile");
  } else {
    navbar.classList.add("mobile");
  }
}