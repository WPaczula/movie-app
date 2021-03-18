import React from 'react'
import styled from 'styled-components'

type Props = React.InputHTMLAttributes<HTMLInputElement>

const StyledInput = styled.input`
    padding: 1em;
    display: inline-block;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 0.25em;

    &:focus {
        box-shadow: 0 0 2px 2px rgba(${({ theme }) => theme.colors.primary}, 0.5);
    }
`

const Input = (props: Props) => {
  return (
        <StyledInput {...props} />
  )
}

export default Input
