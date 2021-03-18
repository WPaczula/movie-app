import { useEffect, useState } from 'react'
import noImage from 'assets/no-image.png'
import loading from 'assets/loading.png'
import { AnimatedImage } from './styles'

export interface Props {
    className?: string
    src: string
}

const ImageComponent = ({ src, className }: Props) => {
  const [imageSrc, setImageSrc] = useState(loading)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    setImageLoaded(false)
    setImageError(false)

    const img = new Image()
    img.onload = () => { setImageLoaded(true) }
    img.onerror = () => { setImageError(true) }
    img.src = src

    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [src])

  useEffect(() => {
    if (src === 'N/A') {
      setImageError(true)
    }
  }, [src])

  useEffect(() => {
    if (imageLoaded) {
      setImageSrc(src)
      return
    }

    if (imageError) {
      setImageSrc(noImage)
    }
  }, [imageLoaded, imageError])

  return (
    <AnimatedImage className={className} src={imageSrc} loaded={imageLoaded} />
  )
}

export default ImageComponent
