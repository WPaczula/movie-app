import React, { Component, ErrorInfo, ReactNode } from 'react'
import styled from 'styled-components'
import { fontSizeLarge } from 'styles/fontSize'

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

const ErrorPage = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${fontSizeLarge};
    font-weight: bold;
`

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError (_: Error): State {
    return { hasError: true }
  }

  public componentDidCatch (error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render () {
    if (this.state.hasError) {
      return <ErrorPage>Sorry... there was an error</ErrorPage>
    }

    return this.props.children
  }
}

export default ErrorBoundary
