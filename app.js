// Mobile menu toggle
const toggleBtn = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
toggleBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Contact form handler
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("✅ Message sent successfully!");
});

// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

// Load theme preference
if (localStorage.getItem("theme") === "light") {
  html.classList.remove("dark");
  themeToggle.textContent = "🌙";
} else {
  html.classList.add("dark");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "🌙";
  } else {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "☀️";
  }
});
