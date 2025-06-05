
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", function () {
    const key = card.classList[1];


    card.classList.add("flip");


    const audio = new Audio(`./sound/${getAnimalNameFromKey(key)}.mp3`);
    audio.play();

    setTimeout(() => {
      card.classList.remove("flip");
    }, 2000);
  });
});

let backgroundMusic;
function playBackgroundMusic() {
  if (!backgroundMusic) {
    backgroundMusic = new Audio("./sound/גונגל.mp3");
    backgroundMusic.volume = 0.5;
    backgroundMusic.loop = true;
  }
  backgroundMusic.play();
}

document.addEventListener("keydown", function (event) {
  const key = event.key.toLowerCase(); // לדוגמה: 's'
  const targetCard = document.querySelector(`.card.${key}`); // מוצא את הכרטיס לפי הקלאס

  if (targetCard) {
    // flip
    targetCard.classList.add("flip");

    // ניגון קול
    const audio = new Audio(`./sound/${getAnimalNameFromKey(key)}.mp3`);
    audio.play();

    setTimeout(() => {
      targetCard.classList.remove("flip");
    }, 2000);
  }
});


document.addEventListener("click", playBackgroundMusic, { once: true });
document.addEventListener("keydown", playBackgroundMusic, { once: true });

function getAnimalNameFromKey(key) {
  const map = {
    s: "כבשה",
    d: "כלב",
    h: "סוס",
    e: "פיל",
    l: "אריה",
    m: "קוף",
    c: "חתול"
  };
  return map[key] || "";
}
