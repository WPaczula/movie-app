import React from 'react'
import styled from 'styled-components'

type Props = React.LabelHTMLAttributes<HTMLLabelElement>

const StyledLabel = styled.label`
    margin-bottom: 0.5em;
    display: block;
`

const Label = (props: Props) => {
  return (
        <StyledLabel {...props} />
  )
}

export default Label
