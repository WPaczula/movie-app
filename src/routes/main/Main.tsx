import Container from 'components/container/Container'
import MovieCard from 'components/movie-card/MovieCard'
import Paging from 'components/paging/Paging'
import { useState } from 'react'
import { Movie } from 'types/Movie'
import useMovies from './hooks/useMovies'
import { MovieContainer, PagingContainer } from './styles'

const Main = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data } = useMovies(currentPage, 'Batman')

  const movies: Array<Movie | undefined> = data ? data.search : Array(10).fill(undefined)

  return (
    <Container>
      <MovieContainer>
        {movies.map(c => c === undefined ? <div>Loading</div> : <MovieCard movie={c} />)}
      </MovieContainer>
      <PagingContainer>
        { data?.totalResults && <Paging totalPages={Number(data.totalResults)} changeCurrentPage={setCurrentPage} initialPage={currentPage} />}
      </PagingContainer>
    </Container>
  )
}

export default Main
