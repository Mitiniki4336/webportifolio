// Greeting based on time
window.addEventListener("DOMContentLoaded", () => {
  const greetingEl = document.getElementById("greeting");
  const hour = new Date().getHours();

  let greeting = "Hello!";
  if (hour < 12) {
    greeting = "Good morning!";
  } else if (hour < 18) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }

  greetingEl.textContent = greeting;
});

// Dark/Light mode toggle
const toggleBtn = document.getElementById("toggle-theme");
toggleBtn?.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

