import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body{
        background-color: ${({theme})=>theme.lightGray};
    }

`

export default GlobalStyle