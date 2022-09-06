// ACESSO AO DOM
// Botoes
const barraNavegacao = document.querySelector(".navbar");
const botaoNavegacaoHome = document.querySelector(".navbar__logo");
const botaoNavegacaoSobre = document.querySelector(".botao-sobre");
const botaoNavegacaoPortfolio = document.querySelector(".botao-portfolio");
const botaoNavegacaoArtigos = document.querySelector(".botao-artigos");
const botaoNavegacaoCurriculo = document.querySelector(".botao-curriculo");
const iconeRolarParaBaixo = document.querySelector(".home__rolar");
const [linkedin, github, behance] =
  document.querySelectorAll(".icone-contatos");

// Campos
const campoSobre = document.querySelector(".sobre__titulo");
const campoPortfolio = document.querySelector(".portfolio__titulo");
const campoArtigos = document.querySelector(".artigos__titulo");
const campoCurriculo = document.querySelector(".curriculo__titulo");
const ilustracao = document.querySelector(".home__ilustracao");

// DADS GLOBAIS IMPORTANTES
let screenHeight = window.innerHeight;

let posicaoCampoSobre =
  window.pageYOffset + campoSobre.getBoundingClientRect().top;
let posicaoCampoPortfolio =
  window.pageYOffset + campoPortfolio.getBoundingClientRect().top;
let posicaoCampoArtigos =
  window.pageYOffset + campoArtigos.getBoundingClientRect().top;
let posicaoCampoCurriculo =
  window.pageYOffset + campoCurriculo.getBoundingClientRect().top;

let fimDaHome = posicaoCampoSobre - (screenHeight / 10 + 50);
let fimDoSobre = posicaoCampoPortfolio - (screenHeight / 10 + 50);
let fimDoPortfolio = posicaoCampoArtigos - (screenHeight / 10 + 50);
let fimDoArtigos = posicaoCampoCurriculo - (screenHeight / 10 + 50);

let contadorIlustracao = 0;
const listaIlustracoes = [
  "https://media0.giphy.com/media/XAxylRMCdpbEWUAvr8/giphy.gif?cid=790b76116ae5338a3995ed13f1488ae515116f3fc7acf45e&rid=giphy.gif&ct=s",
  "https://media1.giphy.com/media/fsEaZldNC8A1PJ3mwp/giphy.gif?cid=790b761180496511a3750fff8e525be364b5b60a5f1dcbb6&rid=giphy.gif&ct=s",
  "https://media1.giphy.com/media/ln7z2eWriiQAllfVcn/giphy.gif?cid=790b761131c5daec2251f06f4807cf57b2a5ce25e86464bf&rid=giphy.gif&ct=s",
  "https://media3.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif?cid=790b7611c47330a71732e8c8d08ae70fd7c3a0584a322f8f&rid=giphy.gif&ct=s",
  "https://media0.giphy.com/media/IdyAQJVN2kVPNUrojM/giphy.gif?cid=790b7611d7504c6f61801bcc9cc1b0df1a8c89d5e3bd136c&rid=giphy.gif&ct=s",
  "https://media2.giphy.com/media/kH1DBkPNyZPOk0BxrM/giphy.gif?cid=790b7611fb270f8c30091c5a81824fbbc882f2ea6bc12054&rid=giphy.gif&ct=s",
  "https://media1.giphy.com/media/LMt9638dO8dftAjtco/giphy.gif?cid=790b761123cbd873da72f344686b0c7cb874f0cd48e60df3&rid=giphy.gif&ct=s",
]; // HTML, CSS, JS, React, VS Code, Git, Python
// const listaIlustracoes = [
//   "./assets/stickers/HTML.png",
//   "./assets/stickers/CSS.png",
//   "./assets/stickers/Javascript.png",
//   "./assets/stickers/React.png",
//   "./assets/stickers/Typescript.png",
//   "./assets/stickers/Python.png",
//   "./assets/stickers/Git.png",
// ];

// SISTEMA DE SCROLL PELA PÁGINA
const gotoHome = () => {
  window.scrollTo(0, 0);
};
const gotoSobre = () => {
  window.scrollTo(0, fimDaHome + 10);
};
const gotoPortfolio = () => {
  window.scrollTo(0, fimDoSobre + 10);
};
const gotoArtigos = () => {
  window.scrollTo(0, fimDoPortfolio + 10);
};
const gotoCurriculo = () => {
  window.scrollTo(0, fimDoArtigos + 10);
};

// DISPARO DO SCROLL COM O CLICK
botaoNavegacaoHome.addEventListener("click", () => {
  gotoHome();
});
botaoNavegacaoSobre.addEventListener("click", () => {
  gotoSobre();
});
iconeRolarParaBaixo.addEventListener("click", () => {
  gotoSobre();
});
botaoNavegacaoPortfolio.addEventListener("click", () => {
  gotoPortfolio();
});
botaoNavegacaoArtigos.addEventListener("click", () => {
  gotoArtigos();
});
botaoNavegacaoCurriculo.addEventListener("click", () => {
  gotoCurriculo();
});

// CONTROLE DA COR DA BARRA DE NAVEGAÇÃO
function corNavegacao() {
  if (window.pageYOffset == 0) {
    barraNavegacao.style.backgroundImage = "none";
    barraNavegacao.style.backgroundColor = "transparent";
  } else if (window.pageYOffset < fimDaHome) {
    barraNavegacao.style.backgroundImage = "none";
    barraNavegacao.style.backgroundColor = "rgb(241, 245, 246)";
  } else if (window.pageYOffset >= fimDaHome) {
    barraNavegacao.style.backgroundImage = "url('./assets/background.png')";
    barraNavegacao.style.backgroundSize = "cover";
    barraNavegacao.style.backgroundPosition = "center";
  }
}
window.addEventListener("load", () => corNavegacao());
window.addEventListener("scroll", () => corNavegacao());

// HOVER OS ICONES DOS CONTATOS
linkedin.addEventListener("mouseenter", () => {
  if (window.pageYOffset < fimDaHome) {
    linkedin.src = "./assets/contatos/linkedin_colorido.png";
  } else {
    linkedin.src = "./assets/contatos/linkedin_branco.png";
  }
});
linkedin.addEventListener("mouseout", () => {
  linkedin.src = "./assets/contatos/linkedin_preto.png";
});
github.addEventListener("mouseenter", () => {
  if (window.pageYOffset < fimDaHome) {
    github.src = "./assets/contatos/github_colorido.png";
  } else {
    github.src = "./assets/contatos/github_branco.png";
  }
});
github.addEventListener("mouseout", () => {
  github.src = "./assets/contatos/github_preto.png";
});
behance.addEventListener("mouseenter", () => {
  if (window.pageYOffset < fimDaHome) {
    behance.src = "./assets/contatos/behance_colorido.png";
  } else {
    behance.src = "./assets/contatos/behance_branco.png";
  }
});
behance.addEventListener("mouseout", () => {
  behance.src = "./assets/contatos/behance_preto.png";
});

// GIFS DO CARD
// Podem ser imagens com vetores brancos e pretos parecendo stickers com temas de programação e efeito de vidro
let alteradorIlustracoes;
function timedCount() {
  ilustracao.src = listaIlustracoes[contadorIlustracao];
  contadorIlustracao =
    contadorIlustracao < listaIlustracoes.length - 1
      ? contadorIlustracao + 1
      : 0;
  alteradorIlustracoes = setTimeout(timedCount, 2000);
}
window.addEventListener("load", timedCount);

// OUTROS GIFS
// https://media0.giphy.com/media/nj8meeDBjFZGlTJBQk/giphy.gif?cid=790b7611c3c7ea550a3d76425e9885e4764a334b4865a251&rid=giphy.gif&ct=s
// https://media4.giphy.com/media/pZREZQ5wQrogo/giphy.gif?cid=790b76115dd5389e7540367e98425a15283c849a8c4d6afc&rid=giphy.gif&ct=s
// https://media0.giphy.com/media/FMNfRDF1FmjZ8Sghth/giphy.gif?cid=790b7611d5055b8063f7990448688cefd81fce58cea8b2ee&rid=giphy.gif&ct=s

// https://giphy.com/stickers/programming-404-topnode-hS42TuYYnANLFR9IRQ
// https://giphy.com/stickers/tv-emoore-emooreart-YrTXcn2uKFbJvVvJgY
// https://giphy.com/stickers/welcome-youre-yer-welx-4N3Mqhl8JRyYLapZgt
// https://giphy.com/stickers/hi-hola-saludos-kBZ212yGzFaxgkSIKW
// https://giphy.com/stickers/udocz-transparent-OphWiURz4aZ2isAmrc
// https://giphy.com/stickers/transparent-LPkVjKCuLJiTlooiFn
// https://giphy.com/stickers/MozillaFoundation-internet-web-mozilla-ehIw3wY1QVv6cUHxKk
// https://giphy.com/stickers/MozillaFoundation-internet-web-mozilla-jmSi1xSHBJuDfQTiEN
// https://giphy.com/stickers/firefox-world-wide-web-surfing-the-mytruecolors-zuhx2aS1uKnG9BLomb
// https://giphy.com/stickers/90s-internet-the-loneliest-show-on-HqQOFWDTDMZgnl4mOJ
