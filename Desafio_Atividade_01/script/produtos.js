// Selecionando todos os botões de compra
const buyButtons = document.querySelectorAll('.buy-button');

// Iterando sobre cada botão e adicionando um ouvinte de eventos de clique
buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Quando o botão é clicado, exibe uma mensagem de compra
        alert('Produto comprado!');
    });
});

// Selecionando a barra de pesquisa
const searchInput = document.getElementById('search');

// Selecionando todos os produtos
const products = document.querySelectorAll('.product');

// Adicionando um ouvinte de evento de entrada na barra de pesquisa
searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.toLowerCase(); // Obtendo o texto da barra de pesquisa em minúsculas

    // Iterando sobre cada produto para verificar se o texto da barra de pesquisa está presente em seus títulos ou descrições
    products.forEach(product => {
        const title = product.querySelector('h2').innerText.toLowerCase(); // Obtendo o texto do título do produto em minúsculas
        const description = product.querySelector('p').innerText.toLowerCase(); // Obtendo o texto da descrição do produto em minúsculas

        // Verificando se o texto da barra de pesquisa está presente no título ou na descrição do produto
        if (title.includes(searchText) || description.includes(searchText)) {
            product.style.display = 'block'; // Exibindo o produto se o texto da barra de pesquisa for encontrado nele
        } else {
            product.style.display = 'none'; // Ocultando o produto se o texto da barra de pesquisa não for encontrado nele
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', function() {
      const query = document.getElementById('search').value;
      searchProducts(query);
    });
  
    function searchProducts(query) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'search.php?query=' + query, true);
      xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 400) {
          const response = JSON.parse(xhr.responseText);
          displayProducts(response);
        } else {
          console.error('Erro ao buscar produtos.');
        }
      };
      xhr.onerror = function() {
        console.error('Erro de conexão.');
      };
      xhr.send();
    }
  
    function displayProducts(products) {
      const productList = document.getElementById('product-list');
      productList.innerHTML = ''; // Limpa a lista de produtos
  
      if (products.length === 0) {
        productList.innerHTML = '<p>Nenhum produto encontrado.</p>';
      } else {
        products.forEach(function(product) {
          const productItem = document.createElement('div');
          productItem.classList.add('product');
          productItem.innerHTML = `
            <img src="${product.imagem}" alt="${product.nome}">
            <h2>${product.nome}</h2>
            <p>ID do Produto: ${product.id}</p>
            <p>Descrição: ${product.descricao}</p>
            <button class="buy-button">Comprar</button>
          `;
          productList.appendChild(productItem);
        });
      }
    }
  });
  
