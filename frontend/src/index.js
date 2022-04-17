import { ColorModeScript, ChakraProvider, extendTheme } from '@chakra-ui/react'
import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import * as serviceWorker from './serviceWorker'
import Fonts from './fonts'

const theme = extendTheme({
  colors: {
    light: {
      bg: '#FEFEFE',
      800: '#878787',
      600: '#C4C4C4',
      400: '#ECECEC'
    },
    dark: {
      bg: '#262626',
      900: '#121212 ',
      600: '#5B5B5B',
      400: '#878787'
    }
  }
})

ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      <Fonts />
      <App />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
