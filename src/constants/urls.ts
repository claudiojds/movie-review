export const BASE_TMDB_URL = "https://api.themoviedb.org/3";

/*     Endpoints fixos      */

// Buscar filmes por pesquisa
export const SEARCH_MOVIE_URL = `${BASE_TMDB_URL}/search/movie`;
// Buscar gêneros
export const GENRE_LIST_URL = `${BASE_TMDB_URL}/genre/movie/list`;
// Buscar filmes populares
export const POPULAR_MOVIES_URL = `${BASE_TMDB_URL}/movie/popular`;


/*     Endpoints dinâmicos (funções)      */

// Buscar diretor por Id de filmes
export const movieCreditsUrl = (movieId: number) => `${BASE_TMDB_URL}/movie/${movieId}/credits`;
// Buscar críticas (reviews) por Id de filmes
export const movieReviewsUrl = (movieId: number) => `${BASE_TMDB_URL}/movie/${movieId}/reviews`;

// Base para imagens
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
