export interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Review {
  id: string;
  author: string;
  content: string;
}

export interface MoviesStore {
  movies: Movie[];
  genres: Genre[];
  reviews: Review[];
  director: string;
  loading: boolean;
  fetchMovies: (query: string) => Promise<void>;
  fetchGenres: () => Promise<void>;
  fetchPopularMovies: () => Promise<void>;
  fetchDirector: (movieId: number) => Promise<void>;
  fetchReviews: (movieId: number) => Promise<void>;
}
