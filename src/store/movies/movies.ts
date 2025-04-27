import { create } from "zustand";
import { fetchPopularMovies, fetchGenres, searchMovies } from "@/services/lib/api/tmdb/tmdbService";
import { Movie, Genre } from "@/services/lib/api/tmdb/interfaces";

// Definindo o tipo de estado
interface MoviesStore {
  movies: Movie[];
  genres: Genre[];
  loading: boolean;
  fetchPopularMovies: () => void;
  fetchGenres: () => void;
  searchMovies: (query: string) => void;
}

// Criando o estado usando Zustand
export const useMoviesStore = create<MoviesStore>((set) => ({
  movies: [],
  genres: [],
  loading: false,
  fetchPopularMovies: async () => {
    set({ loading: true });
    try {
      const movies = await fetchPopularMovies();
      set({ movies });
    } catch (error) {
      console.error("Erro ao buscar filmes populares:", error);
    } finally {
      set({ loading: false });
    }
  },
  fetchGenres: async () => {
    set({ loading: true });
    try {
      const genres = await fetchGenres();
      set({ genres });
    } catch (error) {
      console.error("Erro ao buscar gêneros:", error);
    } finally {
      set({ loading: false });
    }
  },
  searchMovies: async (query: string) => {
    set({ loading: true });
    try {
      const movies = await searchMovies(query);
      set({ movies });
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    } finally {
      set({ loading: false });
    }
  },
}));
