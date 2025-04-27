import httpInstance from "@/services/lib/instance/clientTMDB";
import { 
  Movie, 
  Genre, 
  GenreResponse, 
  CreditsResponse, 
  Review, 
  ReviewsResponse, 
  MovieResponse 
} from "./interfaces"; // Importando todas as interfaces
import { 
  POPULAR_MOVIES_URL, 
  GENRE_LIST_URL, 
  SEARCH_MOVIE_URL, 
  movieCreditsUrl, 
  movieReviewsUrl, 
  BASE_TMDB_URL 
} from "@/constants/urls";

const TMDB_KEY = process.env.NEXT_PUBLIC_TMDB_KEY;

// Função para buscar filmes populares
export const fetchPopularMovies = async (): Promise<Movie[]> => {
  const res = await httpInstance.get<MovieResponse>(POPULAR_MOVIES_URL, {
    params: {
      api_key: TMDB_KEY,
      language: "pt-BR",
      page: 1,
    },
  });
  return res.data.results; // Retorna os filmes populares
};

// Função para buscar filmes por nome
export const searchMovies = async (query: string): Promise<Movie[]> => {
  const res = await httpInstance.get<MovieResponse>(SEARCH_MOVIE_URL, {
    params: {
      api_key: TMDB_KEY,
      language: "pt-BR",
      query,
    },
  });
  return res.data.results; // Retorna os filmes encontrados pela pesquisa
};

// Função para buscar os detalhes de um filme (incluindo gênero, diretor, etc.)
export const fetchMovieDetails = async (movieId: number): Promise<{ genre: string; director: string; release_date: string; vote_average: string }> => {
  const res = await httpInstance.get<Movie>(`${BASE_TMDB_URL}/movie/${movieId}`, {
    params: {
      api_key: TMDB_KEY,
      language: "pt-BR",
    },
  });

  const movieDetails = res.data;
  const genres = (movieDetails.genres ?? []).map((genre: Genre) => genre.name).join(", ");
  const releaseDate = movieDetails.release_date?.split("-")[0] || "Desconhecido";
  const voteAverage = movieDetails.vote_average || "Sem avaliação";

  // Puxar os créditos (diretor) do filme
  const creditsRes = await httpInstance.get<CreditsResponse>(movieCreditsUrl(movieId), {
    params: {
      api_key: TMDB_KEY,
    },
  });

  const director = creditsRes.data.crew.find(
    (member) => member.job === "Director"
  )?.name || "Desconhecido";

  return {
    genre: genres,
    director: director,
    release_date: releaseDate,
    vote_average: String(voteAverage),
  };
};

// Função para buscar a lista de gêneros
export const fetchGenres = async (): Promise<Genre[]> => {
  const res = await httpInstance.get<GenreResponse>(GENRE_LIST_URL, {
    params: {
      api_key: TMDB_KEY,
      language: "pt-BR",
    },
  });
  return res.data.genres; // Retorna a lista de gêneros
};

// Função para buscar críticas de um filme
export const fetchMovieReviews = async (movieId: number): Promise<Review[]> => {
  const res = await httpInstance.get<ReviewsResponse>(movieReviewsUrl(movieId), {
    params: {
      api_key: TMDB_KEY,
      language: "pt-BR",
    },
  });
  return res.data.results; // Retorna as críticas do filme
};