const songs = [
  { name: "Song One", artist: "Unknown", src: "assets/music/song1.mp3" },
  { name: "Song Two", artist: "Unknown", src: "assets/music/song2.mp3" },
  { name: "Song Three", artist: "Unknown", src: "assets/music/song3.mp3" }
];

let index = 0;
let audio = document.getElementById("audio");
let title = document.getElementById("title");
let artist = document.getElementById("artist");
let playlist = document.getElementById("playlist");
let volume = document.getElementById("volume");

function loadSong(i) {
  title.textContent = songs[i].name;
  artist.textContent = songs[i].artist;
  audio.src = songs[i].src;
}

function playPause() {
  if (audio.paused) audio.play();
  else audio.pause();
}

function nextSong() {
  index = (index + 1) % songs.length;
  loadSong(index);
  audio.play();
}

function prevSong() {
  index = (index - 1 + songs.length) % songs.length;
  loadSong(index);
  audio.play();
}

volume.addEventListener("input", () => {
  audio.volume = volume.value;
});

songs.forEach((song, i) => {
  let li = document.createElement("li");
  li.innerText = song.name;
  li.onclick = () => {
    index = i;
    loadSong(index);
    audio.play();
  };
  playlist.appendChild(li);
});

document.getElementById("search").addEventListener("keyup", function () {
  let value = this.value.toLowerCase();
  document.querySelectorAll("#playlist li").forEach(li => {
    li.style.display = li.innerText.toLowerCase().includes(value) ? "block" : "none";
  });
});

function toggleTheme() {
  document.body.classList.toggle("dark");
}

loadSong(index);
