const catImage = document.getElementById('cat-image');
const newCatButton = document.getElementById('new-cat-button');

// Função para carregar uma nova imagem de gato da API Cataas
function fetchRandomCat() {
    fetch('https://cataas.com/cat')
        .then(response => response.url)
        .then(catImageUrl => {
            catImage.src = catImageUrl;
        })
        .catch(error => console.error(error));
}

// Carregar uma imagem de gato quando a página é carregada
fetchRandomCat();

// Adicionar um ouvinte de evento para o botão "New Cat"
newCatButton.addEventListener('click', fetchRandomCat);
