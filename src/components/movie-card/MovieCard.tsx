import styled from 'styled-components'
import { fontSizeMedium } from 'styles/fontSize'
import { Movie } from 'types/Movie'

interface Props {
    movie: Movie
}

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    box-shadow: 0px 0px 15px 5px ${({ theme }) => theme.colors.shadow};
    height: 23em;
    width: 16em;
    display: flex;
    position: relative;
`

const MovieImage = styled.img`
    object-fit: cover;
    height: 18em;
    object-position: center;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
`

const Gradient = styled.div`
    position: absolute;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    bottom: 2em;
    left: 0;
    right: 0;
    top: 15em;
    background-image: linear-gradient(transparent, black, black);
`

const InfoContainer = styled.div`
    height: 7em;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    position: relative;
    padding: 1em;
`

const Title = styled.h1`
    font-size: ${fontSizeMedium};
    color: ${({ theme }) => theme.colors.textInverse};
    text-align: center;
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 2px;
`

const MovieCard = ({ movie }: Props) => {
  return (
        <CardWrapper>
            <MovieImage src={movie.image} />
            <Gradient />
            <InfoContainer>
                <Title>
                    {movie.title}
                </Title>
            </InfoContainer>
        </CardWrapper>
  )
}

export default MovieCard
