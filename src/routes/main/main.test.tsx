import Main from './Main'
import { act, fireEvent, screen, waitFor } from '@testing-library/react'
import { getMovies } from 'api/getMovies'
import { QueryClient, QueryClientProvider } from 'react-query'
import renderWithTheme from 'test/renderWithTheme'
import { PagedResponse } from 'types/PagedResponse'
import getMockMovie from 'test/mockMovie'
import { Movie } from 'types/Movie'

jest.mock('api/getMovies', () => ({
  getMovies: jest.fn()
}))
const mockGetMovies = getMovies as jest.MockedFunction<typeof getMovies>

jest.useFakeTimers()

describe('Main', () => {
  const renderMain = () => {
    const client = new QueryClient()

    return renderWithTheme(<QueryClientProvider client={client}><Main /></QueryClientProvider>)
  }

  beforeEach(() => {
    mockGetMovies.mockRestore()
  })

  it('should not show neither spinner nor no result message if the search is empty.', async () => {
    await renderMain()

    const spinner = await screen.queryByTestId('spinner')
    const noResultsMessage = await screen.queryByText(/No results/)

    expect(spinner).not.toBeInTheDocument()
    expect(noResultsMessage).not.toBeInTheDocument()
  })

  it('should show spinner after the search is changed', async () => {
    await renderMain()
    const searchInput = await screen.findByLabelText('Search')

    act(() => {
      fireEvent.change(searchInput, { target: { value: 'new search' } })
    })
    const spinner = await screen.queryByTestId('spinner')

    expect(spinner).toBeInTheDocument()
  })

  it('should display movies if the API returned them successfully', async () => {
    await renderMain()
    const searchInput = await screen.findByLabelText('Search')
    act(() => {
      fireEvent.change(searchInput, { target: { value: 'new search' } })
      jest.runAllTimers()
    })
    const movie = getMockMovie()
    const data: PagedResponse<Movie> = {
      response: true,
      search: [movie],
      totalResults: 1
    }
    mockGetMovies.mockReturnValue(Promise.resolve(data))

    await waitFor(async () => {
      const spinner = await screen.queryByTestId('spinner')
      expect(spinner).not.toBeInTheDocument()
      jest.runAllTimers()
    })
    const movieCard = await screen.findByText(movie.title)

    expect(movieCard).toBeInTheDocument()
  })

  it('should show no results message if the API returns no data for particular search', async () => {
    await renderMain()
    const searchInput = await screen.findByLabelText('Search')
    act(() => {
      fireEvent.change(searchInput, { target: { value: 'new search' } })
      jest.runAllTimers()
    })
    const data: PagedResponse<Movie> = {
      response: false,
      search: [],
      totalResults: 0
    }
    mockGetMovies.mockReturnValue(Promise.resolve(data))

    await waitFor(async () => {
      const spinner = await screen.queryByTestId('spinner')
      expect(spinner).not.toBeInTheDocument()
      jest.runAllTimers()
    })
    const noResults = await screen.findByText(/No results/)

    expect(noResults).toBeInTheDocument()
  })

  it('should allow changing pages and call the API with the fetched page', async () => {
    await renderMain()
    const searchInput = await screen.findByLabelText('Search')
    const search = 'new search'
    act(() => {
      fireEvent.change(searchInput, { target: { value: search } })
      jest.runAllTimers()
    })
    const movie = getMockMovie()
    const data: PagedResponse<Movie> = {
      response: true,
      search: Array(10).fill(movie),
      totalResults: 200
    }
    mockGetMovies.mockReturnValue(Promise.resolve(data))
    await waitFor(async () => {
      const spinner = await screen.queryByTestId('spinner')
      expect(spinner).not.toBeInTheDocument()
      jest.runAllTimers()
    })
    const nextPageChevron = await screen.findByTestId('next-page-chevron')

    await act(async () => {
      await fireEvent.click(nextPageChevron)
    })

    expect(mockGetMovies).toHaveBeenCalledWith(2, search)
  })
})
