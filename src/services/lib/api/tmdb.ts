import httpInstance from "../instace/client"; 

const TMDB_KEY = process.env.NEXT_PUBLIC_TMDB_KEY;

// pesquisar filmes
export const searchMovies = async (query: string) => {
    const res = await httpInstance.get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${TMDB_KEY}&language=pt-BR`
    );
    return res.data.results
}

// buscar filmes populares
export const fetchPopularMovies = async () => {
    const res = await httpInstance.get(
       `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_KEY}&language=pt-BR` 
    );
    return res.data.results;
}

// buscar críticas de filmes
export const fetchMovieReviews = async (movieId: number) => {
    try {
      const res = await httpInstance.get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${TMDB_KEY}&language=pt-BR`
      );
      return res.data.results; // Aqui são as críticas (reviews)
    } catch (error) {
      console.error("Erro ao buscar reviews:", error);
      return []; // Retorna vazio se der erro
    }
  };