import { AuthContextProvider } from '@/context/AuthContextProvider'
import { AppContext } from 'next/app'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ModalContextProvider } from '@/context/ModalContextProvider'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <AuthContextProvider>
      <ModalContextProvider>
        <Component {...pageProps} />
      </ModalContextProvider>
    </AuthContextProvider>
  )
}
