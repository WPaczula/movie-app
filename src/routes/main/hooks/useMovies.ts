import { getMovie } from 'api/getMovie'
import { Movie } from 'types/Movie'
import { PagedResponse } from 'types/PagedResponse'
import { useDebounce } from 'use-debounce'
import { QueryObserverResult, useQuery, useQueryClient } from 'react-query'
import { useEffect, useState } from 'react'

const usePrefetchNextPage = (currentPage: number, search: string) => {
  const queryClient = useQueryClient()

  useEffect(() => {
    queryClient.prefetchQuery(['movies', currentPage + 1, search], () => getMovie(currentPage + 1, search))
  }, [currentPage, search])
}

export type MoviesResult = QueryObserverResult<PagedResponse<Movie>> & {
  totalPages?: number
}

const useMovies = (page: number, search: string): MoviesResult => {
  const [debouncedSearch] = useDebounce(search, 250)
  const [totalPages, setTotalPages] = useState<number | undefined>()

  const query = useQuery<PagedResponse<Movie>>(['movies', page, debouncedSearch], () => getMovie(page, debouncedSearch))
  usePrefetchNextPage(page, debouncedSearch)

  useEffect(() => {
    if (query.data?.totalResults) {
      setTotalPages(query.data.totalResults)
    }
  }, [query.data])

  return {
    ...query,
    totalPages
  }
}

export default useMovies
