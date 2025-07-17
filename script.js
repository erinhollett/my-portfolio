document.addEventListener("DOMContentLoaded", () => {
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
});

function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  if (name === '' || email === '' || subject === '' || message === '') {
    return false;
  }

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.text(email)) {
    return false;
  }

  return true;
}