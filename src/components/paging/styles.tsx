import styled from 'styled-components'

export const PagesContainer = styled.ul`
    align-items: center;
    display: flex;
    justify-content: flex-end;
    list-style: none;
`

export const PageLink = styled.li<{active?: boolean, disabled?: boolean}>`
    align-items: center;
    border-radius: 0.25em;
    cursor: pointer;
    display: flex;
    height: 2em;
    justify-content: center;
    margin: 1px;
    user-select: none;
    width: 2em;

    background-color: ${({ theme, active }) => active ? theme.colors.primary : 'transparent'};
    color: ${({ theme, active, disabled }) => {
        if (disabled) {
            return theme.colors.disabled
        }

        return active ? theme.colors.textInverse : theme.colors.primary
    }};
`
