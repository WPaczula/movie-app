import Image from 'components/image/Image'
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
    width: 14em;
    display: flex;
`

const MovieImage = styled(Image)`
    object-fit: cover;
    overflow: hidden;
    flex: 1;
    object-position: center;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
`

const Gradient = styled.div`
    position: absolute;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    bottom: 75%;
    left: 0;
    right: 0;
    top: -2em;
    background-image: linear-gradient(transparent, black, black);
`

const InfoContainer = styled.div`
    flex: 0 0 3em;
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
    position: relative;
`

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
