import Container from 'components/container/Container'
import Heading from 'components/heading/Heading'
import Label from 'components/label/Label'
import MovieCard from 'components/movie-card/MovieCard'
import Paging from 'components/paging/Paging'
import { ChangeEvent, useMemo, useState } from 'react'
import { Movie } from 'types/Movie'
import useMovies from './hooks/useMovies'
import { MovieContainer, PagingContainer, SearchInput, NoResultsMessage, Description, NoResultsContainer } from './styles'

const Main = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [search, setSearch] = useState('')
  const { data, isLoading, totalPages } = useMovies(currentPage, search)
  const movies: Array<Movie | undefined> = useMemo(() => (data && !isLoading) ? data.search : Array(10).fill(undefined), [data])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value)
  }

  return (
    <Container>
      <Heading>Find movies</Heading>
      <Label htmlFor="search">
        Search
      </Label>
      <SearchInput id="search" name="search" onChange={onChange} value={search} placeholder="Search for movies..." />
      {
        data?.response
          ? (<>
            <MovieContainer>
              { movies.map((m, i) => !m ? <MovieCard.Loading key={`loading-${i}`} /> : <MovieCard key={`${m.title}-${i}`} movie={m} />) }
            </MovieContainer>
          </>)
          : (<NoResultsContainer>
            {search && totalPages && <>
              <NoResultsMessage>No results found</NoResultsMessage>
              <Description>Try to use different search phrase</Description>
            </>}
          </NoResultsContainer>)
      }
      <PagingContainer>
        { totalPages && <Paging totalPages={totalPages} changeCurrentPage={setCurrentPage} initialPage={currentPage} />}
      </PagingContainer>
    </Container>
  )
}

export default Main
