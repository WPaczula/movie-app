import Container from 'components/container/Container'
import MovieCard from 'components/movie-card/MovieCard'
import Paging from 'components/paging/Paging'
import { useState } from 'react'
import { Movie } from 'types/Movie'
import useMovies from './hooks/useMovies'
import { MovieContainer, PagingContainer } from './styles'

const Main = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, isLoading, totalPages } = useMovies(currentPage, 'Batman')

  const movies: Array<Movie | undefined> = (data && !isLoading) ? data.search : Array(10).fill(undefined)

  return (
    <Container>
      <MovieContainer>
        {movies.map((m, i) => !m ? <MovieCard.Loading key={`loading-${i}`} /> : <MovieCard key={`${m.title}-${i}`} movie={m} />)}
      </MovieContainer>
      <PagingContainer>
        { totalPages && <Paging totalPages={totalPages} changeCurrentPage={setCurrentPage} initialPage={currentPage} />}
      </PagingContainer>
    </Container>
  )
}

export default Main
