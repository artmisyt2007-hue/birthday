
const openLetter = document.getElementById("openLetter");
const letter = document.getElementById("letter");

openLetter.addEventListener("click", () => {
  letter.classList.toggle("hidden");

  if (letter.classList.contains("hidden")) {
    openLetter.textContent = "Open your letter ♡";
  } else {
    openLetter.textContent = "Close your letter ↑";
    letter.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
});

const musicButton = document.getElementById("musicButton");
const music = document.getElementById("music");

musicButton.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicButton.textContent = "♫ Pause music";
    } catch {
      musicButton.textContent = "Add music.mp3 first";
    }
  } else {
    music.pause();
    musicButton.textContent = "♫ Play music";
  }
});
