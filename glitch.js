document.querySelectorAll(".glitch-link").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = this.getAttribute("href");

    // sécurité : si pas de cible, on sort
    if (!target) {
      return;
    }

    const glitch = document.getElementById("glitch-screen");

    // si l’écran glitch existe, on l’affiche
    if (glitch) {
      glitch.style.opacity = "1";
      glitch.classList.add("active");
    }

    // quoi qu’il arrive : on navigue après 1 seconde
    setTimeout(() => {
      window.location.href = target;
    }, 1000);
  });
});

