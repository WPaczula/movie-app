import { get } from '../fetchHelper'
import { mapResponse } from './mapper'
import { ApiPagedResponse, MovieDto } from './MovieDto'

export const getMovies = (page: number, search: string) => get<ApiPagedResponse<MovieDto>>({ page, s: search }).then(response => mapResponse(response))
