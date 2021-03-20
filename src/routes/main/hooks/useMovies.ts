import { getMovie } from 'api/getMovie'
import { Movie } from 'types/Movie'
import { PagedResponse } from 'types/PagedResponse'
import { useDebounce } from 'use-debounce'
import { useQuery, useQueryClient } from 'react-query'
import { useEffect, useState } from 'react'

const DEBOUNCE_TIMEOUT = 500

const usePrefetchNextPage = (currentPage: number, search: string) => {
  const queryClient = useQueryClient()

  useEffect(() => {
    queryClient.prefetchQuery(['movies', currentPage + 1, search], () => getMovie(currentPage + 1, search))
  }, [currentPage, search])
}

const useLoadingIndication = (setIsLoading: (isLoading: boolean) => void, search: string) => {
  useEffect(() => {
    if (search !== '') {
      setIsLoading(true)

      const timeout = setTimeout(() => {
        setIsLoading(false)
      }, DEBOUNCE_TIMEOUT)

      return () => clearTimeout(timeout)
    } else {
      setIsLoading(false)
    }
  }, [search])
}

const useTotalPageManagement = (data: PagedResponse<Movie> | undefined, setTotalPages: (pages: number) => void, debouncedSearch: string) => {
  useEffect(() => {
    if (data?.totalResults) {
      setTotalPages(data.totalResults)
    }
  }, [data])

  useEffect(() => {
    if (!data?.totalResults) {
      setTotalPages(0)
    }
  }, [debouncedSearch])
}

export type MoviesResult = {
  totalPages?: number
  isLoading: boolean
  data?: PagedResponse<Movie>
}

const useMovies = (page: number, search: string): MoviesResult => {
  const [debouncedSearch] = useDebounce(search, DEBOUNCE_TIMEOUT)
  const [totalPages, setTotalPages] = useState<number | undefined>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { data } = useQuery<PagedResponse<Movie>>(['movies', page, debouncedSearch], () => getMovie(page, debouncedSearch), { refetchOnWindowFocus: false })

  usePrefetchNextPage(page, debouncedSearch)
  useLoadingIndication(setIsLoading, search)
  useTotalPageManagement(data, setTotalPages, debouncedSearch)

  return {
    data,
    isLoading,
    totalPages
  }
}

export default useMovies
