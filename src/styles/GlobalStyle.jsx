import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    body{
        background-color: ${({theme})=>theme.lightGray};
        font-family: 'Roboto', sans-serif;

    }

`

export default GlobalStyle