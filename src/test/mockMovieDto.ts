import { MovieDto } from 'api/getMovie/MovieDto'

const getMockMovieDto = (): MovieDto => ({
  Title: 'Guardians of the Galaxy',
  Year: '2014',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_SX300.jpg',
  imdbID: 'tt2015381',
  Type: 'movie'
})

export default getMockMovieDto
