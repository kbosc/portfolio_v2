import '../styles/globals.css'
import { ThemeDefault } from "../styles/theme"
import { ThemeProvider } from "styled-components"

function MyApp({ Component, pageProps }) {
  
  return (
    <ThemeProvider theme={ThemeDefault}>
      <Component {...pageProps} />
    </ThemeProvider> 
  )
}

export default MyApp
