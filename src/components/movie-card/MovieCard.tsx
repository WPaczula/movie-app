import { Movie } from 'types/Movie'
import { CardWrapper, MovieImage, InfoContainer, Gradient, Title } from './styles'
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

export default MovieCard
