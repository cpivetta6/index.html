document.addEventListener("DOMContentLoaded", function () {
  const pageLinks = document.querySelectorAll(".page-link");

  pageLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      // Add the fade-out class to trigger the transition effect
      document.body.classList.add("fade-out");

      // After a short delay, navigate to the new page
      setTimeout(() => {
        window.location.href = link.getAttribute("href");
      }, 500); // 500ms is the duration of the fade-out transition
    });
  });
});
