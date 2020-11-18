import AppContextProvider from '../components/contexts/AppContext'
import '../styles/slideshow.css'

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  )
}

export default MyApp
