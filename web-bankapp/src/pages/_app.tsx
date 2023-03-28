import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {  
  return <Component {...pageProps} />
}
