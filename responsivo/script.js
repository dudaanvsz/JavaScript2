document.addEventListener('DOMContentLoaded', () => {

  // -------- 1. Troca de Banner Automática --------
  const banner = document.getElementById('banner');

  function trocaBannerSimples() {
    if (window.innerWidth < 600) {
      banner.src = "https://i.pinimg.com/736x/10/c6/c6/10c6c6390b83f72c7921ec55e2a8fe7c.jpg";
    } else {
      banner.src = "https://i.pinimg.com/736x/10/c6/c6/10c6c6390b83f72c7921ec55e2a8fe7c.jpg";
    }
  }
  trocaBannerSimples();
  window.addEventListener('resize', trocaBannerSimples);

  // -------- 2. Troca de Imagem ao Clicar (Lâmpada) --------
  const lampada = document.getElementById('lampada');
  const lampApagada = "https://cdn-icons-png.flaticon.com/512/702/702814.png";
  const lampAcesa = "https://cdn-icons-png.flaticon.com/512/702/702797.png";
  let acesa = false;
  lampada.src = lampApagada;
  lampada.addEventListener('click', () => {
    acesa = !acesa;
    lampada.src = acesa ? lampAcesa : lampApagada;
  });

  // -------- 3. Mostrar/Esconder Imagem --------
  const toggleBtn = document.getElementById('toggle-btn');
  const imagemToggle = document.getElementById('imagem-toggle');
  toggleBtn.addEventListener('click', () => {
    imagemToggle.style.display = imagemToggle.style.display === "none" ? "block" : "none";
  });

  // -------- 4. Troca de Foto de Perfil --------
  const perfil = document.getElementById('perfil');
  const trocarFoto = document.getElementById('trocar-foto');

  // Aqui você coloca as duas fotos que quer alternar
  const fotos = [
    "https://i.pinimg.com/736x/0f/52/74/0f52743e8c747973200c9d0d848d851a.jpg",
    "https://i.pinimg.com/736x/fc/d2/d3/fcd2d3593835f0849e73d72eef238a70.jpg"
  ];

  let fotoIndice = 0; // índice da foto atual
  perfil.src = fotos[fotoIndice]; // define foto inicial

  trocarFoto.addEventListener('click', () => {
    fotoIndice = (fotoIndice + 1) % fotos.length; // alterna indefinidamente
    perfil.src = fotos[fotoIndice];
  });

  // -------- 5. Galeria com Clique --------
  const miniaturas = document.querySelectorAll('.mini');
  const imagemGrande = document.getElementById('imagem-grande');
  imagemGrande.src = miniaturas[0].src; // primeira imagem padrão
  miniaturas.forEach(img => {
    img.addEventListener('click', () => {
      imagemGrande.src = img.src;
    });
  });

  // -------- 6. Banner com 3 Versões --------
  const bannerResp = document.getElementById('banner-responsivo');
  function trocarBannerResponsivo() {
    if (window.innerWidth < 600) {
      bannerResp.src = "https://i.pinimg.com/736x/54/7f/e0/547fe066a54598909e0b372db09fa93c.jpg";
    } else if (window.innerWidth < 1024) {
      bannerResp.src = "https://i.pinimg.com/736x/54/7f/e0/547fe066a54598909e0b372db09fa93c.jpg";
    } else {
      bannerResp.src = "https://i.pinimg.com/736x/54/7f/e0/547fe066a54598909e0b372db09fa93c.jpg";
    }
  }
  trocarBannerResponsivo();
  window.addEventListener('resize', trocarBannerResponsivo);

  // -------- 7. Carrossel Simples --------
  const imagens = [
    "https://i.pinimg.com/736x/8f/00/5e/8f005e112c423d7fcf7b71d23a54aff9.jpg",
    "https://i.pinimg.com/736x/21/d7/29/21d729da767dcf08382a81c477aa373f.jpg",
    "https://i.pinimg.com/736x/8c/b3/99/8cb3993b797ebc9eab97e907d525cdea.jpg"
  ];

  let carrosselIndice = 0;
  const imgCarrossel = document.getElementById('img-carrossel');
  const btnAnterior = document.getElementById('anterior');
  const btnProximo = document.getElementById('proximo');

  function mostrarImagem() {
    imgCarrossel.src = imagens[carrosselIndice];
  }
  btnAnterior.addEventListener('click', () => {
    carrosselIndice = (carrosselIndice - 1 + imagens.length) % imagens.length;
    mostrarImagem();
  });
  btnProximo.addEventListener('click', () => {
    carrosselIndice = (carrosselIndice + 1) % imagens.length;
    mostrarImagem();
  });
  mostrarImagem();

});
