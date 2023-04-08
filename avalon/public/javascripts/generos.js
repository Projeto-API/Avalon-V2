const generos = document.querySelectorAll('.genero');
let generosSelecionados = [];

generos.forEach(genero => {
  genero.addEventListener('click', () => {
    const generoSelecionado = genero.dataset.genero;
    if (generosSelecionados.includes(generoSelecionado)) {
      generosSelecionados = generosSelecionados.filter(g => g !== generoSelecionado);
    } else {
      generosSelecionados.push(generoSelecionado);
    }
    filtrarLivros();
  });
});

function filtrarLivros() {
    const livrosFiltrados = livros.filter(livro => {
      const generosLivro = livro.generos;
      return generosSelecionados.every(genero => generosLivro.includes(genero));
    });
    exibirLivros(livrosFiltrados);
  }

  function exibirLivros(livros) {
    const gridLivros = document.querySelector('.grid-livros');
    gridLivros.innerHTML = '';
    livros.forEach(livro => {
      const item = document.createElement('li');
      item.className = 'item';
      item.innerHTML = `
        <img class="item-img" src="/images/produtos/${livro.capa}" id="${livro.id}" alt="${livro.titulo}">
        <div>
          <h5 class="item-name">${livro.titulo}</h5>
          <p class="item-author">${livro.autor}</p>
          <p class="item-price">${livro.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
          </div>
          `;
          gridLivros.appendChild(item);
          });
          }
          const genreLinks = document.querySelectorAll('.link_menu.genero');
const books = document.querySelectorAll('.item');

genreLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const selectedGenre = link.dataset.genero;
    books.forEach(book => {
      if (book.dataset.genero === selectedGenre || selectedGenre === 'todos') {
        book.style.display = 'block';
      } else {
        book.style.display = 'none';
      }
    });
  });
});
          
          
          
          