import { AuthContextProvider } from '@/context/AuthContextProvider'
import { AppContext } from 'next/app'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}
