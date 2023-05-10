import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import companies from './companies.json'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
