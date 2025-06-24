document.addEventListener('DOMContentLoaded', function() {
  // Header Hide on Scroll
  let lastScrollTop = 0;
  const header = document.querySelector('header');


  const container = document.querySelectorAll('.coresDisponivel');

container.forEach((scrollArea) => {
  let isDown = false;
  let startX;
  let scrollLeft;

  scrollArea.addEventListener('mousedown', (e) => {
    isDown = true;
    scrollArea.classList.add('active');
    startX = e.pageX - scrollArea.offsetLeft;
    scrollLeft = scrollArea.scrollLeft;
  });

  scrollArea.addEventListener('mouseleave', () => {
    isDown = false;
    scrollArea.classList.remove('active');
  });

  scrollArea.addEventListener('mouseup', () => {
    isDown = false;
    scrollArea.classList.remove('active');
  });

  scrollArea.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollArea.offsetLeft;
    const walk = (x - startX) * 1.5; // Velocidade do arraste
    scrollArea.scrollLeft = scrollLeft - walk;
  });
});

function scrollCores(button, direction) {
  const container = button.parentElement.querySelector('.coresDisponivel');
  const scrollAmount = container.clientWidth; // Rola uma imagem por vez (largura do container)

  container.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}


  window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 50) {
      header.classList.add('header-hide');
    } else if (scrollTop < lastScrollTop) {
      header.classList.remove('header-hide');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });

  // Abrir / Fechar Menu de Marcas
  const botaoAbrir = document.querySelector('.abrir-menu-marcas');
  const botaoFechar = document.querySelector('.fechar-menu');
  const menuMarcas = document.getElementById('menuMarcas');

  botaoAbrir.addEventListener('click', function() {
    menuMarcas.classList.add('show');
  });

  botaoFechar.addEventListener('click', function() {
    menuMarcas.classList.remove('show');
  });

  // Mostrar/Esconder Detalhes Produto
  const botoes = document.querySelectorAll('.ver-mais');
  botoes.forEach(botao => {
    botao.addEventListener('click', () => {
      const detalhes = botao.previousElementSibling;
      detalhes.style.display = (detalhes.style.display === 'block') ? 'none' : 'block';
      botao.textContent = (detalhes.style.display === 'block') ? 'Ver menos' : 'Ver mais';
    });
  });
});
