document.addEventListener('DOMContentLoaded', function() {
  // Header Hide on Scroll
  let lastScrollTop = 0;
  const header = document.querySelector('header');

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
