import Container from 'components/container/Container'
import Heading from 'components/heading/Heading'
import Label from 'components/label/Label'
import MovieCard from 'components/movie-card/MovieCard'
import Paging from 'components/paging/Paging'
import Spinner from 'components/spinner/Spinner'
import { ChangeEvent, useEffect, useState } from 'react'
import useMovies from './hooks/useMovies'
import { MovieContainer, PagingContainer, SearchInput, PrimaryMessage, Description, ContentContainer } from './styles'

const Main = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchText, setSearchText] = useState('')
  const { data, isLoading, totalPages } = useMovies(currentPage, searchText)

  // eslint-disable-next-line no-debugger
  const hasNoResults = searchText !== '' && !isLoading && data?.response === false

  useEffect(() => {
    setCurrentPage(1)
  }, [searchText])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value)
  }

  return (
    <>
      <Container>
        <Heading>Find movies</Heading>
        <Label htmlFor="search">
          Search
        </Label>
        <SearchInput id="search" name="search" onChange={onChange} value={searchText} />
        <ContentContainer>
        {
          isLoading
            ? <Spinner data-testid="spinner" />
            : (data && data?.response === true)
                ? <MovieContainer>
                  { data.search.map((m, i) => <MovieCard key={`${m.title}-${i}`} movie={m} />) }
                </MovieContainer>
                : hasNoResults && <>
                  <PrimaryMessage>No results found</PrimaryMessage>
                  <Description>Try to use different search phrase</Description>
                </>
        }
        </ContentContainer>
      </Container>
      <PagingContainer>
        <Paging totalPages={totalPages || 1} changeCurrentPage={setCurrentPage} currentPage={currentPage} />
      </PagingContainer>
    </>
  )
}

export default Main
