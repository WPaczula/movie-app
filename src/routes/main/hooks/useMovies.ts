import { getMovie } from 'api/getMovie'
import { useEffect, useState } from 'react'
import { Movie } from 'types/Movie'
import { PagedResponse } from 'types/PagedResponse'
import { useDebounce } from 'use-debounce'

const useMovies = (page: number, search: string) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | undefined>()
  const [movies, setMovies] = useState<PagedResponse<Movie> | undefined>()

  const [debouncedSearch] = useDebounce(search, 250)

  useEffect(() => {
    async function loadMovie () {
      try {
        setLoading(true)
        const movie = await getMovie(page, debouncedSearch)
        setMovies(movie)
      } catch (e) {
        setError(e.reason)
      } finally {
        setLoading(false)
      }
    }

    if (debouncedSearch) {
      loadMovie()
    }
  }, [debouncedSearch])

  return {
    loading,
    error,
    movie: movies
  }
}

export default useMovies
