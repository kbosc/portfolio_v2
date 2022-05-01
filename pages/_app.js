import '../styles/globals.css'
import { ThemeDefault } from "../styles/theme"
import { ThemeProvider } from "styled-components"
import { store } from '../src/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  
  return (
    <Provider store={store}>
      <ThemeProvider theme={ThemeDefault}>
        <Component {...pageProps} />
      </ThemeProvider> 
    </Provider>
  )
}

export default MyApp
