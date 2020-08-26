import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-smooth: auto;
    -webkit-font-smoothing: auto;
    -moz-osx-font-smoothing: auto;
  }
  html, body{
    height:100%;
    width:100%;
    background-color: skyblue;
  }
`

export default GlobalStyle