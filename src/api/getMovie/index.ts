import { get } from '../fetchHelper'
import { mapMovie } from './mapper'
import { MovieDto } from './MovieDto'

export const getMovie = (search: string) => get<MovieDto>({ s: search }).then(dto => mapMovie(dto))
