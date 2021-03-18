import { Movie } from 'types/Movie'
import { CardWrapper, MovieImage, InfoContainer, Gradient, Title } from './styles'
import loading from 'assets/loading.png'

interface Props {
    movie: Movie
}

const MovieCard = ({ movie }: Props) => {
  return (
        <CardWrapper>
            <MovieImage src={movie.image} />
            <InfoContainer>
                <Gradient />
                <Title>
                    {movie.title}
                </Title>
            </InfoContainer>
        </CardWrapper>
  )
}

const Loading = () => {
  return <CardWrapper>
        <MovieImage src={loading} />
        <InfoContainer>
                <Gradient />
                <Title />
            </InfoContainer>
    </CardWrapper>
}
MovieCard.Loading = Loading

export default MovieCard
