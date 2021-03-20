import renderQueryHook from 'test/renderQueryHook'
import useMovies from './useMovies'
import { getMovie } from 'api/getMovie'
import { PagedResponse } from 'types/PagedResponse'
import { Movie } from 'types/Movie'

jest.mock('api/getMovie', () => ({
  getMovie: jest.fn()
}))
jest.useFakeTimers()

const mockGetMovie = getMovie as jest.MockedFunction<typeof getMovie>

describe('useMovies', () => {
  const renderUseMovies = (currentPage: number, search: string) => renderQueryHook(() => useMovies(currentPage, search))

  beforeEach(() => {
    mockGetMovie.mockRestore()
  })

  it('should call the api with the initial page and search and return the data', async () => {
    const page = 0
    const search = ''
    const data = {} as PagedResponse<Movie>
    mockGetMovie.mockReturnValue(Promise.resolve(data))
    const { waitFor, result } = renderUseMovies(page, search)

    await waitFor(() => !result.current.isLoading)

    expect(mockGetMovie).toHaveBeenCalledWith(page, search)
    expect(result.current.data).toEqual(data)
  })

  it('should prefetch next page for faster loading', async () => {
    const page = 0
    const search = ''
    const data = {} as PagedResponse<Movie>
    mockGetMovie.mockReturnValue(Promise.resolve(data))
    const { result } = renderUseMovies(page, search)

    expect(mockGetMovie).toHaveBeenCalledWith(page, search)
    expect(mockGetMovie).toHaveBeenCalledWith(page + 1, search)
    expect(result.current.data).toEqual(data)
  })

  it('should fetch the next page when it is changed', async () => {
    let page = 0
    const search = ''
    const data = {} as PagedResponse<Movie>
    mockGetMovie.mockReturnValue(Promise.resolve(data))
    const { waitFor, rerender, result } = renderUseMovies(page, search)
    await waitFor(() => !result.current.isLoading)

    page = 1
    rerender()
    await waitFor(() => !result.current.isLoading)

    expect(mockGetMovie).toHaveBeenCalledWith(page, search)
    expect(result.current.data).toEqual(data)
  })

  it('should remember total page count', async () => {
    let page = 0
    const search = ''
    const totalResults = 100
    const data = { totalResults } as PagedResponse<Movie>
    mockGetMovie.mockReturnValue(Promise.resolve(data))
    const { waitFor, rerender, result } = renderUseMovies(page, search)
    await waitFor(() => !result.current.isLoading)

    page = 1
    rerender()

    expect(result.current.totalPages).toEqual(totalResults)
  })
})
