// Representa um filme básico retornado na pesquisa
export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  genres?: Genre[];
  release_date?: string;
  vote_average: number;
  director?: string; 
}

// Representa um gênero de filme
export interface Genre {
  id: number;
  name: string;
}

// Representa a resposta da API de buscar gêneros
export interface GenreResponse {
  genres: Genre[];
}

// Representa um membro da equipe de produção (ex.: diretor)
export interface CrewMember {
  id: number;
  job: string;
  name: string;
}

// Representa a resposta da API de credits
export interface CreditsResponse {
  crew: CrewMember[];
}

// Representa uma crítica de filme
export interface Review {
  id: string;
  author: string;
  content: string;
}

// Representa a resposta da API de reviews
export interface ReviewsResponse {
  results: Review[];
}

// Representa a resposta da API de busca de filmes ou populares
export interface MovieResponse {
  results: Movie[];
}
