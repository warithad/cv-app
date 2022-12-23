import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
    }
    
    .app{
        background-color: #a3a3a3;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100vh;
    }
`

export default GlobalStyle;