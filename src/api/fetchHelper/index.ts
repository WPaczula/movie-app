import axios from 'axios'
import { API_URL } from 'config'
import queryString from 'query-string'

export interface ApiError {
    reason: string
    status: number
}

interface Query {
    [key: string]: string | number
}

export function get<ResponseData> (query: Query) {
  return axios.get<ResponseData>(`${API_URL}&${queryString.stringify(query)}`)
    .then((res) => res.data)
    .catch((e) => {
      const reason = (e.response && e.response.data.Error) || 'Unknown error occurred'
      const status = (e.response && e.response.status) || 400
      const apiError: ApiError = { reason, status }

      return Promise.reject(apiError)
    })
}
