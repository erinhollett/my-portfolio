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