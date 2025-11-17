// Burger-Menü für Mobile

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelectorAll(".main-nav a");

  if (toggle) {
    toggle.addEventListener("click", () => {
      header.classList.toggle("nav-open");
    });
  }

  // Menü schliessen, wenn ein Link angeklickt wird (mobil)
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      header.classList.remove("nav-open");
    });
  });

  // Aktuelles Jahr im Footer setzen
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// Header beim Scrollen verkleinern
document.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");
  if (window.scrollY > 80) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});
