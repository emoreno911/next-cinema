import AppContextProvider from '../components/contexts/AppContext'
import '../styles/slideshow.css'
// import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  )
}

export default MyApp
