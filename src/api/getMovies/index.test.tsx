import { get } from '../fetchHelper'
import getMockMovieDto from 'test/mockMovieDto'
import { getMovies } from '.'
import { ApiPagedResponse, MovieDto } from './MovieDto'

jest.mock('../fetchHelper', () => ({
  get: jest.fn()
}))

const mockGet = get as jest.MockedFunction<typeof get>

describe('getMovie', () => {
  beforeEach(() => {
    mockGet.mockRestore()
  })

  it('should map movie dto to the model used in the application', async () => {
    const mockMovieDto = getMockMovieDto()
    const mockMoviesApiResponse: ApiPagedResponse<MovieDto> = { Search: [mockMovieDto], totalResults: '1', Response: 'True' }
    mockGet.mockReturnValue(Promise.resolve(mockMoviesApiResponse))

    const results = await getMovies(1, 'search')

    expect(results.search[0].image).toBe(mockMovieDto.Poster)
    expect(results.search[0].title).toBe(mockMovieDto.Title)
    expect(results.search[0].year).toBe(mockMovieDto.Year)
    expect(results.response).toBe(true)
    expect(results.totalResults).toBe(1)
  })

  it('should return response false and no results if the API does not return elements', async () => {
    const mockMoviesApiResponse: ApiPagedResponse<MovieDto> = { Response: 'False' }
    mockGet.mockReturnValue(Promise.resolve(mockMoviesApiResponse))

    const results = await getMovies(1, 'search')

    expect(results.search).toEqual([])
    expect(results.totalResults).toBe(0)
    expect(results.response).toBe(false)
  })
})
