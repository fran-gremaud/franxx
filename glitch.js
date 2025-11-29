document.querySelectorAll(".glitch-link").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = this.getAttribute("href");
    const glitch = document.getElementById("glitch-screen");

    glitch.classList.add("active");

    setTimeout(() => {
      window.location.href = target;
    }, 800);
  });
});
