const apiKey = "67151d460678c4f02a7d1180b19e1445";
const apiUrl = "https://api.themoviedb.org/3/movie/popular?api_key=" + apiKey + "&language=pt-BR&page=1";

const container = document.getElementById("lista-filmes");

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        if (!data.results || data.results.length === 0) {
            container.innerHTML = "<p>Nenhum filme encontrado.</p>";
            return;
        }

        data.results.forEach(movie => {
            const card = document.createElement("article");
            card.className = "movie-card";

            const posterUrl = movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "https://via.placeholder.com/500x750?text=Sem+imagem";

            card.innerHTML = `
                <img src="${posterUrl}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>${movie.overview || "Sinopse não disponível."}</p>
            `;

            container.appendChild(card);
        });
    })
    .catch(error => {
        console.error("Erro ao buscar filmes:", error);
        container.innerHTML = "<p>Não foi possível carregar os filmes.</p>";
    });