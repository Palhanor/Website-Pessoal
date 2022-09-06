let screenWidth = window.innerWidth;

if (screenWidth > 576) {
  // CARD DA HOME
  VanillaTilt.init(document.querySelector("#home"), {
    max: 1.6,
    speed: 200,
    reverse: true,
    transition: true,
    glare: true,
    "max-glare": 0.4,
  });

  // CARD DAS INSIGNIAS
  VanillaTilt.init(document.querySelector(".sobre__insignias-borda"), {
    max: 5,
    speed: 200,
    reverse: true,
    transition: true,
    glare: true,
    "max-glare": 0.7,
    scale: 1.2,
  });

  // CARD DO NOTELY
  VanillaTilt.init(document.querySelector("#notely"), {
    max: 6,
    speed: 200,
    reverse: true,
    transition: true,
    glare: true,
    "max-glare": 0.4,
  });

  // CARD DO QR KEY
  VanillaTilt.init(document.querySelector("#qrkey"), {
    max: 6,
    speed: 200,
    reverse: true,
    glare: true,
    "max-glare": 0.4,
  });

  // CARD DO DYNOS
  VanillaTilt.init(document.querySelector("#dynos"), {
    max: 6,
    speed: 200,
    reverse: true,
    transition: true,
    glare: true,
    "max-glare": 0.4,
  });

  // CARD DO WEBSITE PESSOAL
  VanillaTilt.init(document.querySelector("#website"), {
    max: 6,
    speed: 200,
    reverse: true,
    transition: true,
    glare: true,
    "max-glare": 0.4,
  });
}
