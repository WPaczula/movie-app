import { useEffect, useState } from 'react'
import noImage from 'assets/no-image.png'
import loading from 'assets/loading.png'
import styled, { css, keyframes } from 'styled-components'

interface Props {
    className?: string
    src: string
}

const fadeIn = keyframes`
    from {
        opacity: 0
    }

    to {
        opacity: 1
    }
`

const AnimatedImage = styled.img<{ loaded: boolean }>`
    animation: ${({ loaded }) => loaded ? css`${fadeIn} 0.5s linear` : 'none'};
    transition: opacity 0.5 linear;
`

const LoadingImage = ({ src, className }: Props) => {
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

export default LoadingImage
