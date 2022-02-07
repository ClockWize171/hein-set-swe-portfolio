import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"


const theme = extendTheme({
  colors: {
    brand: {
      100: "#2fff00",
      // ...
      900: "#ff0000",
    },
  },
})


ReactDOM.render(
  <ChakraProvider theme={theme}>
  <ColorModeScript initialColorMode='light'></ColorModeScript>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);


