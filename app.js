// CONSTANTES
const BREAKPOINT = 1280;

// ACESSO AO DOM
const barraNavegacao = document.querySelector(".navbar");
const botaoNavegacaoHome = document.querySelector(".navbar__logo");
const botaoNavegacaoSobre = document.querySelector(".botao-sobre");
const botaoNavegacaoPortfolio = document.querySelector(".botao-portfolio");
// const botaoNavegacaoArtigos = document.querySelector(".botao-artigos");
const botaoNavegacaoCurriculo = document.querySelector(".botao-curriculo");
const iconeRolarParaBaixo = document.querySelector(".home__rolar");
const controleSubir = document.querySelector(".navbar__subir");
const controleDescer = document.querySelector(".navbar__descer");
const logo = document.querySelector(".navbar__logo");
const iconeContatos = document.querySelectorAll(".icone-contatos");

// PONTOS DA PAGINA
const campoSobre = document.querySelector(".sobre__titulo");
const campoPortfolio = document.querySelector(".portfolio__titulo");
// const campoArtigos = document.querySelector(".artigos__titulo");
const campoCurriculo = document.querySelector(".curriculo__titulo");
const screenHeight = window.innerHeight;
const posicaoMobile = {
  sobre: window.pageYOffset + campoSobre.getBoundingClientRect().top,
  portfolio: window.pageYOffset + campoPortfolio.getBoundingClientRect().top,
  // artigos: window.pageYOffset + campoArtigos.getBoundingClientRect().top,
  curriculo: window.pageYOffset + campoCurriculo.getBoundingClientRect().top,
};
const posicaoDesktop = {
  sobre: posicaoMobile.sobre - (screenHeight / 10 + 50),
  portfolio: posicaoMobile.portfolio - screenHeight / 10,
  // artigos: posicaoMobile.artigos - screenHeight / 10,
  curriculo: posicaoMobile.curriculo - screenHeight / 10,
};

// SISTEMA DE SCROLL
function navegarPara(secao) {
  const ehDesktop = screenWidth >= BREAKPOINT;
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
    // case "artigos":
    //   ehDesktop
    //     ? window.scrollTo(0, posicaoDesktop.artigos + 10)
    //     : window.scrollTo(0, posicaoMobile.artigos - 20);
    //   break;
    case "curriculo":
      ehDesktop
        ? window.scrollTo(0, posicaoDesktop.curriculo + 10)
        : window.scrollTo(0, posicaoMobile.curriculo - 20);
      break;
  }
}

// NAVEGACAO MOBILE
function deslocarPara(secao) {
  const paraCima = secao === "cima";
  const paraBaixo = secao === "baixo";
  const posicaoAtual = window.pageYOffset;
  if (paraCima) {
    const estaAbaixoDoCurriculo = posicaoAtual > posicaoMobile.curriculo;
    // const estaAbaixoDoArtigos = posicaoAtual > posicaoMobile.artigos;
    const estaAbaixoDoPortfolio = posicaoAtual > posicaoMobile.portfolio;
    const estaAbaixoDoSobre = posicaoAtual > posicaoMobile.sobre;
    const estaAbaixoDoTopo = posicaoAtual > 0;
    if (estaAbaixoDoCurriculo) navegarPara("curriculo");
    // else if (estaAbaixoDoArtigos) navegarPara("artigos");
    else if (estaAbaixoDoPortfolio) navegarPara("portfolio");
    else if (estaAbaixoDoSobre) navegarPara("sobre");
    else if (estaAbaixoDoTopo) navegarPara("home");
  } else if (paraBaixo) {
    const estaAcimaDoSobre = posicaoAtual < posicaoMobile.sobre - 21;
    const estaAcimaDoPortfolio = posicaoAtual < posicaoMobile.portfolio - 21;
    // const estaAcimaDoArtigos = posicaoAtual < posicaoMobile.artigos - 21;
    const estaAcimaDoCurriculo = posicaoAtual < posicaoMobile.curriculo - 21;
    if (estaAcimaDoSobre) navegarPara("sobre");
    else if (estaAcimaDoPortfolio) navegarPara("portfolio");
    // else if (estaAcimaDoArtigos) navegarPara("artigos");
    else if (estaAcimaDoCurriculo) navegarPara("curriculo");
  }
}

// CONTROLES SCROLL
botaoNavegacaoHome.addEventListener("click", () => navegarPara("home"));
botaoNavegacaoSobre.addEventListener("click", () => navegarPara("sobre"));
iconeRolarParaBaixo.addEventListener("click", () => navegarPara("sobre"));
botaoNavegacaoPortfolio.addEventListener("click", () =>
  navegarPara("portfolio")
);
// botaoNavegacaoArtigos.addEventListener("click", () => navegarPara("artigos"));
botaoNavegacaoCurriculo.addEventListener("click", () =>
  navegarPara("curriculo")
);
controleSubir.addEventListener("click", () => deslocarPara("cima"));
controleDescer.addEventListener("click", () => deslocarPara("baixo"));

// MANIPULACAO DA NAVBAR COM SCOLL DESKTOP E MOBILE
function corNavegacao() {
  const ehDesktop = screenWidth >= BREAKPOINT;
  const topoDaPagina = window.pageYOffset == 0;
  const dentroDaHome = window.pageYOffset < posicaoDesktop.sobre;
  const saiuDaHome = window.pageYOffset >= posicaoDesktop.sobre;
  const navbarNoTopo = window.pageYOffset <= screenHeight / 10;
  const navbarNaBase = window.pageYOffset > screenHeight / 10;
  if (ehDesktop) {
    if (topoDaPagina) {
      barraNavegacao.classList.remove("navbar--desktop-home");
      barraNavegacao.classList.remove("navbar--desktop-inferior");
      barraNavegacao.classList.add("navbar--desktop-topo");
    } else if (dentroDaHome) {
      barraNavegacao.classList.remove("navbar--desktop-topo");
      barraNavegacao.classList.remove("navbar--desktop-inferior");
      barraNavegacao.classList.add("navbar--desktop-home");
    } else if (saiuDaHome) {
      barraNavegacao.classList.remove("navbar--desktop-topo");
      barraNavegacao.classList.remove("navbar--desktop-home");
      barraNavegacao.classList.add("navbar--desktop-inferior");
    }
  } else if (!ehDesktop) {
    if (navbarNoTopo) {
      controleSubir.classList.remove("navbar__subir--adicionar");
      controleDescer.classList.remove("navbar__descer--adicionar");
      barraNavegacao.classList.remove("navbar--mobile-base");
      controleSubir.classList.add("navbar__subir--remover");
      controleDescer.classList.add("navbar__descer--remover");
      barraNavegacao.classList.add("navbar--mobile-topo");
    } else if (navbarNaBase) {
      controleSubir.classList.remove("navbar__subir--remover");
      controleDescer.classList.remove("navbar__descer--remover");
      barraNavegacao.classList.remove("navbar--mobile-topo");
      controleSubir.classList.add("navbar__subir--adicionar");
      controleDescer.classList.add("navbar__descer--adicionar");
      barraNavegacao.classList.add("navbar--mobile-base");
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
  "./assets/gifs/html.webp",
  "./assets/gifs/css.webp",
  "./assets/gifs/js.webp",
  "./assets/gifs/react.webp",
  "./assets/gifs/vscode.webp",
  "./assets/gifs/git.webp",
  "./assets/gifs/python.webp",
]; // Creditos: https://giphy.com/devrock
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

// AJEITAR A ESTILIZAÇÃO PARA REMOVER O STYLE INLINE
// SISTEMA DE EXPANSAO DAS INSIGNIAS
const [linguagens, frameworks, ferramentas] = document.querySelectorAll(
  ".sobre__insignias-conteudo"
);
const [linguagensContainer, frameworksContainer, ferramentasContainer] =
  document.querySelectorAll(".sobre__insignias-borda");
const [linguagensInsignias, frameworksInsignias, ferramentasInsignias] =
  document.querySelectorAll(".sobre__insignias-grid");
let linguagensAberto = false;
let frameworksAberto = false;
let ferramentasAberto = false;

linguagens.addEventListener("click", () => {
  if (!linguagensAberto) frameworksAberto = false;
  if (!linguagensAberto) ferramentasAberto = false;
  linguagensAberto = !linguagensAberto;

  if (linguagensAberto) {
    linguagensContainer.style.height = "auto";
    linguagensInsignias.style.display = "grid";
    frameworksContainer.style.height = "4rem";
    frameworksInsignias.style.display = "none";
    ferramentasContainer.style.height = "4rem";
    ferramentasInsignias.style.display = "none";
  } else {
    linguagensContainer.style.height = "4rem";
    linguagensInsignias.style.display = "none";
  }
});

frameworks.addEventListener("click", () => {
  if (!frameworksAberto) linguagensAberto = false;
  if (!frameworksAberto) ferramentasAberto = false;
  frameworksAberto = !frameworksAberto;

  if (frameworksAberto) {
    frameworksContainer.style.height = "auto";
    frameworksInsignias.style.display = "grid";
    linguagensContainer.style.height = "4rem";
    linguagensInsignias.style.display = "none";
    ferramentasContainer.style.height = "4rem";
    ferramentasInsignias.style.display = "none";
  } else {
    frameworksContainer.style.height = "4rem";
    frameworksInsignias.style.display = "none";
  }
});

ferramentas.addEventListener("click", () => {
  if (!ferramentasAberto) linguagensAberto = false;
  if (!ferramentasAberto) frameworksAberto = false;
  ferramentasAberto = !ferramentasAberto;

  if (ferramentasAberto) {
    ferramentasContainer.style.height = "auto";
    ferramentasInsignias.style.display = "grid";
    linguagensContainer.style.height = "4rem";
    linguagensInsignias.style.display = "none";
    frameworksContainer.style.height = "4rem";
    frameworksInsignias.style.display = "none";
  } else {
    ferramentasContainer.style.height = "4rem";
    ferramentasInsignias.style.display = "none";
  }
});
