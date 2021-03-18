import { get } from '../fetchHelper'
import { mapResponse } from './mapper'
import { ApiPagedResponse, MovieDto } from './MovieDto'

export const getMovie = (page: number, search: string) => get<ApiPagedResponse<MovieDto>>({ page, s: search }).then(response => mapResponse(response))
