import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

jest.mock('api/getMovies', () => ({
  getMovies: jest.fn()
}))

describe('App', () => {
  it('should render without an error.', async () => {
    await render(<App />)
  })
})
