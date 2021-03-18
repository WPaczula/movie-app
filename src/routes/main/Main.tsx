import useMovies from './hooks/useMovies'

interface Props {

}

const Main = (props: Props) => {
  const { movie } = useMovies(1, 'Batman')

  return (
        <div>
            {JSON.stringify(movie)}
        </div>
  )
}

export default Main
