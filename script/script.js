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
const heartContainer = document.getElementById("heart");

const b8 = document.querySelector(".b8");
const b1 = document.querySelector(".b1");
const tombol = document.getElementById("tombol");
const b1Content = document.getElementById("b1");
const b2Content = document.getElementById("b2");
const b3Content = document.getElementById("b3");
const b4Content = document.getElementById("b4");
const b5Content = document.getElementById("b5");
const b6Content = document.getElementById("b6");
const b7Content = document.getElementById("b7");
const b8Content = document.getElementById("b8");

const audio = document.querySelector("#audio");
const muted = (audio.muted = false);

window.addEventListener("mousedown", () => {
  audio.play();
});

// Daftar waktu tertentu (dalam detik) dan perintah yang akan dijalankan
const events = [
  {
    time: 1000,
    action: () => {
      centerBook();
      paper1.classList.add("flipped");
      paper1.style.zIndex = 9;
      b1.style.boxShadow = "-1px 10px 10px -2px rgba(0, 0, 0, 0.75)";
      const text = "Katakan Cinta ";
      animasiTulisan2(text, b1Content);
    },
  },
  {
    time: 4000,
    action: () => {
      displayText(b1Content);
    },
  },
  {
    time: 4500,
    action: () => {
      const text = "Katakan Cinta ";
      animasiTulisan2(text, b1Content);
    },
  },
  {
    time: 6000,
    action: () => {
      paper2.classList.add("flipped");
      paper1.style.zIndex = 1;
      paper2.style.zIndex = 9;
      const text = "Hati ini meminta";
      animasiTulisan(text, b2Content);
    },
  },
  {
    time: 10000,
    action: () => {
      paper3.classList.add("flipped");
      paper2.style.zIndex = 2;
      paper3.style.zIndex = 9;
      const text = "Kau lebih dari teman berbagi";
      animasiTulisanResize(text, b3Content);
    },
  },
  {
    time: 15000,
    action: () => {
      paper4.classList.add("flipped");
      paper3.style.zIndex = 3;
      paper4.style.zIndex = 9;
      const text = "Jadi kekasih ku saja";
      animasiTulisan(text, b4Content);
    },
  },
  {
    time: 18000,
    action: () => {
      paper5.classList.add("flipped");
      paper4.style.zIndex = 4;
      paper5.style.zIndex = 9;
      const text = "Cinta katakan cinta";
      animasiTulisan2(text, b5Content);
    },
  },
  {
    time: 22000,
    action: () => {
      paper6.classList.add("flipped");
      paper5.style.zIndex = 5;
      paper6.style.zIndex = 9;
      const text = "Hati ini meminta";
      animasiTulisan(text, b6Content);
    },
  },
  {
    time: 26000,
    action: () => {
      paper7.classList.add("flipped");
      paper6.style.zIndex = 6;
      paper7.style.zIndex = 9;
      const text = "Kau lebih dari teman berbagi";
      animasiTulisanResize(text, b7Content);
    },
  },
  {
    time: 30000,
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

function animasiTulisan(text, content) {
  text.split("").forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.classList.add("font-size-span");
    span.style.animationDelay = `${index * 0.1}s`; // Jeda antar huruf
    content.appendChild(span);
  });
}

function animasiTulisanResize(text, content) {
  text.split("").forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.classList.add("font-size-span2");
    span.style.animationDelay = `${index * 0.1}s`; // Jeda antar huruf
    content.appendChild(span);
  });
}

//function animasi tulisan
function animasiTulisan2(text, content) {
  text.split("").forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.classList.add("font-size-span");
    span.style.animationDelay = `${index * 0.1}s`; // Jeda antar huruf
    content.appendChild(span);
  });

  const heartIcon = document.createElement("span");
  heartIcon.textContent = " ♥";
  heartIcon.classList.add("font-size-span");
  heartIcon.style.animationDelay = `1.3s`;
  content.appendChild(heartIcon);
}

//hapus span
function displayText(content) {
  const spans = content.querySelectorAll("span"); // Ambil semua elemen <span> dalam container
  spans.forEach(span => {
    span.remove(); // Hapus setiap elemen <span>
  });
}

// Variabel untuk melacak waktu yang sudah diproses agar perintah hanya dijalankan sekali
let processedTimes = new Set();

// Event listener untuk memeriksa waktu audio
audio.addEventListener("timeupdate", () => {
  const currentTimeMs = Math.floor(audio.currentTime * 1000); // Waktu dalam milidetik

  // Loop melalui daftar events
  events.forEach(event => {
    // Jika currentTime lebih besar atau sama dengan waktu event dan event belum diproses
    if (currentTimeMs >= event.time && !processedTimes.has(event.time)) {
      event.action(); // Jalankan perintah
      processedTimes.add(event.time); // Tandai waktu sebagai sudah diproses
    }
  });
});

// // Reset processedTimes jika audio dimulai ulang atau di-*seek*
// audio.addEventListener("seeked", () => {
//   processedTimes.clear();
// });

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
