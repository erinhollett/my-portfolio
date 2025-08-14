document.addEventListener("DOMContentLoaded", () => {
  // Toggle project details
  const toggleButtons = document.querySelectorAll(".toggle-details");
  const details = document.querySelectorAll(".project-details");

  toggleButtons.forEach((button, index) => {
    const section = details[index];

    button.addEventListener("click", () => {
      const isVisible = section.style.display === "block";
      section.style.display = isVisible ? "none" : "block";
      button.textContent = isVisible ? "Read more" : "Hide details";
    });
  });

  // Handle form submissions
  const form = document.querySelector("#contact-form");
  const messageBox = document.querySelector("#form-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!validateForm()) {
      showMessage("Please fill out all of the fields", "error");
    } else {
      showMessage("Form submitted", "success");
      form.reset(); // Clears the form
    }
  });

  // Show success and error messages for form submissions
  function showMessage(message, type) {
    messageBox.textContent = message;
    messageBox.className = `form-message ${type}`;
    messageBox.style.display = "block";
  }
});

// Make sure the form is filled in correctly
function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // All fields must be filled in to submit
  if (name === '' || email === '' || subject === '' || message === '') {
    return false; 
  }

  // Email must use regular expression (regex)
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    return false;
  }

  return true;
}

// Timestamp in footer of when website was last updated
document.addEventListener("DOMContentLoaded", () => {
  const lastUpdate = document.getElementById("last-updated");
  const raw = lastUpdate?.dataset.updated;
  if (!raw) return;
  const updatedLocal = moment.utc(raw).local().startOf("day");
  const todayLocal   = moment().startOf("day");
  const diff = todayLocal.diff(updatedLocal, "days"); // Calc days passed between current time and updatedDate
  lastUpdate.textContent = `Last updated ${diff === 0 ? 'today' : `${diff} day${diff > 1 ? 's' : ''} ago`}`; // Display in html
  // If diff === 0 -> write: Last updated today
  // If diff === 1 -> write: Last updated 1 day ago
  // If diff === 5 -> write: Last updated 5 days ago
});

const icon = document.getElementById("theme-icon");
const toggleTheme = document.getElementById("theme-toggle");

const lightIcon = "img/toggle-light.png";
const darkIcon = "img/toggle-dark.png";

// Start the current mode at light be default
let currentMode = "light";

icon.addEventListener("click", () => {
  if (currentMode === "light") {
    // Change to dark mode:
    document.documentElement.classList.add("dark");
    icon.src = darkIcon;
    currentMode = "dark";
  }
  else if (currentMode === "dark") {
    // Change to light mode:
    document.documentElement.classList.remove("dark");
    icon.src = lightIcon;
    currentMode = "light";
  }
})