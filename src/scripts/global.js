document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    htmlElement.setAttribute("data-theme", savedTheme);
  }

  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = htmlElement.getAttribute("data-theme");

    if (currentTheme === "light") {
      htmlElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      htmlElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  });

  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  hamburgerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".header__menu a, .mobile-menu a");

  navLinks.forEach((link) => {
    const linkPath = new URL(link.href).pathname;

    if (currentPath === linkPath) {
      link.classList.add("active-link");
    }

    if (currentPath === "/" && linkPath.endsWith("/index.html")) {
      link.classList.add("active-link");
    }
  });
});
