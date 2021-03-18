import { getMovie } from 'api/getMovie'
import { useEffect, useState } from 'react'
import { Movie } from 'types/Movie'
import { PagedResponse } from 'types/PagedResponse'
import { useDebounce } from 'use-debounce'

const useMovies = (page: number, search: string) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | undefined>()
  const [data, setData] = useState<PagedResponse<Movie> | undefined>()

  const [debouncedSearch] = useDebounce(search, 250)

  useEffect(() => {
    async function loadMovies () {
      try {
        setLoading(true)
        const movie = await getMovie(page, debouncedSearch)
        setData(movie)
      } catch (e) {
        setError(e.reason)
      } finally {
        setLoading(false)
      }
    }

    if (debouncedSearch) {
      loadMovies()
    }
  }, [debouncedSearch])

  return {
    loading,
    error,
    data
  }
}

export default useMovies
