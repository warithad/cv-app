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
        gap: 5rem;
    }

    /*CV Page*/
    .cv-name{
        font-family: arial;
        font-size: 3rem;
    }

    .cv-info{
        font-size: 20px;
    }
`

export default GlobalStyle;