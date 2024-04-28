import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import './index.css'
import App from './App'


// extend theme
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
    600: '#FF0000',
  },
}
const fonts =  {
  heading: `'Open Sans', sans-serif`,
  body: `'Raleway', sans-serif`,
}

const theme = extendTheme({ colors, fonts })

const rootElement = document.getElementById('root') as HTMLElement
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)