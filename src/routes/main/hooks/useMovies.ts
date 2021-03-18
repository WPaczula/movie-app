import { getMovie } from 'api/getMovie'
import { Movie } from 'types/Movie'
import { PagedResponse } from 'types/PagedResponse'
import { useDebounce } from 'use-debounce'
import { useQuery, useQueryClient } from 'react-query'
import { useEffect, useState } from 'react'

const usePrefetchNextPage = (currentPage: number, search: string) => {
  const queryClient = useQueryClient()
  queryClient.prefetchQuery(['movies', currentPage + 1, search], () => getMovie(currentPage + 1, search))
}

const useMovies = (page: number, search: string) => {
  const [debouncedSearch] = useDebounce(search, 250)
  const [totalPages, setTotalPages] = useState<number | undefined>()

  const { data, isLoading, isError } = useQuery<PagedResponse<Movie>>(['movies', page, debouncedSearch], () => getMovie(page, debouncedSearch))
  usePrefetchNextPage(page, debouncedSearch)

  useEffect(() => {
    if (data?.totalResults && !totalPages) {
      setTotalPages(Number(data.totalResults))
    }
  }, [data])

  return {
    isLoading,
    isError,
    data,
    totalPages
  }
}

export default useMovies
