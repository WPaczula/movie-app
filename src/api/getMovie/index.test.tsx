import { get } from '../fetchHelper'
import getMockMovieDto from 'test/mockMovieDto'
import { getMovie } from '.'
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

    const results = await getMovie(1, 'search')

    expect(results.search[0].image).toBe(mockMovieDto.Poster)
    expect(results.search[0].title).toBe(mockMovieDto.Title)
    expect(results.search[0].year).toBe(mockMovieDto.Year)
  })
})
