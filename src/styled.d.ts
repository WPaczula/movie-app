// styled.d.ts
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    colors: {
      primary: string
      secondary: string
      background: string
      text: string
   },
   type: {
       fontSizeLarge: string
       fontSizeMedium: string
       fontSizeSmall: string
   }
  }
}
