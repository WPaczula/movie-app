import { act, render } from '@testing-library/react'
import ImageComponent, { Props } from './Image'

const image = global.Image
const ImageMock = {} as HTMLImageElement
Object.defineProperty(global, 'Image', {
  writable: true,
  value: function () { return ImageMock }
})

describe('Image', () => {
  afterAll(() => {
    Object.defineProperty(global, 'Image', {
      writable: false,
      value: image
    })
  })

  const renderImage = (props: Partial<Props> = {}) => {
    const {
      src = 'src'
    } = props

    return render(<ImageComponent {...props} src={src}/>)
  }

  it('should set the final src attribute after the image was successfully loaded', async () => {
    const src = 'image/source'
    const { container } = renderImage({ src })
    const imageComponent = container.firstChild

    act(() => {
      const event = {} as Event
      ImageMock.onload!(event)
    })

    expect(imageComponent).toHaveAttribute('src', src)
  })

  it('should set the no image src attribute after the image failed to be loaded', async () => {
    const src = 'image/source'
    const { container } = renderImage({ src })
    const imageComponent = container.firstChild

    act(() => {
      const event = {} as Event
      ImageMock.onerror!(event)
    })

    expect(imageComponent).toHaveAttribute('src', 'no-image.png')
  })

  it('should use loading as src until before on load was invoked', () => {
    const src = 'image/source'
    const { container } = renderImage({ src })

    const imageComponent = container.firstChild

    expect(imageComponent).toHaveAttribute('src', 'loading.png')
  })

  it('should immediately use no image if the source is equal to N/A', () => {
    const src = 'N/A'
    const { container } = renderImage({ src })

    const imageComponent = container.firstChild

    expect(imageComponent).toHaveAttribute('src', 'no-image.png')
  })
})
