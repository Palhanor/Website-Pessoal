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

// // GERADOR DE MODAL DO PORTFOLIO
const modal = document.querySelector(".modal");
const notely = document.querySelector("#notely");
const qrkey = document.querySelector("#qrkey");
const dynos = document.querySelector("#dynos");
const website = document.querySelector("#website");

function fecharModal() {
  modal.innerHTML = "";
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}
modal.addEventListener("click", fecharModal);

// Adicionar campo para tags e links
function gerarModalPortfolio(gif, titulo, descricao) {
  modal.innerHTML = `
<div class="modal__portfolio-container">
  <div class="modal__fechar" onclick="fecharModal()"></div>
  <img class="modal__portfolio-imagens" src="${gif}" alt="Gif exibindo o aplicativo">
  <div class="modal__portfolio-conteudo">
    <h3 class="portfolio__card-titulo">${titulo}</h3>
    <p class="portfolio__card-descricao">${descricao}</p>
  </div>
</div>
`;
}

// Modificar os gifs para gifs do projeto
notely.addEventListener("click", () => {
  const imagem = "https://c.tenor.com/eH_NX_5TkdwAAAAC/i-phone-x-find-app.gif";
  const titulo = "Notely";
  const descricao =
    "O Notely é um sistema otimizado de criação e gestão de notas em markdown, que permite uma maior produtividade por aliar simplicidade, organização e personalização.";
  gerarModalPortfolio(imagem, titulo, descricao);
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
});

// Modificar os gifs para gifs do projeto
qrkey.addEventListener("click", () => {
  const imagem = "https://i.gifer.com/Y3jb.gif";
  const titulo = "QR Key";
  const descricao =
    "O QR Key tem como intuito de permitir a criação e visualização de QR Codes privados de forma simples e intuitiva, bastando configurar uma senha mestra necessária para sua decodificação.";
  gerarModalPortfolio(imagem, titulo, descricao);
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
});

// Modificar os gifs para gifs do projeto
dynos.addEventListener("click", () => {
  const imagem =
    "https://cdn.dribbble.com/users/1998175/screenshots/6513403/dribbble.gif";
  const titulo = "DynOS";
  const descricao =
    "DynOS (Dynamic OS) se trata de um programa desktop voltado para a automação na manipulação de arquivos e diretórios do computador de forma dinâmica e automatizada.";
  gerarModalPortfolio(imagem, titulo, descricao);
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
});

// Modificar os gifs para gifs do projeto
website.addEventListener("click", () => {
  const imagem =
    "https://miro.medium.com/max/1400/1*ncd7VKSohRSJKk-beuUCmw.gif";
  const titulo = "Website Pessoal";
  const descricao =
    "Website pessoal criado como uma vitrine profissional própria, contendo informações relevantes acerca de minha trajetória, motivações e projetos realizados ao longo do tempo.";
  gerarModalPortfolio(imagem, titulo, descricao);
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
});
