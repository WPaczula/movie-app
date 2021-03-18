import { Movie } from 'types/Movie'
import { PagedResponse } from 'types/PagedResponse'
import { MovieDto, ApiPagedResponse } from './MovieDto'

const mapMovie = (movieDto: MovieDto): Movie => ({
  image: movieDto.Poster,
  title: movieDto.Title,
  year: movieDto.Year
})

export const mapResponse = (response: ApiPagedResponse<MovieDto>): PagedResponse<Movie> => ({
  search: response.Search.map(mapMovie),
  totalResults: parseInt(response.totalResults),
  response: response.Response === 'True'
})
