import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Portifolio | Jonathan Silva</title>
        <link rel="shortcut-icon" href="favicon.ico" />
        <link rel="apple-touch-icon" href="favicon.ico" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="description" content="Blog - Jonathan Silva" />
        <meta name="theme-color" content="#182446" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
