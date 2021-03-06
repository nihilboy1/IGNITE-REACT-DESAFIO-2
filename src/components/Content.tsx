import { MovieProps } from '../App'
import { MovieCard } from './MovieCard'
import { GenreResponseProps } from '../App'

type ContentTypes = {
  selectedGenre: GenreResponseProps
  movies: MovieProps[]
}

export function Content({ selectedGenre, movies }: ContentTypes) {
  return (
    <>
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </>
  )
}
