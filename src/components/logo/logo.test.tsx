import { screen } from '@testing-library/react'
import renderWithTheme from 'test/renderWithTheme'
import theme from 'theme'
import Logo, { Props } from './Logo'

describe('Logo', () => {
  const renderLogo = (props: Partial<Props> = {}) => {
    return renderWithTheme(<Logo {...props} />)
  }

  it('should use logo font if the flag prop is not set', async () => {
    renderLogo()

    const logo = await screen.findByTestId('logo')

    expect(logo).toHaveStyleRule('font-size', theme.type.logoSize)
  })

  it('should use small font if the small prop is set.', async () => {
    const small = true
    renderLogo({ small })

    const logo = await screen.findByTestId('logo')

    expect(logo).toHaveStyleRule('font-size', theme.type.logoSizeSmall)
  })
})
