const startBtn = document.getElementById("startBtn");
const music = document.getElementById("bgMusic");
const main = document.getElementById("mainContent");

const message = `In a world with

1 Earth,
7 Seas,
7 Continents,
196 Countries,
and 8 Billion People…

somehow my heart found you.

and i love you alot sayangku ♡

Cantika ♡`;

let i = 0;

startBtn.addEventListener("click", () => {

  document.getElementById("start-screen").style.display = "none";

  main.classList.remove("hidden");

  music.play().catch(() => {});

  typeText();

  setInterval(createHeart, 300);
});

function typeText(){

  if(i < message.length){

    document.getElementById("typing").innerHTML += message.charAt(i);

    i++;

    setTimeout(typeText, 55);
  }
}

function createHeart(){

  const heart = document.createElement("div");

  heart.classList.add("heart");

  heart.innerHTML = "♡";

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.fontSize = (Math.random() * 20 + 10) + "px";

  heart.style.animationDuration = (Math.random() * 3 + 4) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}