const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const title = document.getElementById("title");


const songs = [
  { name: "Binding_Light", src: "Blinding Lights_spotdown.org.mp3" },
  { name: "I_Think_They_Call_This_Love", src: "I Think They Call This Love - Cover_spotdown.org.mp3" },
  { name: "Die_For_You", src: "Die For You_spotdown.org.mp3" },
  { name: "Espresso", src: "Espresso_spotdown.org.mp3" },
  { name: "Let Me Love You", src: "Let Me Love You_spotdown.org.mp3" },
  { name: "No Lie_", src: "No Lie_spotdown.org.mp3" },
  { name: "One Of The Girls", src: "One Of The Girls (with JENNIE, Lily Rose Depp)_spotdown.org.mp3" },
  { name: "Popular", src: "Popular (with Playboi Carti & Madonna) - From The Idol Vol. 1 (Music from the HBO Original Series)_spotdown.org.mp3" },
  { name: "Shinunoga E-Wa", src: "Shinunoga E-Wa_spotdown.org.mp3" },
  { name: "Star_Boy", src: "Starboy_spotdown.org.mp3" },
  { name: "Summertime Sadness", src: "Summertime Sadness_spotdown.org.mp3" },
  { name: "Too Sweet", src: "Too Sweet_spotdown.org.mp3" },
];

let index = 0;

// Load song
function loadSong(i) {
  audio.src = songs[i].src;
  title.textContent = songs[i].name;
}

// Play / Pause
playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸ Pause";
  } else {
    audio.pause();
    playBtn.textContent = "▶ Play";
  }
});

// Next song
nextBtn.addEventListener("click", () => {
  index++;
  if (index >= songs.length) index = 0;
  loadSong(index);
  audio.play();
  playBtn.textContent = "⏸ Pause";
});

// Previous song
prevBtn.addEventListener("click", () => {
  index--;
  if (index < 0) index = songs.length - 1;
  loadSong(index);
  audio.play();
  playBtn.textContent = "⏸ Pause";
});

// Auto next when song ends
audio.addEventListener("ended", () => {
  nextBtn.click();
});

// First load
loadSong(index);