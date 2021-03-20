import ErrorBoundary from './ErrorBoundary'
import { render, screen } from '@testing-library/react'

describe('ErrorBoundary', () => {
  it('should handle errors gracefully', async () => {
    const Child = () => { throw new Error() }

    render(<ErrorBoundary><Child /></ErrorBoundary>)

    const errorMessage = await screen.findByText(/Sorry... there was an error/)
    expect(errorMessage).toBeInTheDocument()
  })
})
