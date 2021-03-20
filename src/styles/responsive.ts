import { css } from 'styled-components'

const breakpointDesktop = '768px'

export const desktop = (cssProperties: TemplateStringsArray) => css`
    @media (min-width: ${breakpointDesktop}) {
        ${cssProperties};
    }
`
