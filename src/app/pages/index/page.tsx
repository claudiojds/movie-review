'use client';
import { useEffect, useState } from "react";
import { useMoviesStore } from "@/store/movies/movies";
import CardBanner from "@/app/components/card/CardBanner";

export default function Index() {
  const { movies, fetchPopularMovies, fetchGenres, loading } = useMoviesStore();
  const [loadingDetails, setLoadingDetails] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await fetchPopularMovies(); // Buscar filmes populares
      await fetchGenres(); // Buscar gêneros
      setLoadingDetails(false); // Marca o carregamento como concluído
    };

    fetchData();
  }, [fetchPopularMovies, fetchGenres]);

  if (loading || loadingDetails) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <ul className="flex flex-wrap justify-baseline gap-5">
        {movies.map((movie) => (
          <li key={movie.id}>
            <CardBanner
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // Usando a URL base da TMDB para as imagens
              alt={movie.title}
              titulo={movie.title}
              genero={movie.genres?.map((g) => g.name).join(", ") || ""} // Passando os gêneros como uma string
              direcao={movie.director || ""} // Passando a direção ou uma string vazia como padrão
              avaliacao={String(movie.vote_average)} // Passando a avaliação
              ano={movie.release_date || ""} // Passando o ano de lançamento ou uma string vazia como padrão
            />
          </li>
        ))}
      </ul>
    </div>
  );
}