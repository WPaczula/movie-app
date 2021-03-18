import { QueryClient, QueryClientProvider } from 'react-query'
import React, { ComponentType } from 'react'
import { renderHook } from '@testing-library/react-hooks'

const queryClient = new QueryClient()

function renderQueryHook<TProps, TResult> (
  callback: (props: TProps) => TResult
) {
  const wrapper: ComponentType<TProps> = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
  return renderHook(callback, { wrapper })
}

export default renderQueryHook
