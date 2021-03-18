import Container from 'components/container/Container'
import MovieCard from 'components/movie-card/MovieCard'
import styled from 'styled-components'
import { Movie } from 'types/Movie'
import useMovies from './hooks/useMovies'

interface Props {

}

const MovieContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;

  & > * {
    margin: 1em 1em;
  }
`

const Main = (props: Props) => {
  const { data } = useMovies(1, 'Batman')

  const movies: Array<Movie | undefined> = data ? data.search : Array(10).fill(undefined)

  return (
    <Container>
      <MovieContainer>
        {movies.map(c => c === undefined ? <div>Loading</div> : <MovieCard movie={c} />)}
      </MovieContainer>
    </Container>
  )
}

export default Main
