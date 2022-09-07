// CONSTANTES
const BREAKPOINT = 576;

// ACESSO AO DOM
const barraNavegacao = document.querySelector(".navbar");
const botaoNavegacaoHome = document.querySelector(".navbar__logo");
const botaoNavegacaoSobre = document.querySelector(".botao-sobre");
const botaoNavegacaoPortfolio = document.querySelector(".botao-portfolio");
const botaoNavegacaoArtigos = document.querySelector(".botao-artigos");
const botaoNavegacaoCurriculo = document.querySelector(".botao-curriculo");
const iconeRolarParaBaixo = document.querySelector(".home__rolar");
const controles = document.querySelector(".navbar__controles");
const controleSubir = document.querySelector(".navbar__subir");
const controleDescer = document.querySelector(".navbar__descer");
const logo = document.querySelector(".navbar__logo");
const iconeContatos = document.querySelectorAll(".icone-contatos");

// PONTOS DA PAGINA
const campoSobre = document.querySelector(".sobre__titulo");
const campoPortfolio = document.querySelector(".portfolio__titulo");
const campoArtigos = document.querySelector(".artigos__titulo");
const campoCurriculo = document.querySelector(".curriculo__titulo");
const screenHeight = window.innerHeight;
const posicaoMobile = {
  sobre: window.pageYOffset + campoSobre.getBoundingClientRect().top,
  portfolio: window.pageYOffset + campoPortfolio.getBoundingClientRect().top,
  artigos: window.pageYOffset + campoArtigos.getBoundingClientRect().top,
  curriculo: window.pageYOffset + campoCurriculo.getBoundingClientRect().top,
};
const posicaoDesktop = {
  sobre: posicaoMobile.sobre - (screenHeight / 10 + 50),
  portfolio: posicaoMobile.portfolio - (screenHeight / 10 + 50),
  artigos: posicaoMobile.artigos - (screenHeight / 10 + 50),
  curriculo: posicaoMobile.curriculo - (screenHeight / 10 + 50),
};

// SISTEMA DE SCROLL
function navegarPara(secao) {
  const ehDesktop = screenWidth > BREAKPOINT;
  switch (secao) {
    case "home":
      window.scrollTo(0, 0);
      break;
    case "sobre":
      ehDesktop
        ? window.scrollTo(0, posicaoDesktop.sobre + 10)
        : window.scrollTo(0, posicaoMobile.sobre - 20);
      break;
    case "portfolio":
      ehDesktop
        ? window.scrollTo(0, posicaoDesktop.portfolio + 10)
        : window.scrollTo(0, posicaoMobile.portfolio - 20);
      break;
    case "artigos":
      ehDesktop
        ? window.scrollTo(0, posicaoDesktop.artigos + 10)
        : window.scrollTo(0, posicaoMobile.artigos - 20);
      break;
    case "curriculo":
      ehDesktop
        ? window.scrollTo(0, posicaoDesktop.curriculo + 10)
        : window.scrollTo(0, posicaoMobile.curriculo - 20);
      break;
  }
}

// NAVEGACAO MOBILE
function deslocarPara(secao) {
  const posicaoAtual = window.pageYOffset;
  if (secao === "cima") {
    if (posicaoAtual > posicaoMobile.curriculo) navegarPara("curriculo");
    else if (posicaoAtual > posicaoMobile.artigos) navegarPara("artigos");
    else if (posicaoAtual > posicaoMobile.portfolio) navegarPara("portfolio");
    else if (posicaoAtual > posicaoMobile.sobre) navegarPara("sobre");
    else if (posicaoAtual > 0) navegarPara("home");
  } else if (secao === "baixo") {
    if (posicaoAtual < posicaoMobile.sobre - 21) navegarPara("sobre");
    else if (posicaoAtual < posicaoMobile.portfolio - 21)
      navegarPara("portfolio");
    else if (posicaoAtual <= posicaoMobile.artigos - 21) navegarPara("artigos");
    else if (posicaoAtual <= posicaoMobile.curriculo - 21)
      navegarPara("curriculo");
  }
}

// CONTROLES SCROLL
botaoNavegacaoHome.addEventListener("click", () => navegarPara("home"));
botaoNavegacaoSobre.addEventListener("click", () => navegarPara("sobre"));
iconeRolarParaBaixo.addEventListener("click", () => navegarPara("sobre"));
botaoNavegacaoPortfolio.addEventListener("click", () =>
  navegarPara("portfolio")
);
botaoNavegacaoArtigos.addEventListener("click", () => navegarPara("artigos"));
botaoNavegacaoCurriculo.addEventListener("click", () =>
  navegarPara("curriculo")
);
controleSubir.addEventListener("click", () => deslocarPara("cima"));
controleDescer.addEventListener("click", () => deslocarPara("baixo"));

// MANIPULACAO DA NAVBAR COM SCOLL DESKTOP E MOBILE
function corNavegacao() {
  const ehDesktop = screenWidth > BREAKPOINT;
  const topoDaPagina = window.pageYOffset == 0;
  const dentroDaHome = window.pageYOffset < posicaoDesktop.sobre;
  const saiuDaHome = window.pageYOffset >= posicaoDesktop.sobre;
  const navbarNoTopo = window.pageYOffset <= screenHeight / 10;
  const navbarNaBase = window.pageYOffset > screenHeight / 10;
  if (ehDesktop) {
    if (topoDaPagina) {
      barraNavegacao.classList.remove('navbar--desktop-home');
      barraNavegacao.classList.remove('navbar--desktop-inferior');
      barraNavegacao.classList.add('navbar--desktop-topo');
    } else if (dentroDaHome) {
      barraNavegacao.classList.remove('navbar--desktop-topo');
      barraNavegacao.classList.remove('navbar--desktop-inferior');
      barraNavegacao.classList.add('navbar--desktop-home');
    } else if (saiuDaHome) {
      barraNavegacao.classList.remove('navbar--desktop-topo');
      barraNavegacao.classList.remove('navbar--desktop-home');
      barraNavegacao.classList.add('navbar--desktop-inferior');
    }
  } else if (!ehDesktop) {
    if (navbarNoTopo) {
      controles.classList.remove('adiciona-controles');
      controles.classList.add('remove-controles');
      barraNavegacao.classList.remove('navbar--mobile-base');
      barraNavegacao.classList.add('navbar--mobile-topo');
    } else if (navbarNaBase) {
      controles.classList.remove('remove-controles');
      controles.classList.add('adiciona-controles');
      barraNavegacao.classList.remove('navbar--mobile-topo')
      barraNavegacao.classList.add('navbar--mobile-base')
    }
  }
}
window.addEventListener("load", () => corNavegacao());
window.addEventListener("scroll", () => corNavegacao());

// HOVER OS ICONES DOS CONTATOS (DESKTOP)
const iconesPretos = [
  "./assets/contatos/linkedin_preto.png",
  "./assets/contatos/github_preto.png",
  "./assets/contatos/behance_preto.png",
];
const iconesBrancos = [
  "./assets/contatos/linkedin_branco.png",
  "./assets/contatos/github_branco.png",
  "./assets/contatos/behance_branco.png",
];
const iconesColoridos = [
  "./assets/contatos/linkedin_colorido.png",
  "./assets/contatos/github_colorido.png",
  "./assets/contatos/behance_colorido.png",
];

for (let i = 0; i < iconeContatos.length; i++) {
  iconeContatos[i].addEventListener("mouseenter", () => {
    if (window.pageYOffset < posicaoDesktop.sobre) {
      iconeContatos[i].src = iconesColoridos[i];
    } else {
      iconeContatos[i].src = iconesBrancos[i];
    }
  });
  iconeContatos[i].addEventListener("mouseout", () => {
    iconeContatos[i].src = iconesPretos[i];
  });
}

// GIFS DO CARD
const ilustracao = document.querySelector(".home__ilustracao");
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
(function temporizadorIlustracao() {
  ilustracao.src = listaIlustracoes[contadorIlustracao];
  contadorIlustracao =
    contadorIlustracao < listaIlustracoes.length - 1
      ? contadorIlustracao + 1
      : 0;
  setTimeout(temporizadorIlustracao, 2000);
})();

/* OUTROS GIFS
- https://media0.giphy.com/media/nj8meeDBjFZGlTJBQk/giphy.gif?cid=790b7611c3c7ea550a3d76425e9885e4764a334b4865a251&rid=giphy.gif&ct=s
- https://media4.giphy.com/media/pZREZQ5wQrogo/giphy.gif?cid=790b76115dd5389e7540367e98425a15283c849a8c4d6afc&rid=giphy.gif&ct=s
- https://media0.giphy.com/media/FMNfRDF1FmjZ8Sghth/giphy.gif?cid=790b7611d5055b8063f7990448688cefd81fce58cea8b2ee&rid=giphy.gif&ct=s
- https://giphy.com/stickers/programming-404-topnode-hS42TuYYnANLFR9IRQ
- https://giphy.com/stickers/tv-emoore-emooreart-YrTXcn2uKFbJvVvJgY
- https://giphy.com/stickers/welcome-youre-yer-welx-4N3Mqhl8JRyYLapZgt
- https://giphy.com/stickers/hi-hola-saludos-kBZ212yGzFaxgkSIKW
- https://giphy.com/stickers/udocz-transparent-OphWiURz4aZ2isAmrc
- https://giphy.com/stickers/transparent-LPkVjKCuLJiTlooiFn
- https://giphy.com/stickers/MozillaFoundation-internet-web-mozilla-ehIw3wY1QVv6cUHxKk
- https://giphy.com/stickers/MozillaFoundation-internet-web-mozilla-jmSi1xSHBJuDfQTiEN
- https://giphy.com/stickers/firefox-world-wide-web-surfing-the-mytruecolors-zuhx2aS1uKnG9BLomb
- https://giphy.com/stickers/90s-internet-the-loneliest-show-on-HqQOFWDTDMZgnl4mOJ
*/
