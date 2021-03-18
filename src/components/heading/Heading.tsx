import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { fontSizeLarge } from 'styles/fontSize'

interface Props {
    children: ReactNode
}

const StyledH1 = styled.h1`
    font-size: ${fontSizeLarge};
    margin-bottom: 1em;
    font-weight: 600;
`

const Heading = (props: Props) => {
  return (
        <StyledH1 {...props} />
  )
}

export default Heading
