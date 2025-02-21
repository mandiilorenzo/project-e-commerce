import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0
    padding: 0
    box-sizing: border-box
    }

    a {
        text-decoration: none
    }

    ul {
        list-style: none   
    }
    
    :root {
    --dark-color: #000000;
    --white-color: #ffffff; 
    --primary-purple-color: #6528D3;
    --primary-green-color: #6BB27C;
    --gray-color: #EDEDED;
    --second-purple-color: #130234;
}

    body {
    font-family: 'Roboto', sans-serif;
    background-color: var(--dark-color);
    letter-spacing: 1px;
    margin: 0 auto;
    scroll-behavior: smooth;
    color: var(--white-color);
    }
`
export { GlobalStyle }
