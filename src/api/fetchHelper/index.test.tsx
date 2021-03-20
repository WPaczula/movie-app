import axios from 'axios'
import { get } from '.'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('fetchHelper', () => {
  describe('get', () => {
    beforeEach(() => {
    })

    it('should add query params to the url.', async () => {
      const query = { search: 'Batman' }
      mockedAxios.get.mockReturnValue(Promise.resolve({}))

      await get(query)

      const argument = mockedAxios.get.mock.calls[0][0]
      expect(argument).toMatch(`&search=${query.search}`)
    })

    it('should reject promise with reason and status if the request fails', async () => {
      const data = { Error: 'Not found' }
      const status = 404
      const error = {
        response: { data, status }
      }
      mockedAxios.get.mockReturnValue(Promise.reject(error))

      try {
        await get({ page: 100 })
      } catch (e) {
        expect(e).toEqual({ reason: data.Error, status })
      }
    })

    it('should reject promise with default reason and 400 if the request fails with unknown error', async () => {
      mockedAxios.get.mockReturnValue(Promise.reject(new Error()))

      try {
        await get({ page: 100 })
      } catch (e) {
        expect(e).toEqual({ reason: 'Unknown error occurred', status: 400 })
      }
    })
  })
})
