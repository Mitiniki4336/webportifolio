document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");
  const surveyForm = document.getElementById("survey-form");

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");

      let valid = true;
      clearErrors(contactForm);

      if (!name.value.trim()) {
        showError(name, "Name is required.");
        valid = false;
      }

      if (!email.value.trim()) {
        showError(email, "Email is required.");
        valid = false;
      } else if (!validateEmail(email.value)) {
        showError(email, "Enter a valid email.");
        valid = false;
      }

      if (!message.value.trim()) {
        showError(message, "Message is required.");
        valid = false;
      }

      if (!valid) event.preventDefault();
    });
  }

  if (surveyForm) {
    surveyForm.addEventListener("submit", (event) => {
      const feedback = document.getElementById("feedback");
      const technologies = document.querySelectorAll("input[name='technologies']:checked");

      let valid = true;
      clearErrors(surveyForm);

      if (!feedback.value.trim()) {
        showError(feedback, "Feedback is required.");
        valid = false;
      }

      if (technologies.length === 0) {
        const techContainer = document.getElementById("tech-container");
        if (techContainer) {
          showError(techContainer, "Select at least one technology.");
        }
        valid = false;
      }

      if (!valid) event.preventDefault();
    });
  }

  function validateEmail(email) {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/i;
    return regex.test(email);
  }

  function showError(element, message) {
    const error = document.createElement("small");
    error.className = "error-message";
    error.style.color = "red";
    error.textContent = message;
    element.classList.add("error-border");

    if (element.parentElement) {
      element.parentElement.appendChild(error);
    }
  }

  function clearErrors(form) {
    const errors = form.querySelectorAll(".error-message");
    errors.forEach((e) => e.remove());

    const fields = form.querySelectorAll(".error-border");
    fields.forEach((f) => f.classList.remove("error-border"));
  }
});

