document.querySelectorAll(".glitch-link").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = this.getAttribute("href");
    const glitch = document.getElementById("glitch-screen");
    const img = glitch ? glitch.querySelector("img") : null;

    if (!glitch || !img) {
      window.location.href = target;
      return;
    }

    glitch.classList.add("active");
    glitch.style.opacity = "1";

    const effects = [
      () => {
        img.style.filter = "contrast(200%) saturate(200%)";
        img.style.transform = "scale(1.05) translateX(4px)";
      },
      () => {
        img.style.filter = "invert(1) contrast(150%)";
        img.style.transform = "scale(1.1) rotate(0.4deg)";
      },
      () => {
        img.style.filter = "hue-rotate(160deg) contrast(180%)";
        img.style.transform = "scale(0.97) translateY(-6px)";
      },
      () => {
        img.style.filter = "blur(2px) contrast(250%)";
        img.style.transform = "scale(1.15) rotate(-0.3deg)";
      },
      () => {
        img.style.filter = "grayscale(1) contrast(180%)";
        img.style.transform = "scale(1.03) skewX(4deg)";
      },
      () => {
        img.style.filter = "none";
        img.style.transform = "scale(1)";
      }
    ];

    let flickerCount = 0;

    const glitchInterval = setInterval(() => {
      glitch.style.opacity = Math.random() > 0.5 ? "1" : "0";

      const randomEffect = effects[Math.floor(Math.random() * effects.length)];
      randomEffect();

      flickerCount++;

      if (flickerCount > 18) { // ≈ 3 secondes
        clearInterval(glitchInterval);
      }
    }, 160);

    setTimeout(() => {
      window.location.href = target;
    }, 3000);
  });
});

// Nettoyage garanti au chargement de chaque page
window.addEventListener("load", () => {
  const glitch = document.getElementById("glitch-screen");
  if (glitch) {
    glitch.classList.remove("active");
    glitch.style.opacity = "0";

    const img = glitch.querySelector("img");
    if (img) {
      img.style.filter = "none";
      img.style.transform = "none";
    }
  }
});
