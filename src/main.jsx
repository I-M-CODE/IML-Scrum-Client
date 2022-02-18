import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import RoutesNavigation from './routes/routes'
import {ChakraProvider} from '@chakra-ui/react'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <RoutesNavigation />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
