const book = document.querySelector("#book");
const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");
const paper6 = document.querySelector("#p6");
const paper7 = document.querySelector("#p7");
const paper8 = document.querySelector("#p8");
const paper9 = document.querySelector("#p9");

const gkanan = document.querySelector("#gkanan");

const b8 = document.querySelector(".b8");
const b1 = document.querySelector(".b1");
const tombol = document.getElementById("tombol");

const audio = document.querySelector("#audio");
const muted = (audio.muted = false);

window.addEventListener("mousedown", () => {
  console.log("Mulasi");
  audio.play();
});

// Daftar waktu tertentu (dalam detik) dan perintah yang akan dijalankan
const events = [
  {
    time: 1,
    action: () => {
      centerBook();
      paper1.classList.add("flipped");
      paper1.style.zIndex = 9;
      b1.style.boxShadow = "-1px 10px 10px -2px rgba(0, 0, 0, 0.75)";
    },
  },
  {
    time: 6,
    action: () => {
      paper2.classList.add("flipped");
      paper1.style.zIndex = 1;
      paper2.style.zIndex = 9;
    },
  },
  {
    time: 10,
    action: () => {
      paper3.classList.add("flipped");
      paper2.style.zIndex = 2;
      paper3.style.zIndex = 9;
    },
  },
  {
    time: 15,
    action: () => {
      paper4.classList.add("flipped");
      paper3.style.zIndex = 3;
      paper4.style.zIndex = 9;
    },
  },
  {
    time: 18,
    action: () => {
      paper5.classList.add("flipped");
      paper4.style.zIndex = 4;
      paper5.style.zIndex = 9;
    },
  },
  {
    time: 22,
    action: () => {
      paper6.classList.add("flipped");
      paper5.style.zIndex = 5;
      paper6.style.zIndex = 9;
    },
  },
  {
    time: 26,
    action: () => {
      paper7.classList.add("flipped");
      paper6.style.zIndex = 6;
      paper7.style.zIndex = 9;
    },
  },
  {
    time: 30,
    action: () => {
      paper8.classList.add("flipped");
      paper7.style.zIndex = 7;
      paper8.style.zIndex = 9;
      gkanan.classList.add("gariskanan");
      book.style.boxShadow = "0px 0px 0px 0px transparent";
      b1.style.boxShadow = "0px 0px 0px 0px transparent";
      b8.style.boxShadow = "-5px 6px 10px 1px rgba(0, 0, 0, 0.75)";
      b8.style.transition = "1s";

      closeBook(false);
    },
  },
];

// Variabel untuk melacak waktu yang sudah diproses agar perintah hanya dijalankan sekali
let processedTimes = new Set();

// Event listener untuk memeriksa waktu audio
audio.addEventListener("timeupdate", () => {
  const currentTime = Math.floor(audio.currentTime); // Ambil waktu saat ini dalam detik

  // Loop melalui daftar events
  events.forEach(event => {
    if (currentTime === event.time && !processedTimes.has(event.time)) {
      event.action(); // Jalankan perintah
      processedTimes.add(event.time); // Tandai waktu sebagai sudah diproses
    }
  });
});

function closeBook(isAtBeginning) {
  if (isAtBeginning) {
    book.style.transform = "translateX(0%)";
    book.style.transition = "transform 1.5s";
    book.style.perspective = "1500px";
  } else {
    book.style.transform = "translateX(100%)";
    book.style.transition = "transform 1.5s";
    book.style.perspective = "1500px";
  }
}

function centerBook(isAtBeginning) {
  if (isAtBeginning) {
    book.style.transform = "translateX(0%)";
    book.style.transition = "transform 1.5s";
    book.style.perspective = "1500px";
  } else {
    book.style.transform = "translateX(50%)";
    book.style.transition = "transform 1.5s";
    book.style.perspective = "1500px";
  }
}