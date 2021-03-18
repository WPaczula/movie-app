import styled from 'styled-components'
import { Movie } from 'types/Movie'

interface Props {
    movie: Movie
}

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    box-shadow: 0px 0px 4px 4px ${({ theme }) => theme.colors.shadow};
`

const MovieCard = ({ movie }: Props) => {
  return (
        <CardWrapper>
            hello
        </CardWrapper>
  )
}

export default MovieCard
