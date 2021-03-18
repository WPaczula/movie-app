import noImage from './no-image.png'

interface Props {
    className?: string
    src: string
}

const Image = ({ src, className }: Props) => {
  return (
        <img className={className} src={src === 'N/A' ? noImage : src} />
  )
}

export default Image
