import { get } from '../fetchHelper'
import getMockMovieDto from 'test/mockMovieDto'
import { getMovie } from '.'

jest.mock('..', () => ({
  get: jest.fn()
}))

const mockGet = get as jest.MockedFunction<typeof get>

describe('getMovie', () => {
  beforeEach(() => {
    mockGet.mockRestore()
  })

  it('should map movie dto to the model used in the application', async () => {
    const mockMovieDto = getMockMovieDto()
    mockGet.mockReturnValue(Promise.resolve(mockMovieDto))

    const result = await getMovie('search')

    expect(result.image).toBe(mockMovieDto.Poster)
    expect(result.imdbRating).toBe(mockMovieDto.imdbRating)
    expect(result.imdbVotes).toBe(mockMovieDto.imdbVotes)
    expect(result.plot).toBe(mockMovieDto.Plot)
    expect(result.title).toBe(mockMovieDto.Title)
    expect(result.year).toBe(mockMovieDto.Year)
  })
})
