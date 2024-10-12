// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './assets/redux/app/store.js'
import { MantineProvider } from '@mantine/core'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <MantineProvider withGlobalStyles withNormalizeCSS>
    <App />
    </MantineProvider>
  </Provider>,
 
)
