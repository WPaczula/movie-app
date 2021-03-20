import renderQueryHook from 'test/renderQueryHook'
import useMovies from './useMovies'
import { getMovies } from 'api/getMovies'
import { PagedResponse } from 'types/PagedResponse'
import { Movie } from 'types/Movie'
import { act } from '@testing-library/react-hooks'

jest.mock('api/getMovies', () => ({
  getMovies: jest.fn()
}))
const mockGetMovies = getMovies as jest.MockedFunction<typeof getMovies>

jest.useFakeTimers()

describe('useMovies', () => {
  const renderUseMovies = (currentPage: number, search: string) => renderQueryHook(() => useMovies(currentPage, search))

  beforeEach(() => {
    mockGetMovies.mockRestore()
  })

  it('should call the api with the initial page and search and return the data', async () => {
    const page = 0
    const search = ''
    const data = {} as PagedResponse<Movie>
    mockGetMovies.mockReturnValue(Promise.resolve(data))
    const { waitFor, result } = renderUseMovies(page, search)

    await waitFor(() => !result.current.isLoading)

    expect(mockGetMovies).toHaveBeenCalledWith(page, search)
    expect(result.current.data).toEqual(data)
  })

  it('should return loading when choosing the search term was not yet finished', async () => {
    const page = 0
    let search = 'bat'
    const data = {} as PagedResponse<Movie>
    mockGetMovies.mockReturnValue(Promise.resolve(data))
    const { result, rerender } = renderUseMovies(page, search)

    act(() => {
      jest.advanceTimersByTime(50)
      search = 'batman'
      rerender()
    })

    expect(result.current.isLoading).toEqual(true)
  })

  it('should not return loading when the search is empty', async () => {
    const page = 0
    const search = ''
    const data = {} as PagedResponse<Movie>
    mockGetMovies.mockReturnValue(Promise.resolve(data))

    const { result } = renderUseMovies(page, search)

    expect(result.current.isLoading).toEqual(false)
  })

  it('should reset total pages if the search term has changed', () => {
    const page = 0
    let search = 'bat'
    const data = { totalResults: 10 } as PagedResponse<Movie>
    const newData = { totalResults: 0, response: false } as PagedResponse<Movie>
    mockGetMovies
      .mockReturnValueOnce(Promise.resolve(data))
      .mockReturnValueOnce(Promise.resolve(newData))
    const { result, rerender } = renderUseMovies(page, search)

    act(() => {
      search = 'batman'
      rerender()
    })

    expect(result.current.totalPages).toEqual(0)
  })

  it('should prefetch next page for faster loading', async () => {
    const page = 0
    const search = ''
    const data = {} as PagedResponse<Movie>
    mockGetMovies.mockReturnValue(Promise.resolve(data))
    const { result } = renderUseMovies(page, search)

    expect(mockGetMovies).toHaveBeenCalledWith(page, search)
    expect(mockGetMovies).toHaveBeenCalledWith(page + 1, search)
    expect(result.current.data).toEqual(data)
  })

  it('should fetch the next page when it is changed', async () => {
    let page = 0
    const search = ''
    const data = {} as PagedResponse<Movie>
    mockGetMovies.mockReturnValue(Promise.resolve(data))
    const { waitFor, rerender, result } = renderUseMovies(page, search)
    await waitFor(() => !result.current.isLoading)

    page = 1
    rerender()
    await waitFor(() => !result.current.isLoading)

    expect(mockGetMovies).toHaveBeenCalledWith(page, search)
    expect(result.current.data).toEqual(data)
  })

  it('should remember total page count', async () => {
    let page = 0
    const search = ''
    const totalResults = 101
    const expectedTotalPages = 11
    const data = { totalResults } as PagedResponse<Movie>
    mockGetMovies.mockReturnValue(Promise.resolve(data))
    const { waitFor, rerender, result } = renderUseMovies(page, search)
    await waitFor(() => !result.current.isLoading)

    page = 1
    rerender()

    expect(result.current.totalPages).toEqual(expectedTotalPages)
  })
})
