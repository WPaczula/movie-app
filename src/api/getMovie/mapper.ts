import { Movie } from 'types/Movie'
import { MovieDto } from './MovieDto'

export const mapMovie = (movieDto: MovieDto): Movie => ({
  image: movieDto.Poster,
  imdbRating: movieDto.imdbRating,
  imdbVotes: movieDto.imdbVotes,
  plot: movieDto.Plot,
  title: movieDto.Title,
  year: movieDto.Year
})
