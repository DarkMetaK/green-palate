import type { AppProps } from 'next/app';

import { globalStyles } from '@/styles/global';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthContextProvider } from '@/context/auth';

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()
  return (
    <AuthContextProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </AuthContextProvider>
  )
}
